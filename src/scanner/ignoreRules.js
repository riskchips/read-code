const DEFAULT_IGNORES = [
    "node_modules",
    ".git",
    ".next",
    "dist",
    "build",
    "coverage",
    ".turbo",
    ".cache",
    ".vscode",
    ".idea",
    ".vercel",
    ".output",
    ".nuxt",
    ".svelte-kit"
];

function shouldIgnore(name) {
    return DEFAULT_IGNORES.includes(
        name
    );
}

module.exports = {
    DEFAULT_IGNORES,
    shouldIgnore
};