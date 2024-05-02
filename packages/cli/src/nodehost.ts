import dotenv from "dotenv"
import prompts from "prompts"
import {
    AskUserOptions,
    Host,
    LogLevel,
    OAIToken,
    ReadFileOptions,
    RetrievalService,
    ServerManager,
    ShellCallOptions,
    UTF8Decoder,
    UTF8Encoder,
    createBundledParsers,
    createFileSystem,
    parseTokenFromEnv,
    setHost,
} from "genaiscript-core"
import { TextDecoder, TextEncoder } from "util"
import { readFile, unlink, writeFile } from "node:fs/promises"
import { ensureDir, existsSync, remove } from "fs-extra"
import { resolve, dirname } from "node:path"
import { glob } from "glob"
import { debug, error, info, warn } from "./log"
import { execa } from "execa"
import { join } from "node:path"
import { LlamaIndexRetrievalService } from "./llamaindexretrieval"
import { createNodePath } from "./nodepath"

class NodeServerManager implements ServerManager {
    async start(): Promise<void> {
        throw new Error("not implement")
    }
    async close(): Promise<void> {
        throw new Error("not implement")
    }
}

export class NodeHost implements Host {
    userState: any = {}
    virtualFiles: Record<string, Uint8Array> = {}
    retrieval: RetrievalService
    readonly path = createNodePath()
    readonly server = new NodeServerManager()
    readonly workspace = createFileSystem()
    readonly parser = createBundledParsers()

    constructor() {
        this.retrieval = new LlamaIndexRetrievalService(this)
    }

    static install(dotEnvPath: string) {
        dotEnvPath = dotEnvPath || resolve(".env")
        if (existsSync(dotEnvPath)) {
            const res = dotenv.config({
                path: dotEnvPath,
                debug: !!process.env.DEBUG,
                override: true,
            })
            if (res.error) throw res.error
        }
        setHost(new NodeHost())
    }

    async readSecret(name: string): Promise<string | undefined> {
        return process.env[name]
    }

    async getSecretToken(options: ModelConnectionOptions): Promise<OAIToken> {
        return await parseTokenFromEnv(process.env, options)
    }

    clearVirtualFiles(): void {
        this.virtualFiles = {}
    }

    setVirtualFile(name: string, content: string) {
        this.virtualFiles[resolve(name)] =
            this.createUTF8Encoder().encode(content)
    }
    isVirtualFile(name: string) {
        return !!this.virtualFiles[name]
    }

    log(level: LogLevel, msg: string): void {
        if (msg === undefined) return
        switch (level) {
            case LogLevel.Error:
                error(msg)
                break
            case LogLevel.Warn:
                warn(msg)
                break
            case LogLevel.Verbose:
                debug(msg)
                break
            case LogLevel.Info:
            default:
                info(msg)
                break
        }
    }
    createUTF8Decoder(): UTF8Decoder {
        return new TextDecoder("utf-8")
    }
    createUTF8Encoder(): UTF8Encoder {
        return new TextEncoder()
    }
    projectFolder(): string {
        return resolve(".")
    }
    installFolder(): string {
        return this.projectFolder()
    }
    resolvePath(...segments: string[]) {
        return resolve(...segments)
    }
    async askUser(options: AskUserOptions) {
        const res = await prompts({
            type: "text",
            name: "value",
            message: options.prompt,
        })
        return res?.value
    }
    async readFile(
        name: string,
        options?: ReadFileOptions
    ): Promise<Uint8Array> {
        const wksrx = /^workspace:\/\//i
        if (wksrx.test(name))
            name = join(this.projectFolder(), name.replace(wksrx, ""))

        // virtual file handler
        const v = this.virtualFiles[resolve(name)]
        if (options?.virtual) {
            if (!v) throw new Error("virtual file not found")
            return v // alway return virtual files
        } else if (options?.virtual !== false && !!v) return v // optional return virtual files

        // read file
        return new Uint8Array(await readFile(name))
    }
    async findFiles(path: string): Promise<string[]> {
        const files = await glob(path, {
            nodir: true,
            windowsPathsNoEscape: true,
        })
        return files
    }
    async writeFile(name: string, content: Uint8Array): Promise<void> {
        await ensureDir(dirname(name))
        delete this.virtualFiles[resolve(name)]
        await writeFile(name, content)
    }
    async deleteFile(name: string) {
        delete this.virtualFiles[resolve(name)]
        await unlink(name)
    }
    async createDirectory(name: string): Promise<void> {
        await ensureDir(name)
    }

    async deleteDirectory(name: string): Promise<void> {
        await remove(name)
    }

    async exec(command: string, args: string[], options: ShellCallOptions) {
        const { cwd, timeout, stdin: input } = options
        const exec = execa
        const { stdout, stderr, exitCode, failed } = await exec(command, args, {
            cleanup: true,
            input,
            timeout,
            cwd,
            preferLocal: true,
            stripFinalNewline: true,
        })
        return { stdout, stderr, exitCode, failed }
    }
}
