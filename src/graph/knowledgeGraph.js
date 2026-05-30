function buildKnowledgeGraph({
    dependencyGraph,
    callGraphs,
    componentGraphs,
    parsedFiles = []
}) {
    const graph = {
        generatedAt:
            new Date().toISOString(),

        nodes: [],

        edges: [],

        dependencyGraph,

        callGraphs,

        componentGraphs
    };

    for (const file of parsedFiles) {
        graph.nodes.push({
            type: "file",
            name: file.file
        });

        for (const item of file.imports || []) {
            graph.edges.push({
                type: "imports",
                from: file.file,
                to: item.source
            });
        }

        for (const item of file.functions || []) {
            graph.nodes.push({
                type: "function",
                name: item.name,
                file: file.file
            });

            graph.edges.push({
                type: "contains",
                from: file.file,
                to: item.name
            });
        }

        for (const item of file.classes || []) {
            graph.nodes.push({
                type: "class",
                name: item.name,
                file: file.file
            });

            graph.edges.push({
                type: "contains",
                from: file.file,
                to: item.name
            });
        }

        for (const item of file.components || []) {
            graph.nodes.push({
                type: "component",
                name: item.name,
                file: file.file
            });

            graph.edges.push({
                type: "contains",
                from: file.file,
                to: item.name
            });
        }

        for (const item of file.interfaces || []) {
            graph.nodes.push({
                type: "interface",
                name: item.name,
                file: file.file
            });

            graph.edges.push({
                type: "contains",
                from: file.file,
                to: item.name
            });
        }

        for (const item of file.enums || []) {
            graph.nodes.push({
                type: "enum",
                name: item.name,
                file: file.file
            });

            graph.edges.push({
                type: "contains",
                from: file.file,
                to: item.name
            });
        }
    }

    return graph;
}

module.exports =
    buildKnowledgeGraph;