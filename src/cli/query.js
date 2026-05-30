const fs = require("fs");

const queryEngine = require(
    "../intelligence/queryEngine"
);

function query(question) {
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

    const result =
        queryEngine(
            project,
            question
        );

    console.log(
        JSON.stringify(
            result,
            null,
            2
        )
    );
}

module.exports = query;