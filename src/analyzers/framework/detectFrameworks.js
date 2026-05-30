const fs = require("fs");
const path = require("path");

function detectFrameworks(
    root
) {
    const frameworks =
        new Set();

    const packagePath =
        path.join(
            root,
            "package.json"
        );

    if (
        !fs.existsSync(
            packagePath
        )
    ) {
        return [];
    }

    try {
        const pkg =
            JSON.parse(
                fs.readFileSync(
                    packagePath,
                    "utf8"
                )
            );

        const deps = {
            ...(pkg.dependencies ||
                {}),
            ...(pkg.devDependencies ||
                {})
        };

        const names =
            Object.keys(
                deps
            );

        if (
            names.includes(
                "react"
            )
        ) {
            frameworks.add(
                "react"
            );
        }

        if (
            names.includes(
                "next"
            )
        ) {
            frameworks.add(
                "nextjs"
            );
        }

        if (
            names.includes(
                "express"
            )
        ) {
            frameworks.add(
                "express"
            );
        }

        if (
            names.includes(
                "fastify"
            )
        ) {
            frameworks.add(
                "fastify"
            );
        }

        if (
            names.includes(
                "nestjs"
            ) ||
            names.includes(
                "@nestjs/core"
            )
        ) {
            frameworks.add(
                "nestjs"
            );
        }

        if (
            names.includes(
                "typescript"
            )
        ) {
            frameworks.add(
                "typescript"
            );
        }

        frameworks.add(
            "node"
        );
    } catch {}

    return [
        ...frameworks
    ];
}

module.exports =
    detectFrameworks;