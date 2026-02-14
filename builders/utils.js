const fs = require('node:fs');
const path = require('node:path');

// Copy directory recursively
function copyDir(src, dest) {
    if (!fs.existsSync(src)) return;

    fs.mkdirSync(dest, { recursive: true });
    const entries = fs.readdirSync(src, { withFileTypes: true });

    for (const entry of entries) {
        const srcPath = path.join(src, entry.name);
        const destPath = path.join(dest, entry.name);

        if (entry.isDirectory()) {
            copyDir(srcPath, destPath);
        } else {
            fs.copyFileSync(srcPath, destPath);
        }
    }
}

// Copy a single file if it exists
function copyFile(src, dest) {
    if (fs.existsSync(src)) {
        fs.copyFileSync(src, dest);
    }
}

// Generate slug from filename (remove .md and date prefix if exists)
function generateSlug(filename) {
    return filename
        .replace(/\.md$/, '')
        .replace(/^\d{4}-\d{2}-\d{2}-/, '');
}

module.exports = {
    copyDir,
    copyFile,
    generateSlug
};