const fs = require("fs");
const path = require("path");
const { shouldIgnore } = require("./ignoreRules");

function walkFiles(dir, files = []) {
    const entries = fs.readdirSync(dir, {
        withFileTypes: true
    });

    for (const entry of entries) {
        const fullPath = path.join(dir, entry.name);

        if (shouldIgnore(entry.name)) {
            continue;
        }

        if (entry.isDirectory()) {
            walkFiles(fullPath, files);
            continue;
        }

        files.push(fullPath);
    }

    return files;
}

module.exports = walkFiles;