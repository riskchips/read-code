const projectSummary =
    require(
        "./projectSummary"
    );

function aiContext(data) {
    const summary =
        projectSummary(
            data
        );

    return {
        generatedAt:
            new Date().toISOString(),

        project:
            data.project,

        frameworks:
            data.frameworks,

        statistics:
            data.statistics,

        tree:
            data.tree,

        projectSummary:
            summary,

        summary: {
            phase:
                "phase-5",

            status:
                "intelligence-enabled"
        }
    };
}

module.exports =
    aiContext;