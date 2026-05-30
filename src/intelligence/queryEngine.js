const search = require(
    "./search"
);

function queryEngine(
    project,
    question
) {
    const q =
        String(question)
            .toLowerCase();

    if (
        q.includes(
            "framework"
        )
    ) {
        return {
            type:
                "frameworks",

            answer:
                project.frameworks
        };
    }

    if (
        q.includes(
            "feature"
        )
    ) {
        return {
            type:
                "features",

            answer:
                project
                    .analyzers
                    ?.features ||
                []
        };
    }

    if (
        q.includes(
            "route"
        )
    ) {
        return {
            type:
                "routes",

            answer:
                project
                    .analyzers
                    ?.routes ||
                []
        };
    }

    if (
        q.includes(
            "architecture"
        )
    ) {
        return {
            type:
                "architecture",

            answer:
                project
                    .analyzers
                    ?.architecture ||
                {}
        };
    }

    if (
        q.startsWith(
            "where is "
        )
    ) {
        const symbol =
            question
                .replace(
                    /where is/i,
                    ""
                )
                .trim();

        return {
            type:
                "symbol",

            answer:
                project
                    .symbols?.[
                    symbol
                ] || null
        };
    }

    if (
        q.startsWith(
            "show code for "
        )
    ) {
        const symbol =
            question
                .replace(
                    /show code for/i,
                    ""
                )
                .trim();

        const result =
            project
                .symbols?.[
                symbol
            ];

        return {
            type:
                "snippet",

            answer:
                result
                    ?.snippet ||
                null
        };
    }

    return {
        type:
            "search",

        answer:
            search(
                project,
                question
            )
    };
}

module.exports =
    queryEngine;