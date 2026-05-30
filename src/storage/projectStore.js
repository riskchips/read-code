const fs = require("fs");
const path = require("path");

const STORE_DIR = path.join(
    process.cwd(),
    ".read-code"
);

const STORE_FILE = path.join(
    STORE_DIR,
    "project-files.json"
);

function ensureStore() {
    if (!fs.existsSync(STORE_DIR)) {
        fs.mkdirSync(STORE_DIR, {
            recursive: true
        });
    }

    if (!fs.existsSync(STORE_FILE)) {
        fs.writeFileSync(
            STORE_FILE,
            JSON.stringify(
                {
                    files: []
                },
                null,
                2
            )
        );
    }
}

function getStore() {
    ensureStore();

    try {
        return JSON.parse(
            fs.readFileSync(
                STORE_FILE,
                "utf8"
            )
        );
    } catch {
        return {
            files: []
        };
    }
}

function saveStore(data) {
    ensureStore();

    fs.writeFileSync(
        STORE_FILE,
        JSON.stringify(
            data,
            null,
            2
        )
    );
}

function registerFile(file) {
    const store =
        getStore();

    const exists =
        store.files.find(
            item =>
                item.path ===
                file.path
        );

    if (exists) {
        return false;
    }

    store.files.push(file);

    saveStore(store);

    return true;
}

module.exports = {
    getStore,
    saveStore,
    registerFile
};