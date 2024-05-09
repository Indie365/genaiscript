import { logError, logVerbose, normalizeInt, trimTrailingSlash } from "./util"
import { host } from "./host"
import {
    AZURE_OPENAI_API_VERSION,
    MAX_CACHED_TEMPERATURE,
    MAX_CACHED_TOP_P,
    MODEL_PROVIDER_OPENAI,
    TOOL_ID,
} from "./constants"
import { estimateTokens } from "./tokens"
import { YAMLStringify } from "./yaml"
import {
    ChatCompletionChunk,
    ChatCompletionHandler,
    ChatCompletionRequestCacheKey,
    ChatCompletionResponse,
    ChatCompletionToolCall,
    LanguageModel,
    getChatCompletionCache,
} from "./chat"
import { RequestError, errorMessage } from "./error"
import { createFetch } from "./fetch"
import { parseModelIdentifier } from "./models"
import { JSON5TryParse } from "./json5"

export const OpenAIChatCompletion: ChatCompletionHandler = async (
    req,
    cfg,
    options,
    trace
) => {
    const { temperature, top_p, seed, tools } = req
    const {
        requestOptions,
        partialCb,
        maxCachedTemperature = MAX_CACHED_TEMPERATURE,
        maxCachedTopP = MAX_CACHED_TOP_P,
        cache: useCache,
        cacheName,
        retry,
        retryDelay,
        maxDelay,
    } = options
    const { signal } = requestOptions || {}
    const { headers, ...rest } = requestOptions || {}
    const { token, source, ...cfgNoToken } = cfg
    const { model } = parseModelIdentifier(req.model)

    const cache = getChatCompletionCache(cacheName)
    const caching =
        useCache === true || // always use cache
        (useCache !== false && // never use cache
            seed === undefined && // seed is not cacheable (let the LLM make the run determinsistic)
            !tools?.length && // assume tools are non-deterministic by default
            (isNaN(temperature) ||
                isNaN(maxCachedTemperature) ||
                temperature < maxCachedTemperature) && // high temperature is not cacheable (it's too random)
            (isNaN(top_p) || isNaN(maxCachedTopP) || top_p < maxCachedTopP))
    trace.itemValue(`caching`, caching)
    const cachedKey = caching
        ? <ChatCompletionRequestCacheKey>{
              ...req,
              ...cfgNoToken,
              model: req.model,
              temperature: req.temperature,
              top_p: req.top_p,
              max_tokens: req.max_tokens,
          }
        : undefined
    const cached = cachedKey ? await cache.get(cachedKey) : undefined
    if (cached !== undefined) {
        partialCb?.({
            tokensSoFar: estimateTokens(model, cached),
            responseSoFar: cached,
            responseChunk: cached,
        })
        trace.itemValue(`cache hit`, await cache.getKeySHA(cachedKey))
        return { text: cached, cached: true }
    }

    const r2 = { ...req, model }
    let postReq: any = r2

    let url = ""
    const toolCalls: ChatCompletionToolCall[] = []

    if (cfg.type === "openai" || cfg.type === "localai") {
        r2.stream = true
        url = trimTrailingSlash(cfg.base) + "/chat/completions"
    } else if (cfg.type === "azure") {
        r2.stream = true
        delete r2.model
        url =
            trimTrailingSlash(cfg.base) +
            "/" +
            model.replace(/\./g, "") +
            `/chat/completions?api-version=${AZURE_OPENAI_API_VERSION}`
    } else throw new Error(`api type ${cfg.type} not supported`)

    trace.itemValue(`url`, `[${url}](${url})`)

    let numTokens = 0
    const fetchRetry = await createFetch({
        trace,
        retries: retry,
        retryDelay,
        maxDelay,
    })
    trace.dispatchChange()

    trace.detailsFenced(`✉️ POST ${url}`, postReq, "json")
    const body = JSON.stringify(postReq)
    let r: Response
    try {
        r = await fetchRetry(url, {
            headers: {
                // openai
                authorization:
                    cfg.token &&
                    (cfg.type === "openai" || cfg.type === "localai")
                        ? `Bearer ${cfg.token}`
                        : undefined,
                // azure
                "api-key":
                    cfg.token && cfg.type === "azure" ? cfg.token : undefined,
                "user-agent": TOOL_ID,
                "content-type": "application/json",
                ...(headers || {}),
            },
            body,
            method: "POST",
            ...(rest || {}),
        })
    } catch (e) {
        trace.error(errorMessage(e), e)
        throw e
    }

    trace.itemValue(`response`, `${r.status} ${r.statusText}`)
    if (r.status !== 200) {
        let body: string
        try {
            body = await r.text()
        } catch (e) {}
        const { error } = JSON5TryParse(body, {}) as { error: unknown }
        if (error) trace.error(undefined, error)
        throw new RequestError(
            r.status,
            r.statusText,
            error,
            body,
            normalizeInt(r.headers.get("retry-after"))
        )
    }

    trace.content += "\n\n"

    let done = false
    let finishReason: ChatCompletionResponse["finishReason"] = undefined
    let chatResp = ""
    let pref = ""

    const decoder = host.createUTF8Decoder()
    if (r.body.getReader) {
        const reader = r.body.getReader()
        while (!signal?.aborted) {
            const { done, value } = await reader.read()
            if (done) break
            doChunk(value)
        }
    } else {
        for await (const value of r.body as any) {
            if (signal?.aborted) break
            doChunk(value)
        }
    }
    if (signal?.aborted) finishReason = "cancel"

    trace.content += "\n\n"
    trace.itemValue(`finish reason`, finishReason)
    if (done && finishReason === "stop")
        await cache.set(cachedKey, chatResp, { trace })

    return { text: chatResp, toolCalls, finishReason }

    function doChunk(value: Uint8Array) {
        // Massage and parse the chunk of data
        let chunk = decoder.decode(value, { stream: true })

        chunk = pref + chunk
        const ch0 = chatResp
        chunk = chunk.replace(/^data:\s*(.*)[\r\n]+/gm, (_, json) => {
            if (json === "[DONE]") {
                done = true
                return ""
            }
            try {
                const obj: ChatCompletionChunk = JSON.parse(json)
                if (!obj.choices?.length) return ""
                else if (obj.choices?.length != 1)
                    throw new Error("too many choices in response")
                const choice = obj.choices[0]
                const { finish_reason, delta } = choice
                if (typeof delta?.content == "string") {
                    numTokens += estimateTokens(model, delta.content)
                    chatResp += delta.content
                    if (finish_reason) finishReason = finish_reason as any
                    if (delta.content)
                        trace.content += delta.content.includes("`")
                            ? `\`\`\`\` ${delta.content.replace(/\n/g, " ")} \`\`\`\`\` `
                            : `\`${delta.content.replace(/\n/g, " ")}\` `
                } else if (
                    finish_reason === "function_call" ||
                    finish_reason === "tool_calls"
                ) {
                    finishReason = "tool_calls"
                    const { tool_calls } = delta
                    //logVerbose(
                    //    `delta tool calls: ${JSON.stringify(tool_calls)}`
                    //)
                    for (const call of tool_calls) {
                        const tc =
                            toolCalls[call.index] ||
                            (toolCalls[call.index] = {
                                id: call.id,
                                name: call.function.name,
                                arguments: "",
                            })
                        if (call.function.arguments)
                            tc.arguments += call.function.arguments
                    }
                } else if (finish_reason === "length") {
                    finishReason = finish_reason
                } else if (finish_reason === "stop") {
                    finishReason = finish_reason
                } else if (finish_reason === "content_filter") {
                    finishReason = finish_reason
                }
            } catch (e) {
                trace.error(`error processing chunk`, e)
            }
            return ""
        })
        const progress = chatResp.slice(ch0.length)
        if (progress != "") {
            // logVerbose(`... ${progress.length} chars`);
            partialCb?.({
                responseSoFar: chatResp,
                tokensSoFar: numTokens,
                responseChunk: progress,
            })
        }
        pref = chunk
    }
}

export const OpenAIModel = Object.freeze<LanguageModel>({
    completer: OpenAIChatCompletion,
    id: MODEL_PROVIDER_OPENAI,
})
