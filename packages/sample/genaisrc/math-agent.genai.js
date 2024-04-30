script({
    title: "math-agent",
    description: "A port of https://ts.llamaindex.ai/examples/agent",
    parameters: {
        "question": {
            type: "string",
            default: "How much is 11 + 4? then divide by 3?"
        },
    },
    tests: {
        description: "Testing the default prompt",
        keywords: "5"
    }
})

defFunction("sum", "Use this function to sum two numbers", {
    type: "object",
    properties: {
        a: {
            type: "number",
            description: "The first number",
        },
        b: {
            type: "number",
            description: "The second number",
        },
    },
    required: ["a", "b"],
}, ({ a, b }) => `${a + b}`)

defFunction("divide", "Use this function to divide two numbers", {
    type: "object",
    properties: {
        a: {
            type: "number",
            description: "The first number",
        },
        b: {
            type: "number",
            description: "The second number",
        },
    },
    required: ["a", "b"],
}, ({ a, b }) => `${a / b}`)

$`Answer the following arithmetic question: 

    ${env.vars.question}
`
