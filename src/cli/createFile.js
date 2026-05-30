const fs = require("fs");
const path = require("path");

const {
    registerFile
} = require(
    "../storage/projectStore"
);

function createFile(
    filePath
) {
    try {
        if (!filePath) {
            console.error(
                JSON.stringify({
                    success: false,
                    error:
                        "missing file path"
                })
            );

            return;
        }

        const fullPath =
            path.resolve(
                process.cwd(),
                filePath
            );

        const dir =
            path.dirname(
                fullPath
            );

        if (
            !fs.existsSync(dir)
        ) {
            fs.mkdirSync(dir, {
                recursive: true
            });
        }

        if (
            fs.existsSync(
                fullPath
            )
        ) {
            console.error(
                JSON.stringify({
                    success: false,
                    error:
                        "file already exists",
                    path:
                        fullPath
                })
            );

            return;
        }

        const now =
            new Date().toISOString();

        const content = {
            createdAt: now,
            updatedAt: now,
            data: {}
        };

        fs.writeFileSync(
            fullPath,
            JSON.stringify(
                content,
                null,
                2
            )
        );

        registerFile({
            path:
                filePath,
            createdAt:
                now
        });

        console.log(
            JSON.stringify(
                {
                    success: true,
                    path:
                        fullPath
                },
                null,
                2
            )
        );
    } catch (error) {
        console.error(
            JSON.stringify(
                {
                    success: false,
                    error:
                        error.message
                },
                null,
                2
            )
        );
    }
}

module.exports =
    createFile;