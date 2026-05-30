function extractExports(ast) {
    const exports = [];

    for (const node of ast.program.body) {
        if (
            node.type === "ExportNamedDeclaration" &&
            node.declaration
        ) {
            const declaration = node.declaration;

            if (declaration.id?.name) {
                exports.push(declaration.id.name);
            }

            if (
                declaration.declarations &&
                declaration.declarations.length
            ) {
                for (const item of declaration.declarations) {
                    if (item.id?.name) {
                        exports.push(item.id.name);
                    }
                }
            }
        }

        if (node.type === "ExportDefaultDeclaration") {
            exports.push("default");
        }
    }

    return exports;
}

module.exports = extractExports;