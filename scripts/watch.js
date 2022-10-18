#!/usr/bin/env node

const baseConfig = require("./../config/esbuild/esbuild.base.config");

require("esbuild")
  .build({
    ...baseConfig,
    watch: {
      onRebuild(error, result) {
        if (error) console.error("watch build failed:", error);
        else console.log("watch build succeeded:", result);
      },
    },
    outfile: "public/out.js",
  })
  .catch((e) => {
    console.error(e);
    process.exit(1);
  });
