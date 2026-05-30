function buildDependencyGraph(parsedFiles) {
    const graph = {};

    for (const file of parsedFiles) {
        graph[file.file] = [];

        if (!file.imports) {
            continue;
        }

        for (const dependency of file.imports) {
            graph[file.file].push(
                dependency.source
            );
        }
    }

    return graph;
}

module.exports = buildDependencyGraph;