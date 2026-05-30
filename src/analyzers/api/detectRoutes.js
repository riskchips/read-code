function detectRoutes(parsedFiles) {
    const routes = [];

    for (const file of parsedFiles) {
        for (const item of file.imports || []) {
            const source =
                item.source || "";

            if (
                source.includes(
                    "express"
                ) ||
                source.includes(
                    "fastify"
                )
            ) {
                routes.push({
                    file: file.file,
                    framework:
                        source
                });
            }
        }

        for (const fn of file.functions || []) {
            const name =
                fn.name.toLowerCase();

            if (
                name.includes(
                    "route"
                ) ||
                name.includes(
                    "handler"
                )
            ) {
                routes.push({
                    file: file.file,
                    function:
                        fn.name
                });
            }
        }
    }

    return routes;
}

module.exports = detectRoutes;