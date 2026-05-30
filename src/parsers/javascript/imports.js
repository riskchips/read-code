const traverse = require(
    "../shared/traverse"
);

function extractImports(ast) {
    const imports = [];

    traverse(ast, {
        ImportDeclaration(
            path
        ) {
            imports.push({
                source:
                    path.node.source
                        .value,

                specifiers:
                    path.node.specifiers.map(
                        specifier => ({
                            type:
                                specifier
                                    .type,

                            local:
                                specifier
                                    .local
                                    ?.name
                        })
                    )
            });
        },

        CallExpression(path) {
            const callee =
                path.node.callee;

            if (
                callee.type !==
                "Identifier"
            ) {
                return;
            }

            if (
                callee.name !==
                "require"
            ) {
                return;
            }

            const arg =
                path.node.arguments[0];

            if (
                !arg ||
                arg.type !==
                    "StringLiteral"
            ) {
                return;
            }

            imports.push({
                source:
                    arg.value,

                type:
                    "require"
            });
        }
    });

    return imports;
}

module.exports =
    extractImports;