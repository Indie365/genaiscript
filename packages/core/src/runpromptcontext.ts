import { minimatch } from "minimatch"
import {
    PromptNode,
    appendChild,
    createAssistantNode,
    createDefDataNode,
    createDefNode,
    createFunctionNode,
    createSchemaNode,
    createStringTemplateNode,
    createTextNode,
    renderPromptNode,
} from "./promptdom"
import { MarkdownTrace } from "./trace"
import {
    ChatCompletionAssistantMessageParam,
    ChatCompletionMessageParam,
    executeChatSession,
    mergeGenerationOptions,
    toChatCompletionUserMessage,
} from "./chat"
import { GenerationOptions } from "./promptcontext"
import {
    parseModelIdentifier,
    resolveLanguageModel,
    resolveModelConnectionInfo,
} from "./models"
import { renderAICI } from "./aici"
import { CancelError, isCancelError, serializeError } from "./error"
import { checkCancelled } from "./cancellation"
import { MODEL_PROVIDER_AICI } from "./constants"

export interface RunPromptContextNode extends RunPromptContext {
    node: PromptNode
}

export function createRunPromptContext(
    options: GenerationOptions,
    env: ExpansionVariables,
    trace: MarkdownTrace
): RunPromptContextNode {
    const { cancellationToken } = options || {}
    const node: PromptNode = { children: [] }

    const defTool: (
        name: string,
        description: string,
        parameters: ChatFunctionParameters,
        fn: ChatFunctionHandler
    ) => void = (name, description, parameters, fn) => {
        appendChild(node, createFunctionNode(name, description, parameters, fn))
    }

    const defSchema = (
        name: string,
        schema: JSONSchema,
        defOptions?: DefSchemaOptions
    ) => {
        appendChild(node, createSchemaNode(name, schema, defOptions))

        return name
    }

    const ctx = <RunPromptContextNode>{
        node,
        writeText: (body, options) => {
            if (body !== undefined && body !== null) {
                const { priority, maxTokens } = options || {}
                appendChild(
                    node,
                    options?.assistant
                        ? createAssistantNode(body, { priority, maxTokens })
                        : createTextNode(body, { priority, maxTokens })
                )
            }
        },
        $(strings, ...args) {
            appendChild(node, createStringTemplateNode(strings, args))
        },
        def(name, body, defOptions) {
            name = name ?? ""
            const doptions = { ...(defOptions || {}), trace }
            doptions.lineNumbers = doptions.lineNumbers ?? options.lineNumbers
            // shortcuts
            if (body === undefined || body === null) return undefined
            else if (Array.isArray(body)) {
                if (body.length === 0 && !doptions.ignoreEmpty)
                    throw new CancelError(`def ${name} files empty`)
                body.forEach((f) => ctx.def(name, f, defOptions))
            } else if (typeof body === "object" && body.filename) {
                const { glob, endsWith } = defOptions || {}
                const filename = body.filename
                if (glob && filename) {
                    const match = minimatch(filename, glob, {
                        windowsPathsNoEscape: true,
                    })
                    if (!match) return undefined
                }
                if (endsWith && !filename.endsWith(endsWith)) return undefined
                appendChild(node, createDefNode(name, body, doptions))
            } else if (typeof body === "string") {
                appendChild(
                    node,
                    createDefNode(
                        name,
                        { filename: "", content: body },
                        doptions
                    )
                )
            }

            // TODO: support clause
            return name
        },
        defData: (name, data, defOptions) => {
            appendChild(node, createDefDataNode(name, data, defOptions))
            return name
        },
        defTool,
        defFunction: defTool,
        defSchema,
        fence(body, options?: DefOptions) {
            ctx.def("", body, options)
            return undefined
        },
        runPrompt: async (generator, runOptions) => {
            try {
                trace.startDetails(`🎁 run prompt`)

                const genOptions = mergeGenerationOptions(options, runOptions)
                const ctx = createRunPromptContext(genOptions, env, trace)
                if (typeof generator === "string")
                    ctx.node.children.push(createTextNode(generator))
                else await generator(ctx)
                const node = ctx.node

                checkCancelled(cancellationToken)

                let messages: ChatCompletionMessageParam[] = []
                let functions: ChatFunctionCallback[] = undefined
                let schemas: Record<string, JSONSchema> = undefined
                // expand template
                const { provider } = parseModelIdentifier(genOptions.model)
                if (provider === MODEL_PROVIDER_AICI) {
                    const { aici } = await renderAICI("prompt", node)
                    // todo: output processor?
                    messages.push(aici)
                } else {
                    const {
                        errors,
                        schemas: scs,
                        functions: fns,
                        messages: msgs,
                    } = await renderPromptNode(genOptions.model, node, {
                        trace,
                    })

                    schemas = scs
                    functions = fns
                    messages.push(...msgs)

                    if (errors?.length)
                        throw new Error("errors while running prompt")
                }

                const connection = await resolveModelConnectionInfo(genOptions)
                if (!connection.token)
                    throw new Error("model connection error " + connection.info)
                const { completer } = resolveLanguageModel(genOptions)
                if (!completer)
                    throw new Error(
                        "model driver not found for " + connection.info
                    )
                const resp = await executeChatSession(
                    connection.token,
                    cancellationToken,
                    messages,
                    functions,
                    schemas,
                    completer,
                    genOptions
                )
                return resp
            } catch (e) {
                trace.error(e)
                return {
                    finishReason: isCancelError(e) ? "cancel" : "fail",
                    error: serializeError(e),
                }
            } finally {
                trace.endDetails()
            }
        },
    }

    return ctx
}
