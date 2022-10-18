#!/usr/bin/env node

const baseConfig = require("./../config/esbuild/esbuild.base.config");

require("esbuild")
  .build(baseConfig)
  .catch((e) => {
    console.error(e);
    process.exit(1);
  });
