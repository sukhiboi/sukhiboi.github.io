const fs = require('node:fs');
const path = require('node:path');

// Load template files
const TEMPLATES_DIR = path.join(__dirname, '../templates');
const BLOG_TEMPLATES_DIR = path.join(TEMPLATES_DIR, 'blog');
const postTemplate = fs.readFileSync(path.join(BLOG_TEMPLATES_DIR, 'post.html'), 'utf-8');
const indexTemplate = fs.readFileSync(path.join(BLOG_TEMPLATES_DIR, 'index.html'), 'utf-8');
const postItemTemplate = fs.readFileSync(path.join(BLOG_TEMPLATES_DIR, 'post-item.html'), 'utf-8');

// Generate HTML wrapper for blog post
function generatePostHTML(title, content, date) {
    return postTemplate
        .replaceAll('{{ TITLE }}', title)
        .replace('{{ PUBLISHED_AT }}', date)
        .replace('{{ CONTENT }}', content);
}

// Generate blog index HTML
function generateIndexHTML(posts) {
    const postsList = posts
        .map(post =>
            postItemTemplate
                .replace('{{ SLUG }}', post.slug)
                .replace('{{ TITLE }}', post.title)
                .replace("{{ PUBLISHED_AT }}", post.date))
        .join('\n');

    return indexTemplate
        .replace('{{ POSTS_LIST }}', postsList);
}

module.exports = {generatePostHTML, generateIndexHTML};