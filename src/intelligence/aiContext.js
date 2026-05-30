const projectSummary = require(
    "./projectSummary"
);

const createSymbolTable = require(
    "../parsers/shared/symbols"
);

function aiContext(data = {}) {
    const summary =
        projectSummary(data);

    const symbols =
        createSymbolTable(
            data.parsedFiles ||
                []
        );

    return {
        generatedAt:
            new Date().toISOString(),

        project:
            data.project || {},

        frameworks:
            data.frameworks ||
            [],

        statistics:
            data.statistics ||
            {},

        tree:
            data.tree || {},

        projectSummary:
            summary,

        symbols,

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