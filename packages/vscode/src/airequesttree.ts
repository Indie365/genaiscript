import * as vscode from "vscode"
import {
    AIRequestSnapshot,
    AIRequestSnapshotKey,
    ExtensionState,
} from "./state"
import { CHANGE, CacheEntry, cachedAIRequestPrefix } from "gptools-core"
import { Cache } from "gptools-core"
import { infoUri } from "./markdowndocumentprovider"
import { toMarkdownString } from "./markdown"

type AIRequestTreeNode = CacheEntry<AIRequestSnapshotKey, AIRequestSnapshot>

class AIRequestTreeDataProvider
    implements vscode.TreeDataProvider<AIRequestTreeNode>
{
    cache: Cache<AIRequestSnapshotKey, AIRequestSnapshot>
    constructor(readonly state: ExtensionState) {
        this.cache = state.aiRequestCache()
        this.cache.addEventListener(CHANGE, () => this.refresh())
    }

    async getTreeItem(element: AIRequestTreeNode): Promise<vscode.TreeItem> {
        const { sha, key } = element
        const item = new vscode.TreeItem(
            key.fragment.fullId,
            vscode.TreeItemCollapsibleState.None
        )
        item.description = key.template.title
        item.id = sha
        item.command = {
            command: "markdown.showPreview",
            arguments: [infoUri(cachedAIRequestPrefix + sha + ".md")],
            title: "Show Trace",
        }
        return item
    }

    async getChildren(
        element?: AIRequestTreeNode | undefined
    ): Promise<AIRequestTreeNode[]> {
        if (!element) {
            const entries = await this.cache.entries()
            entries.reverse()
            return entries
        }
        return undefined
    }

    async resolveTreeItem?(
        item: vscode.TreeItem,
        element: AIRequestTreeNode,
        token: vscode.CancellationToken
    ) {
        const entry = await this.cache.getEntryBySha(element.sha)
        if (entry && !token.isCancellationRequested) {
            const { key, val } = entry
            item.tooltip = new vscode.MarkdownString(
                toMarkdownString(
                    val.response?.summary ||
                        val.response?.text.slice(0, 100) ||
                        ""
                )
            )
        }

        return item
    }

    private _onDidChangeTreeData: vscode.EventEmitter<
        void | AIRequestTreeNode | AIRequestTreeNode[]
    > = new vscode.EventEmitter<
        void | AIRequestTreeNode | AIRequestTreeNode[]
    >()
    readonly onDidChangeTreeData: vscode.Event<
        void | AIRequestTreeNode | AIRequestTreeNode[]
    > = this._onDidChangeTreeData.event

    refresh(treeItem?: AIRequestTreeNode | AIRequestTreeNode[]): void {
        this._onDidChangeTreeData.fire(treeItem)
    }
}

export function activateAIRequestTreeDataProvider(state: ExtensionState) {
    const { context } = state
    const { subscriptions } = context
    const treeDataProvider = new AIRequestTreeDataProvider(state)
    const treeView = vscode.window.createTreeView("coarch.prompts.requests", {
        treeDataProvider,
    })
    subscriptions.push(treeView)
}
