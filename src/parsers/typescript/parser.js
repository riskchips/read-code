const fs = require("fs");
const parser = require("@babel/parser");

const extractInterfaces = require("./interfaces");
const extractTypes = require("./types");
const extractEnums = require("./enums");

function parseTypeScript(
    file
) {
    const content =
        fs.readFileSync(
            file,
            "utf8"
        );

    const ast =
        parser.parse(
            content,
            {
                sourceType:
                    "unambiguous",

                plugins: [
                    "typescript",
                    "jsx"
                ]
            }
        );

    return {
        file,

        interfaces:
            extractInterfaces(
                ast
            ),

        types:
            extractTypes(
                ast
            ),

        enums:
            extractEnums(
                ast
            )
    };
}

module.exports =
    parseTypeScript;