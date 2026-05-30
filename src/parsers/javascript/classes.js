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

function extractClasses(
    ast,
    lines = []
) {
    const classes = [];

    traverse(ast, {
        ClassDeclaration(
            path
        ) {
            const methods =
                [];

            for (const body of path
                .node.body
                .body) {
                if (
                    body.type !==
                    "ClassMethod"
                ) {
                    continue;
                }

                methods.push({
                    name:
                        body.key
                            ?.name,

                    async:
                        body.async,

                    static:
                        body.static
                });
            }

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

            classes.push({
                name:
                    path.node.id
                        ?.name,

                methods,

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

    return classes;
}

module.exports =
    extractClasses;