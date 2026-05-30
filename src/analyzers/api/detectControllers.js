function detectControllers(
    parsedFiles
) {
    const controllers = [];

    for (const file of parsedFiles) {
        const lower =
            file.file.toLowerCase();

        if (
            lower.includes(
                "controller"
            )
        ) {
            controllers.push({
                file: file.file
            });
        }

        for (const cls of file.classes ||
            []) {
            if (
                cls.name
                    .toLowerCase()
                    .includes(
                        "controller"
                    )
            ) {
                controllers.push({
                    file: file.file,
                    class:
                        cls.name
                });
            }
        }
    }

    return controllers;
}

module.exports =
    detectControllers;