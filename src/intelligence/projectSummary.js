function projectSummary(
    data = {}
) {
    const frameworks =
        data.frameworks ||
        [];

    const stats =
        data.statistics ||
        {};

    const analyzers =
        data.analyzers ||
        {};

    return {
        name:
            data.project
                ?.name ||
            "unknown",

        frameworks,

        totalFiles:
            stats.files ||
            0,

        languages: {
            javascript:
                stats.javascript ||
                0,

            typescript:
                stats.typescript ||
                0,

            jsx:
                stats.jsx ||
                0,

            tsx:
                stats.tsx ||
                0
        },

        routes:
            analyzers
                .routes
                ?.length ||
            0,

        features:
            analyzers
                .features ||
            [],

        databases:
            analyzers
                .database ||
            [],

        auth:
            analyzers.auth ||
            [],

        architecture:
            analyzers
                .architecture ||
            {}
    };
}

module.exports =
    projectSummary;