export function addLineNumbers(text: string) {
    return text
        .split("\n")
        .map((line, i) => `[${i + 1}] ${line}`)
        .join("\n")
}

export function removeLineNumbers(text: string) {
    const rx = /^\[\d+\] /
    const lines = text.split("\n")

    if (!lines.slice(0, 10).every((line) => rx.test(line))) return text

    return lines.map((line) => line.replace(rx, "")).join("\n")
}
