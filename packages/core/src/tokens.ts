import { ChatCompletionMessageParam } from "./chat"
import {
    ChatCompletionContentPart,
    ChatCompletionContentPartText,
    type ChatCompletionTool,
} from "openai/resources"
import { encodeChat, encode } from "gpt-tokenizer"
import { logError, logVerbose } from "./util"
import { parseModelIdentifier } from "./models"

export function estimateTokens(model: string, text: string) {
    if (!text?.length) return 0
    try {
        return encode(text).length
    } catch (e) {
        logVerbose(e)
        return text.length >> 2
    }
}

export function estimateChatTokens(
    modelId: string,
    messages: ChatCompletionMessageParam[],
    tools?: ChatCompletionTool[]
): number {
    if (!messages?.length) return 0
    try {
        // does not support images
        if (
            messages.find(
                (msg) =>
                    msg.content !== "string" &&
                    Array.isArray(msg.content) &&
                    (msg.content as ChatCompletionContentPart[])?.find(
                        (part) => part.type === "image_url"
                    )
            )
        )
            return undefined

        const chat: {
            role: "user" | "system" | "assistant"
            content: string
        }[] = messages
            .filter(
                ({ role }) =>
                    role === "user" || role === "system" || role === "assistant"
            )
            .map(({ role, content }) => ({
                role: role as "user" | "system" | "assistant",
                content:
                    typeof content === "string"
                        ? content
                        : content
                              ?.filter(({ type }) => type === "text")
                              .map(
                                  (c) =>
                                      (c as ChatCompletionContentPartText).text
                              )
                              .join("\n"),
            }))
            .filter(({ content }) => !!content?.length)
        const chatTokens = encodeChat(chat, "gpt-4")
        return chatTokens.length | 0
    } catch (e) {
        logVerbose(e)
        return (JSON.stringify(messages).length / 3) | 0
    }
}
