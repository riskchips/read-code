const traverse = require(
    "../shared/traverse"
);

function extractEnums(
    ast
) {
    const enums =
        [];

    traverse(ast, {
        TSEnumDeclaration(
            path
        ) {
            enums.push({
                name:
                    path.node.id
                        ?.name,

                members:
                    path.node
                        .members
                        .map(
                            member =>
                                member
                                    .id
                                    ?.name
                        ),

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

    return enums;
}

module.exports =
    extractEnums;