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

function extractComponents(
    ast,
    lines = []
) {
    const components =
        [];

    traverse(ast, {
        FunctionDeclaration(
            path
        ) {
            const name =
                path.node.id
                    ?.name;

            if (
                !name
            ) {
                return;
            }

            if (
                name[0] !==
                name[0]
                    .toUpperCase()
            ) {
                return;
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

            components.push({
                name,
                type:
                    "function",

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

    return components;
}

module.exports =
    extractComponents;