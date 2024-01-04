import * as vscode from "vscode"
import { AIRequestOptions, ChatRequestContext, ExtensionState } from "../state"
import { RunTemplateOptions, logInfo, logVerbose } from "gptools-core"

interface ICatChatAgentResult extends vscode.ChatAgentResult2 {
    slashCommand: string
}

// follow https://github.com/microsoft/vscode/issues/199908

export function toChatAgentContext(
    request: vscode.ChatAgentRequest,
    chatContext: vscode.ChatAgentContext
): ChatAgentContext {
    const roles = {
        [vscode.ChatMessageRole.System]: "system",
        [vscode.ChatMessageRole.User]: "user",
        [vscode.ChatMessageRole.Assistant]: "assistant",
        [vscode.ChatMessageRole.Function]: "function",
    }
    const res: ChatAgentContext = {
        history: chatContext.history.map(
            (m) =>
                <ChatMessage>{
                    role: roles[m.role],
                    content: m.content,
                    name: m.name,
                }
        ),
        prompt: request.prompt || "",
    }
    return res
}

export function activateChatAgent(state: ExtensionState) {
    const { context } = state

    const packageJSON: { displayName: string; enabledApiProposals?: string } =
        context.extension.packageJSON
    if (!packageJSON.displayName?.includes("Insiders")) {
        vscode.window.showWarningMessage(
            "GPTools - chat agent only available with gptools.insiders.vsix"
        )
        return
    }

    if (!vscode.env.appName.includes("Insiders")) {
        vscode.window.showWarningMessage(
            "GPTools - chat agent only available with Visual Studio Code Insiders"
        )
        return
    }

    if (!packageJSON.enabledApiProposals?.includes("chatAgents2")) {
        const configure = "Configure"
        vscode.window
            .showWarningMessage(
                "GPTools - chat agent proposal api not enabled.",
                configure
            )
            .then(async (res) => {
                if (res === configure) {
                    await vscode.commands.executeCommand(
                        "workbench.action.configureRuntimeArguments"
                    )
                    await vscode.workspace.openTextDocument({
                        content: `# Configuring Copilot Chat Agents
                        
The Copilot Chat Agents are still under the proposal APIs phase so you need a configuration
step to enable them for gptools (Learn about [proposed apis](https://code.visualstudio.com/api/advanced-topics/using-proposed-api#sharing-extensions-using-the-proposed-api)).

These steps will not be needed once the API gets fully released.

-   edit the \`.vscode-insiders/argv.json\` file to add the gptools extension

\`\`\`json
{
    ...
    "enable-proposed-api": ["${context.extension.id}"]
}
\`\`\`
-   close **all instances** of VS Code Insiders
-   reopen VS Code Insiders
`,
                        language: "markdown",
                    })
                }
            })
        return
    }

    logInfo("activating chat agent")
    const { extensionUri } = context

    const handler: vscode.ChatAgentHandler = async (
        request: vscode.ChatAgentRequest,
        chatContext: vscode.ChatAgentContext,
        progress: vscode.Progress<vscode.ChatAgentProgress>,
        token: vscode.CancellationToken
    ): Promise<ICatChatAgentResult> => {
        const { slashCommand } = request
        const template =
            slashCommand &&
            state.project?.templates.find(({ id }) => id === slashCommand.name)

        const access = await vscode.chat.requestChatAccess("copilot")
        logVerbose(`chat access model: ${access.model || "unknown"}`)
        await vscode.commands.executeCommand("coarch.fragment.prompt", {
            chat: <ChatRequestContext>{
                context: toChatAgentContext(request, chatContext),
                progress,
                token,
                access,
            },
            template,
        })
        return { slashCommand: "run" }
    }

    // Agents appear as top-level options in the chat input
    // when you type `@`, and can contribute sub-commands in the chat input
    // that appear when you type `/`.
    const agent = vscode.chat.createChatAgent("gptools", handler)
    agent.iconPath = vscode.Uri.joinPath(extensionUri, "icon.png")
    agent.description = "Run GPTools within the chat..."
    agent.fullName = "GPTools"
    agent.slashCommandProvider = {
        provideSlashCommands(token) {
            const templates =
                state.project?.templates.filter(
                    (t) => !t.isSystem && t.chat !== false
                ) || []
            return [
                ...templates.map(({ id, title, description }) => ({
                    name: id,
                    description: [title, description]
                        .filter((s) => s)
                        .join("\n"),
                })),
                {
                    name: "run",
                    description:
                        "Run a GPTools script against the current context",
                },
            ]
        },
    }

    agent.followupProvider = {
        provideFollowups(
            result: ICatChatAgentResult,
            token: vscode.CancellationToken
        ) {
            if (
                result.slashCommand === "run" &&
                state.aiRequest?.response?.edits?.length
            ) {
                return [
                    {
                        commandId: "coarch.request.applyEdits",
                        message: "Review the changes in the Refactorings view.",
                        title: "Preview Edits",
                    },
                ]
            }
            return []
        },
    }
}

export function configureChatCompletionForChatAgent(
    options: AIRequestOptions,
    runOptions: RunTemplateOptions
): void {
    logVerbose("using copilot llm")
    const { access, progress, token } = options.chat
    const { partialCb, infoCb } = runOptions

    runOptions.cache = false
    runOptions.getChatCompletions = async (req, chatOptions) => {
        const { trace } = chatOptions
        const roles: Record<string, vscode.ChatMessageRole> = {
            system: 0,
            user: 1,
            assistant: 2,
            function: 3,
        }
        const { model, temperature, seed, ...rest } = req
        trace.item(`gptool model: ${model}`)
        trace.item(`copilot llm model: ${access.model || "unknown"}`)

        if (model.toLocaleLowerCase() !== access.model?.toLocaleLowerCase())
            progress.report(<vscode.ChatAgentContent>{
                content: `⚠ expected model \`${model}\` but got \`${access.model}\`.

`,
            })

        const messages: vscode.ChatMessage[] = req.messages.map((m) => ({
            role: roles[m.role],
            content: typeof m.content === "string" ? m.content : "...",
        }))
        const request = access.makeRequest(
            messages,
            { model, temperature, seed },
            token
        )

        let text = ""
        for await (const fragment of request.response) {
            text += fragment
            partialCb?.({
                responseSoFar: text,
                responseChunk: fragment,
                tokensSoFar: text.length,
            })
        }
        return { text }
    }
}
