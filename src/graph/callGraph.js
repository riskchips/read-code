const traverse = require(
    "../parsers/shared/traverse"
);

function buildCallGraph(ast, file) {
    const graph = {};

    traverse(ast, {
        FunctionDeclaration(path) {
            const functionName =
                path.node.id?.name;

            if (!functionName) {
                return;
            }

            graph[functionName] = [];

            path.traverse({
                CallExpression(callPath) {
                    const callee =
                        callPath.node.callee;

                    if (
                        callee.type ===
                        "Identifier"
                    ) {
                        graph[
                            functionName
                        ].push(
                            callee.name
                        );
                    }
                }
            });
        }
    });

    return {
        file,
        graph
    };
}

module.exports = buildCallGraph;