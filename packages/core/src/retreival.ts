import {
    RetreivalClientOptions,
    RetreivalSearchOptions,
    RetreivalUpsertOptions,
    host,
} from "./host"
import { lookupMime } from "./mime"

const UPSERTFILE_MIME_TYPES = [
    "application/pdf",
    "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
]

export function isIndexable(filename: string) {
    const type = lookupMime(filename) || "text/plain"
    return /^text\//i.test(type) || UPSERTFILE_MIME_TYPES.includes(type)
}

export async function clearIndex(
    options?: RetreivalClientOptions
): Promise<void> {
    const { trace } = options || {}
    await host.retreival.init(trace)
    await host.retreival.clear()
}

export async function upsert(
    fileOrUrls: (string | LinkedFile)[],
    options?: RetreivalClientOptions & RetreivalUpsertOptions
) {
    if (!fileOrUrls?.length) return
    const { progress, trace, token, summary, mimeType } = options || {}
    const retreival = host.retreival
    await retreival.init(trace)
    const files: LinkedFile[] = fileOrUrls.map((f) =>
        typeof f === "string" ? <LinkedFile>{ filename: f } : f
    )
    const increment = 100 / files.length
    for (const f of files) {
        if (token?.isCancellationRequested) break
        progress?.report({
            increment,
            message: f.filename,
        })
        const { ok } = await retreival.upsert(f.filename, {
            content: f.content,
            mimeType,
            summary,
        })
        progress?.report({
            increment,
            message: f.filename,
            succeeded: ok,
        })
        trace?.resultItem(ok, f.filename)
    }
}

export interface RetreivalSearchResult {
    files: LinkedFile[]
    fragments: LinkedFile[]
}

export async function search(
    q: string,
    options?: RetreivalClientOptions & RetreivalSearchOptions
): Promise<RetreivalSearchResult> {
    const { trace, token, ...rest } = options || {}
    const files: LinkedFile[] = []
    const retreival = host.retreival
    await host.retreival.init(trace)
    if (token?.isCancellationRequested) return { files, fragments: [] }

    const { results } = await retreival.search(q, rest)

    const fragments = (results || []).map((r) => {
        const { id, filename, text } = r
        return <LinkedFile>{
            filename,
            content: text,
            label: id,
        }
    })
    for (const fr of fragments) {
        let file = files.find((f) => f.filename === fr.filename)
        if (!file) {
            file = <LinkedFile>{
                filename: fr.filename,
                label: `fragments`,
                content: "...\n",
            }
            files.push(file)
        }
        file.content += fr.content + `\n...`
    }
    return {
        files,
        fragments,
    }
}
