import {
    YAMLStringify,
    readText,
    upsert,
    vectorSearch,
    clearIndex,
    estimateTokens,
    normalizeInt,
    expandFiles,
} from "genaiscript-core"
import { createProgressSpinner } from "./spinner"

export async function retrievalIndex(
    files: string[],
    options: {
        excludedFiles: string[]
        name: string
        model: string
        chunkSize: string
        chunkOverlap: string
        splitLongSentences: boolean
    }
) {
    const {
        excludedFiles,
        name: indexName,
        model,
        chunkOverlap,
        chunkSize,
        splitLongSentences,
    } = options || {}
    const fs = await expandFiles(files, excludedFiles)
    if (!fs.length) {
        console.error("no files matching")
        return
    }

    const progress = createProgressSpinner(`indexing ${fs.length} files`)
    await upsert(fs, {
        progress,
        indexName,
        model,
        chunkOverlap: normalizeInt(chunkOverlap),
        chunkSize: normalizeInt(chunkSize),
        splitLongSentences,
    })
}

export async function retrievalClear(options: {
    name: string
    summary: boolean
}) {
    const { name: indexName, summary } = options || {}
    await clearIndex({ indexName })
}

export async function retrievalSearch(
    q: string,
    filesGlobs: string[],
    options: {
        excludedFiles: string[]
        topK: string
        name: string
    }
) {
    const { excludedFiles, name: indexName, topK } = options || {}
    const files = await expandFiles(filesGlobs, excludedFiles)
    const progress = createProgressSpinner(
        `searching '${q}' in ${files.length} files`
    )
    const res = await vectorSearch(q, {
        files,
        topK: normalizeInt(topK),
        indexName,
        progress,
    })
    console.log(YAMLStringify(res))
}

export async function retrievalTokens(
    filesGlobs: string[],
    options: { excludedFiles: string[]; model: string }
) {
    const { model = "gpt4" } = options || {}

    const print = (file: string, content: string) =>
        console.log(
            `${file}, ${content.length} chars, ${estimateTokens(model, content)} tokens`
        )

    const files = await expandFiles(filesGlobs, options?.excludedFiles)
    let text = ""
    for (const file of files) {
        const content = await readText(file)
        if (content) {
            print(file, content)
            text += content
        }
    }
    print("total", text)
}
