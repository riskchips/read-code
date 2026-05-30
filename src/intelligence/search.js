const {
    createEmbedding,
    similarity
} = require("./embeddings");

function buildSearchIndex(project) {
    const entries = [];

    const sources = [
        ...(project.analysis?.functions || []),
        ...(project.analysis?.classes || []),
        ...(project.analysis?.components || []),
        ...(project.analysis?.interfaces || []),
        ...(project.analysis?.types || []),
        ...(project.analysis?.enums || [])
    ];

    for (const item of sources) {
        const text = JSON.stringify(item);

        entries.push({
            type: item.type || "symbol",
            data: item,
            embedding: createEmbedding(text)
        });
    }

    return entries;
}

function search(project, query) {
    const queryEmbedding =
        createEmbedding(query);

    const index =
        buildSearchIndex(project);

    const results = [];

    for (const entry of index) {
        results.push({
            score: similarity(
                queryEmbedding,
                entry.embedding
            ),
            data: entry.data,
            type: entry.type
        });
    }

    results.sort(
        (a, b) =>
            b.score - a.score
    );

    return results.slice(0, 20);
}

module.exports = search;