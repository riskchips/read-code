function detectModels(
    parsedFiles
) {
    const models = [];

    for (const file of parsedFiles) {
        for (const cls of file.classes ||
            []) {
            if (
                cls.name.endsWith(
                    "Model"
                )
            ) {
                models.push({
                    file: file.file,
                    name: cls.name
                });
            }
        }
    }

    return models;
}

module.exports =
    detectModels;