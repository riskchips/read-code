function projectSummary(data) {
    const summary = {
        project: data.project?.name || null,

        frameworks:
            data.frameworks || [],

        statistics:
            data.statistics || {},

        architecture:
            data.analyzers
                ?.architecture ||
            {},

        features:
            data.analyzers
                ?.features || [],

        databases:
            data.analyzers
                ?.database || [],

        auth:
            data.analyzers
                ?.auth || [],

        routes:
            (
                data.analyzers
                    ?.routes || []
            ).length,

        controllers:
            (
                data.analyzers
                    ?.controllers ||
                []
            ).length,

        models:
            (
                data.analyzers
                    ?.models || []
            ).length
    };

    summary.description =
        buildDescription(
            summary
        );

    return summary;
}

function buildDescription(
    summary
) {
    const parts = [];

    parts.push(
        `Project ${summary.project}`
    );

    if (
        summary.frameworks
            .length
    ) {
        parts.push(
            `uses ${summary.frameworks.join(
                ", "
            )}`
        );
    }

    if (
        summary.features.length
    ) {
        parts.push(
            `features: ${summary.features.join(
                ", "
            )}`
        );
    }

    if (
        summary.databases.length
    ) {
        parts.push(
            `databases: ${summary.databases.join(
                ", "
            )}`
        );
    }

    return parts.join(". ");
}

module.exports =
    projectSummary;