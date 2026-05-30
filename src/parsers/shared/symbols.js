function createSymbolTable(
    parsedFiles = []
) {
    const symbols = {};

    for (const file of parsedFiles) {
        const filePath =
            file.file;

        for (const fn of file.functions ||
            []) {
            if (
                !fn.name
            ) {
                continue;
            }

            symbols[
                fn.name
            ] = {
                type:
                    "function",

                file:
                    filePath,

                startLine:
                    fn.startLine ||
                    null,

                endLine:
                    fn.endLine ||
                    null,

                snippet:
                    fn.snippet ||
                    null,

                metadata:
                    fn
            };
        }

        for (const cls of file.classes ||
            []) {
            if (
                !cls.name
            ) {
                continue;
            }

            symbols[
                cls.name
            ] = {
                type:
                    "class",

                file:
                    filePath,

                startLine:
                    cls.startLine ||
                    null,

                endLine:
                    cls.endLine ||
                    null,

                snippet:
                    cls.snippet ||
                    null,

                metadata:
                    cls
            };
        }

        for (const component of file.components ||
            []) {
            if (
                !component.name
            ) {
                continue;
            }

            symbols[
                component.name
            ] = {
                type:
                    "component",

                file:
                    filePath,

                startLine:
                    component.startLine ||
                    null,

                endLine:
                    component.endLine ||
                    null,

                snippet:
                    component.snippet ||
                    null,

                metadata:
                    component
            };
        }

        for (const iface of file.interfaces ||
            []) {
            if (
                !iface.name
            ) {
                continue;
            }

            symbols[
                iface.name
            ] = {
                type:
                    "interface",

                file:
                    filePath,

                metadata:
                    iface
            };
        }

        for (const type of file.types ||
            []) {
            if (
                !type.name
            ) {
                continue;
            }

            symbols[
                type.name
            ] = {
                type:
                    "type",

                file:
                    filePath,

                metadata:
                    type
            };
        }

        for (const en of file.enums ||
            []) {
            if (
                !en.name
            ) {
                continue;
            }

            symbols[
                en.name
            ] = {
                type:
                    "enum",

                file:
                    filePath,

                metadata:
                    en
            };
        }
    }

    return symbols;
}

module.exports =
    createSymbolTable;