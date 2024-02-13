import { JSON5TryParse } from "./json5"
import { PDFTryParse } from "./pdf"
import { TOMLTryParse } from "./toml"
import { YAMLTryParse } from "./yaml"

export function createParsers(): Parsers {
    return {
        JSON5: (text) => JSON5TryParse(text),
        YAML: (text) => YAMLTryParse(text),
        TOML: (text) => TOMLTryParse(text),
        PDF: (fileOrUrl) => PDFTryParse(fileOrUrl)
    }
}
