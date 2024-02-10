/// <reference path="./prompt_template.d.ts" />
import { host } from "./host"

import { templateAppliesTo } from "./template"

type PromptTemplate = globalThis.PromptTemplate
export type { PromptTemplate }

export interface FileReference {
    name: string
    filename: string
}

export type DiagnosticSeverity = "error" | "warning" | "info"
export interface Diagnostic {
    filename: string
    range: CharRange
    severity: DiagnosticSeverity
    message: string
}

export function diagnosticsToCSV(diagnostics: Diagnostic[], sep: string) {
    return diagnostics
        .map(({ severity, filename, range, message }) =>
            [severity, filename, range[0][0], range[1][0], message].join(sep)
        )
        .join("\n")
}

export type FragmentInit = Partial<
    Pick<Fragment, "children" | "depth" | "references">
> &
    Pick<Fragment, "id" | "title" | "startPos" | "endPos" | "text">

export class Fragment {
    /**
     * Identifier of the fragment. Set to `""` when not present.
     */
    id: string = ""

    /**
     * Includes filename.
     */
    fullId: string

    /**
     * Title of fragment in plain text (no formatting).
     */
    title: string

    /**
     * Depth of the header.
     */
    depth: number = 1

    /**
     * The node up the tree if any.
     */
    parent?: Fragment

    /**
     * Collision-resistant hash of content, including title, body and id (but not children).
     */
    hash: string = ""

    /**
     * The file where this fragment is defined.
     */
    file: TextFile

    /**
     * Where the text of the fragment starts.
     */
    startPos: CharPosition

    /**
     * Where the text of the fragments ends.
     */
    endPos: CharPosition

    /**
     * Full body of the fragment (both header and body).
     */
    text: string

    /**
     * Sub-tasks, code fragments, possibly from different files.
     */
    children: Fragment[] = []

    /**
     * Instructions for this step after the body (description) if any.
     */
    postComment?: string

    /**
     * Links to other files
     */
    references: FileReference[] = []

    constructor(init: FragmentInit) {
        Object.assign(this, init)
        if (!this.fullId) this.fullId = this.id
    }

    sameFileChildren() {
        return this.children.filter((c) => c.file == this.file)
    }

    applicableTemplates() {
        return this.file.project.templates.filter((t) =>
            templateAppliesTo(t, this)
        )
    }

    get project() {
        return this.file.project
    }
}

export function rootFragment(fragment: Fragment): Fragment {
    if (!fragment) return undefined
    if (fragment.parent) return rootFragment(fragment.parent)
    else return fragment
}

export function allChildren(
    fragment: Fragment,
    includeSelf = false
): Fragment[] {
    const res = []
    if (includeSelf) res.push(fragment)
    const todo = fragment.children
    while (todo.length) {
        const f = todo.pop()
        res.push(f)
        if (f.children?.length) todo.push(...f.children)
    }
    return res
}

export function templateGroup(template: PromptTemplate) {
    return (
        template.categories?.[0] ||
        (/^system/i.test(template.id) ? "system" : "") ||
        "unassigned"
    )
}

export const eolPosition = 0x3fffffff
export const eofPosition: CharPosition = [0x3fffffff, 0]

export class Project {
    readonly rootFiles: TextFile[] = []
    readonly allFiles: TextFile[] = []
    readonly fragmentById: Record<string, Fragment[]> = {}
    readonly fragmentByFullId: Record<string, Fragment> = {}
    readonly allFragments: Fragment[] = []
    readonly templates: PromptTemplate[] = []
    readonly diagnostics: Diagnostic[] = []

    _finalizers: (() => void)[] = []

    forEachFragment(cb: (t: Fragment) => void) {
        this.allFiles.forEach((f) => f.forEachFragment(cb))
    }

    getTemplate(id: string) {
        return this.templates.find((t) => t.id == id)
    }

    resolve(filename: string) {
        return this.allFiles.find((file) => filename === file.filename)
    }

    resolveFragment(fragment: Fragment | string) {
        if (typeof fragment === "string") {
            const fullId = fragment
            // try find full id
            fragment =
                this.fragmentByFullId[fragment] ||
                this.fragmentById[fragment]?.[0]

            // find by file
            if (!fragment) {
                const file = fullId.replace(/:\d+:\d+$/, '')
                if (file) {
                    const f = this.resolve(file)
                    fragment = f?.roots?.[0]
                }
            }
        }
        return fragment
    }
}

export class TextFile {
    readonly roots: Fragment[] = []
    readonly fragments: Fragment[] = []
    isStructured = false

    constructor(
        public readonly project: Project,
        public readonly filename: string,
        public readonly mime: string,
        public readonly content: string
    ) {
    }

    relativeName() {
        const prj = host.projectFolder()
        if (this.filename.startsWith(prj))
            return this.filename.slice(prj.length).replace(/^[\/\\]*/, "")
        return this.filename
    }

    // this doesn't follow references
    forEachFragment(cb: (t: Fragment) => void) {
        this.fragments.forEach(cb)
    }

    addFragment(frag: FragmentInit) {
        const f = new Fragment(frag)
        f.file = this
        this.fragments.push(f)
        return f
    }

    textOfRange(start: CharPosition, stop: CharPosition) {
        const [l, c] = start
        const [ll, cc] = stop
        const lines = this.content.split("\n").slice(l, ll + 1)
        lines[0] = lines[0].slice(c)
        if (lines.length >= ll - l + 1) {
            lines[lines.length - 1] = lines[lines.length - 1].slice(0, cc)
        }
        return lines.join("\n")
    }
}

function ltPos(a: CharPosition, b: CharPosition) {
    return a[0] < b[0] || a[1] < b[1]
}

export function rangeOfFragments(...frags: Fragment[]): CharRange {
    let start = frags[0].startPos
    let stop = frags[0].endPos
    for (const t of frags) {
        if (ltPos(t.startPos, start)) start = t.startPos
        if (ltPos(stop, t.endPos)) stop = t.endPos
    }
    return [start, stop]
}
