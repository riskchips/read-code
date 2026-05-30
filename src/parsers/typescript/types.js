const traverse = require(
    "../shared/traverse"
);

function extractTypes(ast) {
    const types = [];

    traverse(ast, {
        TSTypeAliasDeclaration(
            path
        ) {
            types.push({
                name:
                    path.node.id
                        ?.name || null
            });
        }
    });

    return types;
}

module.exports =
    extractTypes;