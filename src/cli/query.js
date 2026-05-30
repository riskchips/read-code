const fs = require("fs");
const path = require("path");

const queryEngine = require(
    "../intelligence/queryEngine"
);

function query(
    question
) {
    const file =
        path.join(
            process.cwd(),
            ".read-code",
            "latest.json"
        );

    if (
        !fs.existsSync(
            file
        )
    ) {
        console.log(
            JSON.stringify(
                {
                    error:
                        "No scan found. Run read-code scan first."
                },
                null,
                2
            )
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

module.exports =
    query;