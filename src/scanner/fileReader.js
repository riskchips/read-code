const fs = require("fs");

function readFile(file) {
    try {
        const content =
            fs.readFileSync(
                file,
                "utf8"
            );

        return {
            content,
            lines:
                content.split(
                    /\r?\n/
                )
        };
    } catch {
        return {
            content: "",
            lines: []
        };
    }
}

module.exports = readFile;