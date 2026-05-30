const parser = require("@babel/parser");

function createAST(code) {
    return parser.parse(code, {
        sourceType: "unambiguous",

        plugins: [
            "jsx",
            "typescript",
            "classProperties",
            "classPrivateProperties",
            "classPrivateMethods",
            "decorators-legacy",
            "dynamicImport",
            "optionalChaining",
            "nullishCoalescingOperator",
            "objectRestSpread",
            "topLevelAwait"
        ]
    });
}

module.exports = createAST;