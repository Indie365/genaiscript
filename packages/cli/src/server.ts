import { WebSocketServer } from "ws"
import {
    RequestMessages,
    ResponseStatus,
    SERVER_PORT,
    host,
    YAMLStringify,
    logError,
    CORE_VERSION,
    ServerResponse,
    serializeError,
} from "genaiscript-core"

export async function startServer(options: { port: string }) {
    const port = parseInt(options.port) || SERVER_PORT
    const wss = new WebSocketServer({ port })

    wss.on("connection", function connection(ws) {
        console.log(`clients: connected (${wss.clients.size} clients)`)
        ws.on("error", console.error)
        ws.on("close", () =>
            console.log(`clients: closed (${wss.clients.size} clients)`)
        )
        ws.on("message", async (msg) => {
            const data = JSON.parse(msg.toString()) as RequestMessages
            const { id, type } = data
            let response: ResponseStatus
            try {
                switch (type) {
                    case "server.version": {
                        console.log(`server: version ${CORE_VERSION}`)
                        response = <ServerResponse>{
                            ok: true,
                            version: CORE_VERSION,
                            nodeVersion: process.version,
                            pid: process.pid
                        }
                        break
                    }
                    case "server.kill": {
                        console.log(`server: kill`)
                        process.exit(0)
                        break
                    }
                    case "retrieval.clear":
                        console.log(`retrieval: clear`)
                        await host.retrieval.init()
                        response = await host.retrieval.clear(data.options)
                        break
                    case "retrieval.upsert":
                        console.log(`retrieval: upsert ${data.filename}`)
                        await host.retrieval.init()
                        response = await host.retrieval.upsert(
                            data.filename,
                            data.options
                        )
                        break
                    case "retrieval.search":
                        console.log(`retrieval: search ${data.text}`)
                        console.debug(YAMLStringify(data.options))
                        await host.retrieval.init()
                        response = await host.retrieval.search(
                            data.text,
                            data.options
                        )
                        console.debug(YAMLStringify(response))
                        break
                    case "parse.pdf":
                        console.log(`parse: pdf ${data.filename}`)
                        await host.parser.init()
                        response = await host.parser.parsePdf(data.filename)
                        break
                    default:
                        throw new Error(`unknown message type ${type}`)
                }
                response.ok = true
            } catch (e) {
                response = { ok: false, error: serializeError(e) }
            } finally {
                if (response.error) logError(response.error)
                ws.send(JSON.stringify({ id, response }))
            }
        })
    })
    console.log(`GenAIScript server started on port ${port}`)
}
