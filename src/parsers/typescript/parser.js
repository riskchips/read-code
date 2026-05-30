const fs = require("fs");

const createAST = require("../shared/ast");

const extractInterfaces = require("./interfaces");
const extractTypes = require("./types");
const extractEnums = require("./enums");

const extractImports = require("../javascript/imports");
const extractExports = require("../javascript/exports");
const extractFunctions = require("../javascript/functions");
const extractClasses = require("../javascript/classes");

function parseTypeScript(file) {
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

        classes: extractClasses(ast),

        interfaces: extractInterfaces(ast),

        types: extractTypes(ast),

        enums: extractEnums(ast)
    };
}

module.exports = parseTypeScript;