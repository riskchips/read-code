function detectMiddleware(
    parsedFiles
) {
    const middleware = [];

    for (const file of parsedFiles) {
        for (const fn of file.functions ||
            []) {
            const lower =
                fn.name.toLowerCase();

            if (
                lower.includes(
                    "middleware"
                ) ||
                lower.includes(
                    "auth"
                )
            ) {
                middleware.push({
                    file: file.file,
                    function:
                        fn.name
                });
            }
        }
    }

    return middleware;
}

module.exports =
    detectMiddleware;