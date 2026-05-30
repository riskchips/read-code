const traverse = require(
    "../shared/traverse"
);

function extractInterfaces(
    ast
) {
    const interfaces =
        [];

    traverse(ast, {
        TSInterfaceDeclaration(
            path
        ) {
            interfaces.push({
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

    return interfaces;
}

module.exports =
    extractInterfaces;