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
    if (!f) throwError("token not specified", true)
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
