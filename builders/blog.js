const fs = require('fs');
const path = require('path');
const {marked} = require('marked');
const {parseFrontmatter} = require('./parse');
const {generatePostHTML, generateIndexHTML} = require('./templates');
const {generateSlug} = require('./utils');

const renderer = {
    link({href, title, tokens}) {
        return `<a href="${href}" target="_blank">${tokens[0].text}</a>`;
    }
};

function buildBlog(postsDir, outputDir) {
    if (!fs.existsSync(postsDir)) {
        console.log('No posts directory found, skipping blog generation');
        return;
    }

    const posts = [];
    const files = fs.readdirSync(postsDir).filter(f => f.endsWith('.md'));

    console.log(`Found ${files.length} blog post(s)`);

    files.forEach(file => {
        const filePath = path.join(postsDir, file);
        const fileContent = fs.readFileSync(filePath, 'utf-8');
        const {metadata, content} = parseFrontmatter(fileContent);

        const slug = generateSlug(file);
        const title = metadata.title || slug.replace(/-/g, ' ');
        const date = metadata.date || null;

        // Convert markdown to HTML
        marked.use({renderer})
        const htmlContent = marked(content);
        const fullHTML = generatePostHTML(title, htmlContent, date);

        // Write post HTML
        const outputPath = path.join(outputDir, `${slug}.html`);
        fs.writeFileSync(outputPath, fullHTML);

        posts.push({title, date, slug, filePath});
        console.log(`  ✓ Generated ${slug}.html`);
    });

    // Sort posts by date (newest first)
    posts.sort((a, b) => {
        if (!a.date && !b.date) return 0;
        if (!a.date) return 1;
        if (!b.date) return -1;
        return new Date(b.date) - new Date(a.date);
    });

    // Generate blog index
    const indexHTML = generateIndexHTML(posts);
    fs.writeFileSync(path.join(outputDir, 'index.html'), indexHTML);
    console.log('  ✓ Generated blog index');
}

module.exports = {buildBlog};