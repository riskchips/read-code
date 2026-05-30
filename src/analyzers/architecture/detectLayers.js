function detectLayers(parsedFiles) {
    const layers = {
        controllers: [],
        services: [],
        models: [],
        repositories: [],
        middleware: [],
        routes: [],
        components: [],
        utilities: []
    };

    for (const file of parsedFiles) {
        const lower =
            file.file.toLowerCase();

        if (
            lower.includes(
                "controller"
            )
        ) {
            layers.controllers.push(
                file.file
            );
        }

        if (
            lower.includes(
                "service"
            )
        ) {
            layers.services.push(
                file.file
            );
        }

        if (
            lower.includes(
                "model"
            )
        ) {
            layers.models.push(
                file.file
            );
        }

        if (
            lower.includes(
                "repository"
            )
        ) {
            layers.repositories.push(
                file.file
            );
        }

        if (
            lower.includes(
                "middleware"
            )
        ) {
            layers.middleware.push(
                file.file
            );
        }

        if (
            lower.includes(
                "route"
            )
        ) {
            layers.routes.push(
                file.file
            );
        }

        if (
            file.components &&
            file.components.length
        ) {
            layers.components.push(
                file.file
            );
        }

        if (
            lower.includes(
                "util"
            ) ||
            lower.includes(
                "helper"
            )
        ) {
            layers.utilities.push(
                file.file
            );
        }
    }

    return layers;
}

module.exports =
    detectLayers;