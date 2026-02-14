const fs = require('fs');
const path = require('path');
const {buildBlog} = require('./builders/blog');
const {copyFile, copyDir} = require('./builders/utils');

const POSTS_DIR = './posts';
const DIST_DIR = './dist';

const BLOG_DIST_DIR = `${DIST_DIR}/blog`;
const DIST_DIRS = [
    DIST_DIR,
    `${DIST_DIR}/css`,
    BLOG_DIST_DIR,
]

function build() {
    console.log('Building site...');

    // Clean and create dist directory
    if (fs.existsSync(DIST_DIR)) {
        fs.rmSync(DIST_DIR, {recursive: true});
    }
    DIST_DIRS.forEach(dir => {
        fs.mkdirSync(dir, {recursive: true});
    })

    // Copy static files
    console.log('Copying static files...');
    copyFile('./index.html', `${DIST_DIR}/index.html`);
    copyDir('./css', `${DIST_DIR}/css`);

    // Build blog
    console.log('Building blog...');
    buildBlog(POSTS_DIR, BLOG_DIST_DIR);

    console.log('Build complete! Output in ./dist');
}

build();