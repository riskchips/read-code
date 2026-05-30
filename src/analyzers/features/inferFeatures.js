function inferFeatures(
    parsedFiles
) {
    const features =
        new Set();

    for (const file of parsedFiles) {
        const lower =
            file.file.toLowerCase();

        if (
            lower.includes(
                "auth"
            ) ||
            lower.includes(
                "login"
            ) ||
            lower.includes(
                "register"
            )
        ) {
            features.add(
                "authentication"
            );
        }

        if (
            lower.includes(
                "payment"
            ) ||
            lower.includes(
                "checkout"
            )
        ) {
            features.add(
                "payments"
            );
        }

        if (
            lower.includes(
                "notification"
            )
        ) {
            features.add(
                "notifications"
            );
        }

        if (
            lower.includes(
                "chat"
            ) ||
            lower.includes(
                "message"
            )
        ) {
            features.add(
                "messaging"
            );
        }

        if (
            lower.includes(
                "upload"
            )
        ) {
            features.add(
                "file-upload"
            );
        }

        if (
            lower.includes(
                "admin"
            )
        ) {
            features.add(
                "admin-panel"
            );
        }

        if (
            lower.includes(
                "search"
            )
        ) {
            features.add(
                "search"
            );
        }

        if (
            lower.includes(
                "dashboard"
            )
        ) {
            features.add(
                "dashboard"
            );
        }
    }

    return [
        ...features
    ];
}

module.exports =
    inferFeatures;