const search = require("./search");

function queryEngine(
    project,
    question
) {
    const q =
        String(question)
            .toLowerCase()
            .trim();

    if (
        q.includes("framework")
    ) {
        return {
            type: "frameworks",
            answer:
                project.frameworks
        };
    }

    if (
        q.includes("feature")
    ) {
        return {
            type: "features",
            answer:
                project.analyzers
                    ?.features || []
        };
    }

    if (
        q.includes("database")
    ) {
        return {
            type: "database",
            answer:
                project.analyzers
                    ?.database || []
        };
    }

    if (
        q.includes("route")
    ) {
        return {
            type: "routes",
            answer:
                project.analyzers
                    ?.routes || []
        };
    }

    if (
        q.includes("controller")
    ) {
        return {
            type: "controllers",
            answer:
                project.analyzers
                    ?.controllers || []
        };
    }

    if (
        q.includes("architecture")
    ) {
        return {
            type: "architecture",
            answer:
                project.analyzers
                    ?.architecture ||
                {}
        };
    }

    if (
        q.includes("summary") ||
        q.includes("explain")
    ) {
        return {
            type: "summary",
            answer:
                project.projectSummary
        };
    }

    return {
        type: "search",
        answer:
            search(
                project,
                question
            )
    };
}

module.exports =
    queryEngine;