import {
    FragmentTransformResponse,
    host,
    runTemplate,
    MarkdownTrace,
    convertDiagnosticToGitHubActionCommand,
    convertDiagnosticToAzureDevOpsCommand,
    dotGenaiscriptPath,
    assert,
    isCancelError,
    normalizeInt,
    normalizeFloat,
    GENAI_JS_REGEX,
    GPSPEC_REGEX,
    FILES_NOT_FOUND_ERROR_CODE,
    GENERATION_ERROR_CODE,
    appendJSONL,
    writeFileEdits,
    parseVars,
} from "genaiscript-core"
import ora from "ora"
import { basename, resolve, join, relative, dirname } from "node:path"
import { appendFile, writeFile } from "node:fs/promises"
import { emptyDir, ensureDir } from "fs-extra"
import { buildProject } from "./build"

export async function batchScript(
    tool: string,
    specs: string[],
    options: {
        excludedFiles: string[]
        out: string
        outSummary: string
        removeOut: boolean
        retry: string
        retryDelay: string
        maxDelay: string
        label: string
        temperature: string
        topP: string
        seed: string
        maxTokens: string
        model: string
        cache: boolean
        applyEdits: boolean
        vars: string[]
    }
) {
    const spinner = ora({ interval: 200 }).start("preparing tool and files")

    const {
        out = dotGenaiscriptPath("results"),
        removeOut,
        model,
        cache,
        label,
        outSummary,
        applyEdits,
        excludedFiles,
        vars,
    } = options
    const outAnnotations = join(out, "annotations.jsonl")
    const outData = join(out, "data.jsonl")
    const outFenced = join(out, "fenced.jsonl")
    const outOutput = join(out, "output.md")
    const outErrors = join(out, "errors.jsonl")
    const outFileEdits = join(out, "file-edits.jsonl")

    const retry = normalizeInt(options.retry) || 12
    const retryDelay = normalizeInt(options.retryDelay) || 15000
    const maxDelay = normalizeInt(options.maxDelay) || 360000
    const temperature = normalizeFloat(options.temperature)
    const topP = normalizeFloat(options.topP)
    const seed = normalizeFloat(options.seed)
    const maxTokens = normalizeInt(options.maxTokens)

    const toolFiles: string[] = []
    if (GENAI_JS_REGEX.test(tool)) toolFiles.push(tool)
    const specFiles = new Set<string>()
    for (const arg of specs) {
        const ffs = await host.findFiles(arg)
        for (const f of ffs) {
            if (GPSPEC_REGEX.test(f)) specFiles.add(f)
            else {
                const fp = `${f}.gpspec.md`
                const md = `# Specification
                
-   [${basename(f)}](./${basename(f)})\n`
                host.setVirtualFile(fp, md)
                specFiles.add(fp)
            }
        }
    }

    if (excludedFiles?.length) {
        for (const arg of excludedFiles) {
            const ffs = await host.findFiles(arg)
            for (const f of ffs) specFiles.delete(f)
        }
    }

    if (!specFiles.size) {
        spinner.fail("no file found")
        process.exit(FILES_NOT_FOUND_ERROR_CODE)
    }

    const prj = await buildProject({
        toolFiles,
        specFiles: Array.from(specFiles),
    })
    const script = prj.templates.find(
        (t) =>
            t.id === tool ||
            (t.filename &&
                GENAI_JS_REGEX.test(tool) &&
                resolve(t.filename) === resolve(tool))
    )
    if (!script) throw new Error(`tool ${tool} not found`)

    spinner.succeed(
        `tool: ${script.id} (${script.title}), files: ${specFiles.size}, out: ${resolve(out)}`
    )

    let errors = 0
    let totalTokens = 0
    if (removeOut) await emptyDir(out)
    await ensureDir(out)
    for (let i = 0; i < prj.rootFiles.length; i++) {
        const specFile = prj.rootFiles[i].filename
        const file = specFile.replace(GPSPEC_REGEX, "")
        const meta = { tool, file }
        try {
            spinner.suffixText = ""
            spinner.start(`${file} (${i + 1}/${specFiles.size})`)
            const fragment = prj.rootFiles.find(
                (f) => resolve(f.filename) === resolve(specFile)
            ).fragments[0]
            assert(fragment !== undefined, `${specFile} not found`)
            let tokens = 0
            const result: FragmentTransformResponse = await runTemplate(
                script,
                fragment,
                {
                    infoCb: () => {},
                    partialCb: ({ tokensSoFar }) => {
                        tokens = tokensSoFar
                        spinner.suffixText = `${tokens} tokens`
                    },
                    skipLLM: false,
                    label,
                    cache,
                    temperature,
                    topP,
                    seed,
                    maxTokens,
                    model,
                    retry,
                    retryDelay,
                    maxDelay,
                    vars: parseVars(vars),
                }
            )

            const fileEdits = result.fileEdits || {}
            if (Object.keys(fileEdits).length) {
                if (applyEdits && !result.error) await writeFileEdits(result)
                // save results in various files
                await appendJSONL(
                    outFileEdits,
                    [{ fileEdits: result.fileEdits }],
                    meta
                )
            }
            if (result.error)
                await appendJSONL(outErrors, [{ error: result.error }], meta)
            if (result.annotations?.length)
                await appendJSONL(outAnnotations, result.annotations, meta)
            if (result.fences?.length)
                await appendJSONL(outFenced, result.fences, meta)
            if (result.frames?.length)
                await appendJSONL(outData, result.frames, meta)
            // add to summary
            if (outSummary) {
                const st = new MarkdownTrace()
                st.details(file, result.text)
                await appendFile(outSummary, st.content)
            }
            // save results
            const outText = join(
                out,
                `${relative(".", specFile).replace(GPSPEC_REGEX, ".output.md")}`
            )
            const outTrace = join(
                out,
                `${relative(".", specFile).replace(GPSPEC_REGEX, ".trace.md")}`
            )
            const outJSON = join(
                out,
                `${relative(".", specFile).replace(GPSPEC_REGEX, ".json")}`
            )
            await ensureDir(dirname(outText))
            await writeFile(outText, result.text, { encoding: "utf8" })
            await writeFile(outTrace, result.trace, { encoding: "utf8" })
            await appendFile(
                outOutput,
                `- ${result.error ? (isCancelError(result.error as any) ? "⚠" : "❌") : "✅"} [${relative(".", specFile).replace(GPSPEC_REGEX, "")}](${relative(out, outText)}) ([trace](${relative(out, outTrace)}))\n`,
                { encoding: "utf8" }
            )
            await writeFile(outJSON, JSON.stringify(result, null, 2), {
                encoding: "utf8",
            })

            if (result.error) {
                if (isCancelError(result.error as Error))
                    spinner.warn(
                        `${spinner.text}, cancelled, ${(result.error as Error).message || result.error}`
                    )
                else {
                    errors++
                    spinner.fail(
                        `${spinner.text}, ${(result.error as Error).message || result.error}`
                    )
                }
            } else spinner.succeed()

            totalTokens += tokens

            // if in a CI/GitHub Actions build, print annotations
            if (
                result.annotations?.length &&
                process.env.CI &&
                process.env.GITHUB_ACTION
            )
                result.annotations
                    .map(convertDiagnosticToGitHubActionCommand)
                    .forEach((d) => console.log(d))
            else if (
                // Azure DevOps
                result.annotations?.length &&
                process.env.SYSTEM_TEAMFOUNDATIONCOLLECTIONURI
            )
                result.annotations
                    .map(convertDiagnosticToAzureDevOpsCommand)
                    .forEach((d) => console.log(d))
        } catch (e) {
            errors++
            await appendJSONL(
                outErrors,
                [{ error: e.message + "\n" + e.stack }],
                meta
            )
            spinner.fail(`${spinner.text}, ${e.error}`)
        }
    }

    if (errors) process.exit(GENERATION_ERROR_CODE)
}
