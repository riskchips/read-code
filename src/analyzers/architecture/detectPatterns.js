function detectPatterns(
    parsedFiles,
    layers
) {
    const patterns = [];

    if (
        layers.controllers.length &&
        layers.services.length &&
        layers.models.length
    ) {
        patterns.push("mvc");
    }

    if (
        layers.services.length &&
        layers.repositories.length
    ) {
        patterns.push(
            "service-repository"
        );
    }

    const hasReact =
        parsedFiles.some(
            file =>
                file.components &&
                file.components.length
        );

    if (hasReact) {
        patterns.push(
            "component-based"
        );
    }

    return patterns;
}

module.exports =
    detectPatterns;