const fs = require("fs");

const createAST =
    require("../parsers/shared/ast");

const buildDependencyGraph =
    require("./dependencyGraph");

const buildCallGraph =
    require("./callGraph");

const buildComponentGraph =
    require("./componentGraph");

const buildKnowledgeGraph =
    require("./knowledgeGraph");

function buildGraph(parsedFiles) {
    const dependencyGraph =
        buildDependencyGraph(
            parsedFiles
        );

    const callGraphs = [];

    const componentGraphs = [];

    for (const file of parsedFiles) {
        try {
            const source =
                fs.readFileSync(
                    file.file,
                    "utf8"
                );

            const ast =
                createAST(source);

            callGraphs.push(
                buildCallGraph(
                    ast,
                    file.file
                )
            );

            componentGraphs.push({
                file: file.file,
                graph:
                    buildComponentGraph(
                        ast
                    )
            });
        } catch {}
    }

    return buildKnowledgeGraph({
    dependencyGraph,
    callGraphs,
    componentGraphs,
    parsedFiles
});
}

module.exports = buildGraph;