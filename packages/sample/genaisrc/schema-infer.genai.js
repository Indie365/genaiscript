script({
    title: "JSON schema inferer",
    model: "gpt-3.5-turbo",
    tests: [{
        files: "src/penguins.csv",
        keywords: "species"
    }, {
        files: "src/penguins.xslx",
        keywords: "species"
    }]
})
// use def to emit LLM variables 
// https://microsoft.github.io/genaiscript/reference/scripts/context/#definition-def
const files = def("FILE", env.files, { endsWith: ".csv", sliceSample: 20 })

// use $ to output formatted text to the prompt
// https://microsoft.github.io/genaiscript/reference/scripts/prompt/
$`Infer the JSON schema from the data in ${files}. 
Save the schema to a file named schema.json.`
