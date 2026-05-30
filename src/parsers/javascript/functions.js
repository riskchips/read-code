const traverse = require("../shared/traverse");

function extractFunctions(ast) {
    const functions = [];

    traverse(ast, {
        FunctionDeclaration(path) {
            functions.push({
                name: path.node.id?.name || "anonymous",
                async: path.node.async,
                generator: path.node.generator,
                params: path.node.params.length,
                type: "declaration"
            });
        },

        ArrowFunctionExpression(path) {
            if (!path.parent.id?.name) {
                return;
            }

            functions.push({
                name: path.parent.id.name,
                async: path.node.async,
                generator: false,
                params: path.node.params.length,
                type: "arrow"
            });
        },

        FunctionExpression(path) {
            if (!path.parent.id?.name) {
                return;
            }

            functions.push({
                name: path.parent.id.name,
                async: path.node.async,
                generator: path.node.generator,
                params: path.node.params.length,
                type: "expression"
            });
        }
    });

    return functions;
}

module.exports = extractFunctions;