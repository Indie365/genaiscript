/// <reference path="./prompt_template.d.ts"/>

// keep in sync with PromptContext!

/**
 * Console functions
 */
declare var console: PromptConsole

/**
 * Setup prompt title and other parameters.
 * Exactly one call should be present on top of .genai.js file.
 */
declare function script(options: PromptArgs): void

/**
 * Equivalent of script() for system prompts.
 */
declare function system(options: PromptSystemArgs): void

/**
 * Append given string to the prompt. It automatically appends "\n".
 * Typically best to use `` $`...` ``-templates instead.
 */
declare function writeText(
    body: Awaitable<string>,
    options?: WriteTextOptions
): void

/**
 * Append given string to the prompt. It automatically appends "\n".
 * `` $`foo` `` is the same as `text("foo")`.
 */
declare function $(strings: TemplateStringsArray, ...args: any[]): string

/**
 * Appends given (often multi-line) string to the prompt, surrounded in fences.
 * Similar to `text(env.fence); text(body); text(env.fence)`
 *
 * @param body string to be fenced
 */
declare function fence(body: StringLike, options?: FenceOptions): void

/**
 * Defines `name` to be the (often multi-line) string `body`.
 * Similar to `text(name + ":"); fence(body, language)`
 *
 * @param name name of defined entity, eg. "NOTE" or "This is text before NOTE"
 * @param body string to be fenced/defined
 * @returns variable name
 */
declare function def(
    name: string,
    body: StringLike,
    options?: DefOptions
): string

/**
 * Declares a tool that can be called from the prompt.
 * @param name The name of the tool to be called. Must be a-z, A-Z, 0-9, or contain underscores and dashes, with a maximum length of 64.
 * @param description A description of what the function does, used by the model to choose when and how to call the function.
 * @param parameters The parameters the tool accepts, described as a JSON Schema object.
 * @param fn callback invoked when the LLM requests to run this function
 */
declare function defTool(
    name: string,
    description: string,
    parameters: ChatFunctionParameters,
    fn: ChatFunctionHandler
): void

/**
 * Registers a callback to be called when a file is being merged
 * @param fn
 */
declare function defFileMerge(fn: FileMergeHandler): void

/**
 * Variables coming from the fragment on which the prompt is operating.
 */
declare var env: ExpansionVariables

/**
 * Path manipulation functions.
 */
declare var path: Path

/**
 * A set of parsers for well-known file formats
 */
declare var parsers: Parsers

/**
 * Retrieval Augmented Generation services
 */
declare var retrieval: Retrieval

/**
 * Access to the workspace file system.
 */
declare var workspace: WorkspaceFileSystem

/**
 * Access to the workspace file system.
 * @deprecated Use `workspace` instead.
 */
declare var fs: WorkspaceFileSystem

/**
 * YAML parsing and stringifying functions.
 */
declare var YAML: YAML

/**
 * INI parsing and stringifying.
 */
declare var INI: INI

/**
 * AICI operations
 */
declare var AICI: AICI

/**
 * Access to current LLM chat session information
 */
declare var host: PromptHost

/**
 * Fetches a given URL and returns the response.
 * @param url
 */
declare function fetchText(
    url: string | WorkspaceFile,
    options?: FetchTextOptions
): Promise<{ ok: boolean; status: number; text?: string; file?: WorkspaceFile }>

/**
 * Declares a JSON schema variable.
 * @param name name of the variable
 * @param schema JSON schema instance
 * @returns variable name
 */
declare function defSchema(
    name: string,
    schema: JSONSchema,
    options?: DefSchemaOptions
): void

/**
 * Adds images to the prompt
 * @param files
 * @param options
 */
declare function defImages(files: StringLike, options?: DefImagesOptions): void

/**
 * Renders a table or object in the prompt
 * @param name
 * @param data
 * @param options
 * @returns variable name
 */
declare function defData(
    name: string,
    data: object[] | object,
    options?: DefDataOptions
): string

/**
 * Cancels the current prompt generation/execution with the given reason.
 * @param reason
 */
declare function cancel(reason?: string): void

/**
 * Expands and executes prompt
 * @param generator
 */
declare function runPrompt(
    generator: string | RunPromptGenerator,
    options?: RunPromptOptions
): Promise<RunPromptResult>

/**
 * Registers a callback to process the LLM output
 * @param fn
 */
declare function defOutputProcessor(fn: PromptOutputProcessorHandler): void

/**
 * @deprecated Use `defOutputProcessor` instead.
 */
declare function defOutput(fn: PromptOutputProcessorHandler): void
