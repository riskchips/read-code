function detectORM(
    parsedFiles
) {
    const orms =
        new Set();

    for (const file of parsedFiles) {
        for (const item of file.imports ||
            []) {
            const source =
                item.source || "";

            if (
                source.includes(
                    "prisma"
                )
            )
                orms.add(
                    "prisma"
                );

            if (
                source.includes(
                    "sequelize"
                )
            )
                orms.add(
                    "sequelize"
                );

            if (
                source.includes(
                    "typeorm"
                )
            )
                orms.add(
                    "typeorm"
                );

            if (
                source.includes(
                    "mongoose"
                )
            )
                orms.add(
                    "mongoose"
                );
        }
    }

    return [...orms];
}

module.exports =
    detectORM;