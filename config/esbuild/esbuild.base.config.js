module.exports = {
  logLevel: "info",
  entryPoints: ["src/index.tsx"],
  bundle: true,
  target: ["es2020", "chrome58"],
  outfile: "dist/out.js",
};
