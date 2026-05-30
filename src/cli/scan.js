const fs = require("fs");
const path = require("path");

const walkFiles = require("../scanner/walkFiles");
const buildTree = require("../scanner/buildTree");

const detectFrameworks = require("../analyzers/framework/detectFrameworks");

const aiContext = require("../intelligence/aiContext");

const parseJavaScript = require("../parsers/javascript/parser");
const parseTypeScript = require("../parsers/typescript/parser");
const parseReact = require("../parsers/react/parser");

const buildGraph = require("../graph/buildGraph");

const detectRoutes = require("../analyzers/api/detectRoutes");
const detectControllers = require("../analyzers/api/detectControllers");
const detectMiddleware = require("../analyzers/api/detectMiddleware");

const detectDatabase = require("../analyzers/database/detectDatabase");
const detectORM = require("../analyzers/database/detectORM");
const detectModels = require("../analyzers/database/detectModels");

const detectAuth = require("../analyzers/auth/detectAuth");
const detectProviders = require("../analyzers/auth/detectProviders");

const detectArchitecture = require("../analyzers/architecture/detectArchitecture");

const inferFeatures = require("../analyzers/features/inferFeatures");
const inferFlows = require("../analyzers/features/inferFlows");

function parseOptions(args = []) {
    const options = {
        savefile: null,
        compact: false,
        exclude: []
    };

    for (let i = 0; i < args.length; i++) {
        const arg = args[i];

        if (arg === "--savefile") {
            options.savefile =
                args[i + 1] || null;

            i++;
            continue;
        }

        if (arg === "--compact") {
            options.compact = true;
            continue;
        }

        if (arg === "--exclude") {
            const value =
                args[i + 1] || "";

            options.exclude =
                value
                    .split(",")
                    .map(v =>
                        v.trim()
                    )
                    .filter(Boolean);

            i++;
            continue;
        }
    }

    return options;
}

function ensureCacheDir() {
    const dir = path.join(
        process.cwd(),
        ".read-code"
    );

    if (!fs.existsSync(dir)) {
        fs.mkdirSync(dir, {
            recursive: true
        });
    }

    return dir;
}

function shouldExclude(
    file,
    excludes
) {
    if (
        !Array.isArray(excludes) ||
        excludes.length === 0
    ) {
        return false;
    }

    return excludes.some(
        excluded =>
            file.includes(
                excluded
            )
    );
}

function normalizeFilePaths(
    value,
    root
) {
    if (
        Array.isArray(value)
    ) {
        value.forEach(item =>
            normalizeFilePaths(
                item,
                root
            )
        );

        return;
    }

    if (
        !value ||
        typeof value !==
            "object"
    ) {
        return;
    }

    if (
        typeof value.file ===
        "string"
    ) {
        try {
            value.file =
                path.relative(
                    root,
                    value.file
                );
        } catch {}
    }

    for (const key of Object.keys(
        value
    )) {
        normalizeFilePaths(
            value[key],
            root
        );
    }
}

function getProjectInfo(root) {
    const packagePath = path.join(
        root,
        "package.json"
    );

    const info = {
        name: path.basename(root),
        version: null,
        license: null
    };

    if (!fs.existsSync(packagePath)) {
        return info;
    }

    try {
        const pkg = JSON.parse(
            fs.readFileSync(
                packagePath,
                "utf8"
            )
        );

        info.name =
            pkg.name ||
            info.name;

        info.version =
            pkg.version ||
            null;

        info.license =
            pkg.license ||
            null;
    } catch {}

    return info;
}

function buildStatistics(files) {
    const stats = {
        files: files.length,
        javascript: 0,
        typescript: 0,
        jsx: 0,
        tsx: 0,
        json: 0,
        markdown: 0,
        other: 0
    };

    for (const file of files) {
        const ext =
            path.extname(file);

        switch (ext) {
            case ".js":
                stats.javascript++;
                break;

            case ".ts":
                stats.typescript++;
                break;

            case ".jsx":
                stats.jsx++;
                break;

            case ".tsx":
                stats.tsx++;
                break;

            case ".json":
                stats.json++;
                break;

            case ".md":
                stats.markdown++;
                break;

            default:
                stats.other++;
                break;
        }
    }

    return stats;
}

