const traverse = require(
    "../shared/traverse"
);

function extractEnums(ast) {
    const enums = [];

    traverse(ast, {
        TSEnumDeclaration(
            path
        ) {
            enums.push({
                name:
                    path.node.id
                        ?.name || null,

                members:
                    path.node.members.map(
                        member =>
                            member.id
                                ?.name ||
                            null
                    )
            });
        }
    });

    return enums;
}

module.exports =
    extractEnums;