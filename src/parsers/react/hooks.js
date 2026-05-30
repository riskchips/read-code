const traverse = require("../shared/traverse");

function extractHooks(ast) {
    const hooks = [];

    traverse(ast, {
        CallExpression(path) {
            const callee = path.node.callee;

            if (
                callee.type === "Identifier" &&
                callee.name.startsWith("use")
            ) {
                hooks.push({
                    name: callee.name
                });
            }
        }
    });

    return hooks;
}

module.exports = extractHooks;