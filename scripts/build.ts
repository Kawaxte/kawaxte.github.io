import * as esbuild from "esbuild";

esbuild.build({
  entryPoints: ["src/ts/main.ts"],
  bundle: true,
  minify: true,
  target: ["esnext"],
  format: "esm",
  outfile: "public/js/bundle.js",
  loader: { ".ts": "ts" },
}).catch(() => Deno.exit(1));
