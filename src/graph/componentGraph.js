const traverse = require(
    "../parsers/shared/traverse"
);

function buildComponentGraph(ast) {
    const graph = {};

    let currentComponent = null;

    traverse(ast, {
        FunctionDeclaration(path) {
            const name =
                path.node.id?.name;

            if (
                !name ||
                name[0] !==
                    name[0].toUpperCase()
            ) {
                return;
            }

            currentComponent = name;

            graph[currentComponent] =
                [];
        },

        JSXElement(path) {
            if (!currentComponent) {
                return;
            }

            const tag =
                path.node.openingElement
                    ?.name?.name;

            if (!tag) {
                return;
            }

            if (
                tag[0] ===
                tag[0].toUpperCase()
            ) {
                graph[
                    currentComponent
                ].push(tag);
            }
        }
    });

    return graph;
}

module.exports = buildComponentGraph;