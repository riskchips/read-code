const fs = require("fs");
const parser = require("@babel/parser");

const extractImports = require("./imports");
const extractExports = require("./exports");
const extractFunctions = require("./functions");
const extractClasses = require("./classes");

function parseJavaScript(file) {
    const content =
        fs.readFileSync(
            file,
            "utf8"
        );

    const lines =
        content.split(
            /\r?\n/
        );

    const ast =
        parser.parse(
            content,
            {
                sourceType:
                    "unambiguous",

                plugins: [
                    "jsx"
                ]
            }
        );

    return {
        file,

        imports:
            extractImports(
                ast
            ),

        exports:
            extractExports(
                ast
            ),

        functions:
            extractFunctions(
                ast,
                lines
            ),

        classes:
            extractClasses(
                ast,
                lines
            )
    };
}

module.exports =
    parseJavaScript;