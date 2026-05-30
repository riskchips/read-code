function tokenize(text) {
    return String(text || "")
        .toLowerCase()
        .replace(/[^a-z0-9\s]/g, " ")
        .split(/\s+/)
        .filter(Boolean);
}

function createEmbedding(text) {
    const tokens =
        tokenize(text);

    const vector = {};

    for (const token of tokens) {
        vector[token] =
            (vector[token] || 0) + 1;
    }

    return vector;
}

function similarity(a, b) {
    let dot = 0;

    let magA = 0;

    let magB = 0;

    const keys =
        new Set([
            ...Object.keys(a),
            ...Object.keys(b)
        ]);

    for (const key of keys) {
        const x = a[key] || 0;
        const y = b[key] || 0;

        dot += x * y;

        magA += x * x;

        magB += y * y;
    }

    if (!magA || !magB) {
        return 0;
    }

    return (
        dot /
        (Math.sqrt(magA) *
            Math.sqrt(magB))
    );
}

module.exports = {
    tokenize,
    createEmbedding,
    similarity
};