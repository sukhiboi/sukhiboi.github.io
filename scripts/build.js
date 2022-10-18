#!/usr/bin/env node

require("esbuild").build({
    logLevel: "debug",
    entryPoints: ['src/index.js'],
    bundle: true,
    target: ['es2020',
        'chrome58',
        'edge16',
        'firefox57',
        'node12',
        'safari11',],
    loader: {'.js': 'jsx'},
    outfile: "docs/out.js"
}).catch((e) => {
    console.error(e)
    process.exit(1)
})