function analyzeFiles(files) {
    const parsedFiles = [];

    const analysis = {
        imports: [],
        exports: [],
        functions: [],
        classes: [],
        interfaces: [],
        types: [],
        enums: [],
        components: [],
        hooks: [],
        props: [],
        routes: []
    };

    for (const file of files) {
        const ext =
            path.extname(file);

        try {
            let result = null;

            if (ext === ".js") {
                result =
                    parseJavaScript(
                        file
                    );
            }

            else if (
                ext === ".ts"
            ) {
                result =
                    parseTypeScript(
                        file
                    );
            }

            else if (
                ext === ".jsx" ||
                ext === ".tsx"
            ) {
                result =
                    parseReact(
                        file
                    );
            }

            if (!result) {
                continue;
            }

            parsedFiles.push(
                result
            );

            for (const key of Object.keys(
                analysis
            )) {
                if (
                    result[key]
                ) {
                    analysis[key].push(
                        ...result[key]
                    );
                }
            }
        } catch {}
    }

    return {
        parsedFiles,
        analysis
    };
}
function scan(args = []) {
    const options =
        parseOptions(args);

    const root =
        process.cwd();

    const files =
        walkFiles(root).filter(
            file =>
                !shouldExclude(
                    file,
                    options.exclude
                )
        );

    const relativeFiles =
        files.map(file =>
            path.relative(
                root,
                file
            )
        );

    const tree =
        buildTree(
            relativeFiles
        );

    const project =
        getProjectInfo(root);

    const frameworks =
        detectFrameworks(
            root
        );

    const statistics =
        buildStatistics(
            relativeFiles
        );

    const {
        parsedFiles,
        analysis
    } = analyzeFiles(files);

    const graphs =
        buildGraph(
            parsedFiles
        );

    const analyzerResults = {
        routes:
            detectRoutes(
                parsedFiles
            ),

        controllers:
            detectControllers(
                parsedFiles
            ),

        middleware:
            detectMiddleware(
                parsedFiles
            ),

        database:
            detectDatabase(
                parsedFiles
            ),

        orms:
            detectORM(
                parsedFiles
            ),

        models:
            detectModels(
                parsedFiles
            ),

        auth:
            detectAuth(
                parsedFiles
            ),

        providers:
            detectProviders(
                parsedFiles
            ),

        architecture:
            detectArchitecture(
                parsedFiles
            )
    };

    analyzerResults.features =
        inferFeatures(
            parsedFiles
        );

    analyzerResults.flows =
        inferFlows(
            parsedFiles,
            analyzerResults.features
        );

    const result =
    aiContext({
        project,
        frameworks,
        statistics,
        tree,
        analyzers:
            analyzerResults,
        parsedFiles
    });

    result.analysis =
        analysis;

    result.graphs =
        graphs;

    result.analyzers =
        analyzerResults;

    normalizeFilePaths(
        result,
        root
    );

    const output =
        options.compact
            ? JSON.stringify(
                  result
              )
            : JSON.stringify(
                  result,
                  null,
                  2
              );

    try {
        const cacheDir =
            ensureCacheDir();

        fs.writeFileSync(
            path.join(
                cacheDir,
                "latest.json"
            ),
            output
        );
    } catch {}

    if (
        options.savefile
    ) {
        try {
            const savePath =
                path.resolve(
                    process.cwd(),
                    options.savefile
                );

            const saveDir =
                path.dirname(
                    savePath
                );

            if (
                !fs.existsSync(
                    saveDir
                )
            ) {
                fs.mkdirSync(
                    saveDir,
                    {
                        recursive: true
                    }
                );
            }

            fs.writeFileSync(
                savePath,
                output
            );

            console.log(
                JSON.stringify(
                    {
                        success: true,
                        temp:
                            ".read-code/latest.json",
                        saved:
                            options.savefile,
                        compact:
                            options.compact,
                        excluded:
                            options.exclude
                    },
                    null,
                    2
                )
            );
        } catch (error) {
            console.error(
                JSON.stringify(
                    {
                        success: false,
                        error:
                            error.message
                    },
                    null,
                    2
                )
            );
        }

        return result;
    }

    console.log(output);

    return result;
}

module.exports = scan;