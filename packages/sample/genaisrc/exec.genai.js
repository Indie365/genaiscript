script({
    model: "gpt-3.5-turbo",
    tests: {
        keywords: ["Python", "3."]
    }
})
const version = await host.exec("python", ["--version"])
if (!/^python \d/i.test(version.stdout))
    throw new Error("python --version failed")
defTool("python_version", "determines the version of python on this system", {}, async () => {
    const version = await host.exec("python", ["--version"])
    return version.stdout?.replace(/^python\s/i, '') || "?"
})
$`What is the version of python on this machine?`