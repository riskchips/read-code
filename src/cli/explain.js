const fs = require("fs");

function explain() {
    const file =
        "read-code-output.json";

    if (
        !fs.existsSync(file)
    ) {
        console.error(
            "run scan first"
        );

        return;
    }

    const project =
        JSON.parse(
            fs.readFileSync(
                file,
                "utf8"
            )
        );

    console.log(
        project.projectSummary
            ?.description ||
            "No summary available"
    );
}

module.exports =
    explain;