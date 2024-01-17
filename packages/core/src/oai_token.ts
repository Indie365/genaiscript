import { RequestError } from "./chat"
import { throwError } from "./error"
import { OAIToken, host } from "./host"
import { fromBase64, logInfo, logWarn, utf8Decode } from "./util"

let cfg: OAIToken

function validateTokenCore(token: string, quiet = false) {
    if (!token.startsWith("ey")) return

    let timeleft = 0
    const p = token.split(".")[1]
    try {
        const data = JSON.parse(utf8Decode(fromBase64(p)))
        timeleft = Math.round((data.exp * 1000 - Date.now()) / 1000)
        if (!quiet)
            logInfo(
                `token for: ${data.name} <${data.unique_name}>, valid for ${timeleft} seconds`
            )
    } catch (e) {
        throw new Error("invalid token structure")
    }
    if (timeleft < 60) throw new Error("token expired")
}

export async function clearToken() {
    await host.setSecretToken(undefined)
    cfg = undefined
}

export async function initToken(force = false) {
    if (cfg && !force) {
        // already set? revalidate
        try {
            validateTokenCore(cfg.token, true)
            return cfg
        } catch {}
    }

    cfg = await host.getSecretToken()
    if (cfg && !force) {
        try {
            validateTokenCore(cfg.token)
            return cfg
        } catch (e) {
            logWarn(e.message)
        }
    }

    const f = await host.askToken()
    if (!f)
        throw new RequestError(
            403,
            "token not specified",
            {
                type: "no_token",
                message: "token not configured, please run command 'key help'",
                param: undefined,
                code: "no_token",
            },
            '{ code: "no_token" }',
            -1
        )
    return await setToken(f)
}

export async function setToken(token: string) {
    const tok = await parseToken(token)
    await host.setSecretToken(tok)
    return tok
}

export async function parseToken(f: string) {
    if (f.startsWith("sk-")) {
        // OpenAI token
        cfg = {
            url: "https://api.openai.com/v1/",
            token: f,
            isOpenAI: true,
        }
        return cfg
    }

    let m = /(https:\/\/[\-\w\.]+)\S*#oaikey=(\w+)/.exec(f)
    if (m) {
        const url = m[1]
        const token = m[2]
        validateTokenCore(token)
        cfg = { url, token }
        return cfg
    }

    m = /(https:\/\/[\-\w\.]+)\S*#key=(\w+)/.exec(f)
    if (m) {
        const url = m[1] + "/openai/deployments/"
        const token = m[2]
        validateTokenCore(token)
        cfg = { url, token }
        return cfg
    }

    m = /(https:\/\/[\-\w\.]+)\S*#tgikey=(\w+)/.exec(f)
    if (m) {
        const url = m[1]
        const token = m[2]
        cfg = { url, token, isTGI: true }
        return cfg
    }

    m = /https:\/\/[\-\w]+.openai\.azure\.com\/openai\//i.exec(f)
    if (m) {
        const url = m[0] + "deployments/"
        m = /bearer (ey[\w\.\-]+)/.exec(f)
        if (m) {
            const token = m[1]
            validateTokenCore(token)
            cfg = { url, token }
            return cfg
        }
    }

    throw new RequestError(
        400,
        "Invalid OpenAI token",
        undefined,
        "Invalid OpenAI token or configuration",
        0
    )
}

export async function parseTokenFromEnv(
    env: Record<string, string>
): Promise<OAIToken> {
    if (env.GPTOOLS_TOKEN) {
        const tok = await parseToken(env.GPTOOLS_TOKEN)
        tok.source = "env: GPTOOLS_TOKEN"
        return tok
    }
    if (env.OPENAI_API_KEY) {
        const key = env.OPENAI_API_KEY
        const base = env.OPENAI_API_BASE
        const type = env.OPENAI_API_TYPE
        const version = env.OPENAI_API_VERSION
        if (!base) throw new Error("OPENAI_API_BASE not set")
        if (type && type !== "azure")
            throw new Error("OPENAI_API_TYPE must be 'azure'")
        if (version && version !== "2023-03-15-preview")
            throw new Error("OPENAI_API_VERSION must be '2023-03-15-preview'")
        const name = type === "azure" ? "key" : "oaikey"
        const tok = await parseToken(`${base}#${name}=${key}`)
        tok.source = "env: OPENAI_API_..."
        return tok
    }
    if (env.JAN_AI_PORT) {
        const port = parseInt(env.JAN_AI_PORT)
        const base = env.JAN_AI_BASE || "http://localhost"
        const tok: OAIToken = {
            url: `${base}:${port}/`,
            token: "",
            source: `env: JAN_AI_...`,
        }
        return tok
    }
    return undefined
}
