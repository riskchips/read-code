const traverse = require("../shared/traverse");

function extractInterfaces(ast) {
    const interfaces = [];

    traverse(ast, {
        TSInterfaceDeclaration(path) {
            interfaces.push({
                name: path.node.id.name,
                properties: path.node.body.body.map(prop => ({
                    name: prop.key?.name || null,
                    optional: prop.optional || false
                }))
            });
        }
    });

    return interfaces;
}

module.exports = extractInterfaces;