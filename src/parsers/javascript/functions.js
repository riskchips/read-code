const traverse = require(
    "../shared/traverse"
);

function getSnippet(
    lines,
    start,
    end
) {
    if (
        !start ||
        !end
    ) {
        return null;
    }

    return lines
        .slice(
            start - 1,
            end
        )
        .join("\n");
}

function extractFunctions(
    ast,
    lines = []
) {
    const functions =
        [];

    traverse(ast, {
        FunctionDeclaration(
            path
        ) {
            const start =
                path.node.loc
                    ?.start
                    ?.line ||
                null;

            const end =
                path.node.loc
                    ?.end
                    ?.line ||
                null;

            functions.push({
                name:
                    path.node.id
                        ?.name ||
                    "anonymous",

                async:
                    path.node
                        .async,

                generator:
                    path.node
                        .generator,

                params:
                    path.node
                        .params
                        .length,

                type:
                    "declaration",

                startLine:
                    start,

                endLine:
                    end,

                snippet:
                    getSnippet(
                        lines,
                        start,
                        end
                    )
            });
        },

        VariableDeclarator(
            path
        ) {
            const init =
                path.node.init;

            if (
                !init
            ) {
                return;
            }

            if (
                init.type !==
                    "ArrowFunctionExpression" &&
                init.type !==
                    "FunctionExpression"
            ) {
                return;
            }

            const start =
                init.loc
                    ?.start
                    ?.line ||
                null;

            const end =
                init.loc
                    ?.end
                    ?.line ||
                null;

            functions.push({
                name:
                    path.node.id
                        ?.name ||
                    "anonymous",

                async:
                    init.async,

                generator:
                    init.generator ||
                    false,

                params:
                    init.params
                        .length,

                type:
                    "arrow",

                startLine:
                    start,

                endLine:
                    end,

                snippet:
                    getSnippet(
                        lines,
                        start,
                        end
                    )
            });
        }
    });

    return functions;
}

module.exports =
    extractFunctions;