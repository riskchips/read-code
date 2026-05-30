const path = require("path");

function buildTree(files) {
    const tree = {};

    for (const file of files) {
        const parts = file.split(path.sep);

        let current = tree;

        for (const part of parts) {
            if (!current[part]) {
                current[part] = {};
            }

            current = current[part];
        }
    }

    return tree;
}

module.exports = buildTree;