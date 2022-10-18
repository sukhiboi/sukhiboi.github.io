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
    watch: {
        onRebuild(error, result) {
            if (error) console.error('watch build failed:', error)
            else console.log('watch build succeeded:', result)
        },
    },
    loader: {'.js': 'jsx'},
    outfile: "public/out.js",
}).catch((e) => {
    console.error(e)
    process.exit(1)
})
