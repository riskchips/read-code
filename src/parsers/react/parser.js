const fs = require("fs");

const createAST = require("../shared/ast");

const extractComponents =
    require("./components");

const extractHooks =
    require("./hooks");

const extractProps =
    require("./props");

const extractRoutes =
    require("./routes");

const extractImports =
    require("../javascript/imports");

const extractExports =
    require("../javascript/exports");

function parseReact(file) {
    const source = fs.readFileSync(
        file,
        "utf8"
    );

    const ast = createAST(source);

    return {
        file,

        imports: extractImports(ast),

        exports: extractExports(ast),

        components:
            extractComponents(ast),

        hooks: extractHooks(ast),

        props: extractProps(ast),

        routes: extractRoutes(ast)
    };
}

module.exports = parseReact;