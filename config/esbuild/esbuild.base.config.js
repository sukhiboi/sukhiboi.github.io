module.exports = {
  logLevel: "debug",
  entryPoints: ["src/index.tsx"],
  bundle: true,
  target: ["es2020", "chrome58", "edge16", "firefox57", "node12", "safari11"],
  outfile: "dist/out.js",
};
