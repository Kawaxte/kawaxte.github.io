import * as esbuild from "esbuild";

esbuild.build({
  entryPoints: ["src/ts/main.ts"],
  minify: true,
  target: ["esnext"],
  format: "esm",
  outdir: "public/js",
  loader: { ".ts": "ts" },
}).catch(() => Deno.exit(1));
