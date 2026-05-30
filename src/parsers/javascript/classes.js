const traverse = require("../shared/traverse");

function extractClasses(ast) {
    const classes = [];

    traverse(ast, {
        ClassDeclaration(path) {
            classes.push({
                name: path.node.id?.name || "anonymous",
                methods: path.node.body.body
                    .filter(node => node.type === "ClassMethod")
                    .map(method => ({
                        name: method.key?.name || "unknown",
                        async: method.async,
                        static: method.static
                    }))
            });
        }
    });

    return classes;
}

module.exports = extractClasses;