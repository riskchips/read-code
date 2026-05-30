const traverse = require("../shared/traverse");

function extractComponents(ast) {
    const components = [];

    traverse(ast, {
        FunctionDeclaration(path) {
            const name = path.node.id?.name;

            if (!name) {
                return;
            }

            if (name[0] !== name[0].toUpperCase()) {
                return;
            }

            components.push({
                name,
                type: "function"
            });
        },

        VariableDeclarator(path) {
            const name = path.node.id?.name;

            if (!name) {
                return;
            }

            if (name[0] !== name[0].toUpperCase()) {
                return;
            }

            if (
                path.node.init?.type ===
                    "ArrowFunctionExpression" ||
                path.node.init?.type ===
                    "FunctionExpression"
            ) {
                components.push({
                    name,
                    type: "arrow"
                });
            }
        }
    });

    return components;
}

module.exports = extractComponents;