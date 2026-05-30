const fs = require("fs");
const parser = require("@babel/parser");

const extractComponents = require("./components");
const extractHooks = require("./hooks");
const extractProps = require("./props");
const extractRoutes = require("./routes");

function parseReact(file) {
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
                    "jsx",
                    "typescript"
                ]
            }
        );

    return {
        file,

        components:
            extractComponents(
                ast,
                lines
            ),

        hooks:
            extractHooks(
                ast
            ),

        props:
            extractProps(
                ast
            ),

        routes:
            extractRoutes(
                ast
            )
    };
}

module.exports =
    parseReact;