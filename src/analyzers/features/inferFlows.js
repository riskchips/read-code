function inferFlows(
    parsedFiles,
    features
) {
    const flows = [];

    if (
        features.includes(
            "authentication"
        )
    ) {
        flows.push({
            name: "user-auth-flow",
            steps: [
                "register",
                "login",
                "authenticated"
            ]
        });
    }

    if (
        features.includes(
            "payments"
        )
    ) {
        flows.push({
            name: "payment-flow",
            steps: [
                "cart",
                "checkout",
                "payment",
                "confirmation"
            ]
        });
    }

    if (
        features.includes(
            "file-upload"
        )
    ) {
        flows.push({
            name: "upload-flow",
            steps: [
                "select-file",
                "upload",
                "storage"
            ]
        });
    }

    return flows;
}

module.exports =
    inferFlows;