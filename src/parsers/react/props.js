const traverse = require("../shared/traverse");

function extractProps(ast) {
    const props = [];

    traverse(ast, {
        FunctionDeclaration(path) {
            const name = path.node.id?.name;

            if (!name) {
                return;
            }

            if (
                path.node.params.length > 0
            ) {
                props.push({
                    component: name,
                    params:
                        path.node.params.map(
                            param =>
                                param.name ||
                                param.type
                        )
                });
            }
        }
    });

    return props;
}

module.exports = extractProps;