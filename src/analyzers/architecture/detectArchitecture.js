const detectLayers =
    require("./detectLayers");

const detectPatterns =
    require("./detectPatterns");

function detectArchitecture(
    parsedFiles
) {
    const layers =
        detectLayers(
            parsedFiles
        );

    const patterns =
        detectPatterns(
            parsedFiles,
            layers
        );

    return {
        layers,
        patterns
    };
}

module.exports =
    detectArchitecture;