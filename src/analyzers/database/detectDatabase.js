function detectDatabase(
    parsedFiles
) {
    const databases =
        new Set();

    for (const file of parsedFiles) {
        for (const item of file.imports ||
            []) {
            const source =
                item.source || "";

            if (
                source.includes(
                    "mongoose"
                )
            )
                databases.add(
                    "mongodb"
                );

            if (
                source.includes(
                    "pg"
                )
            )
                databases.add(
                    "postgresql"
                );

            if (
                source.includes(
                    "mysql"
                )
            )
                databases.add(
                    "mysql"
                );

            if (
                source.includes(
                    "sqlite"
                )
            )
                databases.add(
                    "sqlite"
                );

            if (
                source.includes(
                    "redis"
                )
            )
                databases.add(
                    "redis"
                );
        }
    }

    return [
        ...databases
    ];
}

module.exports =
    detectDatabase;