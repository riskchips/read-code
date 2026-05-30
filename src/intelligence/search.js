function search(
    project,
    query
) {
    const q =
        String(query)
            .toLowerCase();

    const results =
        [];

    const symbols =
        project.symbols ||
        {};

    for (const [
        name,
        symbol
    ] of Object.entries(
        symbols
    )) {
        const text = [
            name,
            symbol.file,
            symbol.type,
            symbol.snippet
        ]
            .filter(Boolean)
            .join(" ")
            .toLowerCase();

        if (
            text.includes(q)
        ) {
            results.push({
                score: 100,
                symbol:
                    name,
                ...symbol
            });
        }
    }

    const functions =
        project.analysis
            ?.functions ||
        [];

    for (const fn of functions) {
        const text = JSON.stringify(
            fn
        ).toLowerCase();

        if (
            text.includes(q)
        ) {
            results.push({
                score: 50,
                type:
                    "function",
                data: fn
            });
        }
    }

    const classes =
        project.analysis
            ?.classes ||
        [];

    for (const cls of classes) {
        const text = JSON.stringify(
            cls
        ).toLowerCase();

        if (
            text.includes(q)
        ) {
            results.push({
                score: 50,
                type:
                    "class",
                data: cls
            });
        }
    }

    return results.sort(
        (a, b) =>
            b.score -
            a.score
    );
}

module.exports =
    search;