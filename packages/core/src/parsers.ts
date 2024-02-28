import { CSVTryParse } from "./csv"
import { filenameOrFileToContent } from "./fs"
import { JSON5TryParse } from "./json5"
import { PDFPagesToString, PDFTryParse } from "./pdf"
import { TOMLTryParse } from "./toml"
import { MarkdownTrace } from "./trace"
import { YAMLTryParse } from "./yaml"

export function createParsers(trace: MarkdownTrace): Parsers {
    return {
        JSON5: (text) => JSON5TryParse(filenameOrFileToContent(text)),
        YAML: (text) => YAMLTryParse(filenameOrFileToContent(text)),
        TOML: (text) => TOMLTryParse(filenameOrFileToContent(text)),
        CSV: (text) => CSVTryParse(filenameOrFileToContent(text)),
        PDF: async (file, options) => {
            if (!file) return { file: undefined, pages: [] }
            const { filter = () => true } = options || {}
            const filename = typeof file === "string" ? file : file.filename
            const pages = (
                await PDFTryParse(filename, undefined, { trace })
            )?.filter((text, index) => filter(index, text))
            return {
                file: pages
                    ? <LinkedFile>{
                          filename,
                          content: PDFPagesToString(pages),
                      }
                    : undefined,
                pages,
            }
        },
    }
}
