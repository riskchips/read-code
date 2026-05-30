const traverse = require(
    "../shared/traverse"
);

function extractTypes(
    ast
) {
    const types =
        [];

    traverse(ast, {
        TSTypeAliasDeclaration(
            path
        ) {
            types.push({
                name:
                    path.node.id
                        ?.name,

                startLine:
                    path.node.loc
                        ?.start
                        ?.line ||
                    null,

                endLine:
                    path.node.loc
                        ?.end
                        ?.line ||
                    null
            });
        }
    });

    return types;
}

module.exports =
    extractTypes;