const traverse = require("../shared/traverse");

function extractRoutes(ast) {
    const routes = [];

    traverse(ast, {
        JSXElement(path) {
            const opening =
                path.node.openingElement;

            const tag =
                opening.name?.name;

            if (
                tag === "Route" ||
                tag === "Link"
            ) {
                routes.push({
                    type: tag
                });
            }
        }
    });

    return routes;
}

module.exports = extractRoutes;