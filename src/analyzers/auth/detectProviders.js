function detectProviders(
    parsedFiles
) {
    const providers =
        new Set();

    for (const file of parsedFiles) {
        for (const item of file.imports ||
            []) {
            const source =
                item.source || "";

            if (
                source.includes(
                    "next-auth"
                )
            )
                providers.add(
                    "next-auth"
                );

            if (
                source.includes(
                    "clerk"
                )
            )
                providers.add(
                    "clerk"
                );

            if (
                source.includes(
                    "firebase"
                )
            )
                providers.add(
                    "firebase"
                );

            if (
                source.includes(
                    "auth0"
                )
            )
                providers.add(
                    "auth0"
                );
        }
    }

    return [
        ...providers
    ];
}

module.exports =
    detectProviders;