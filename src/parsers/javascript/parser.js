const fs = require("fs");

const createAST = require("../shared/ast");

const extractImports = require("./imports");
const extractExports = require("./exports");
const extractFunctions = require("./functions");
const extractClasses = require("./classes");

function parseJavaScript(file) {
    const source = fs.readFileSync(
        file,
        "utf8"
    );

    const ast = createAST(source);

    return {
        file,

        imports: extractImports(ast),

        exports: extractExports(ast),

        functions: extractFunctions(ast),

        classes: extractClasses(ast)
    };
}

module.exports = parseJavaScript;