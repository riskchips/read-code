function detectAuth(
    parsedFiles
) {
    const auth = [];

    for (const file of parsedFiles) {
        for (const item of file.imports ||
            []) {
            const source =
                item.source || "";

            if (
                source.includes(
                    "jwt"
                ) ||
                source.includes(
                    "passport"
                ) ||
                source.includes(
                    "auth"
                )
            ) {
                auth.push({
                    file: file.file,
                    source
                });
            }
        }
    }

    return auth;
}

module.exports =
    detectAuth;