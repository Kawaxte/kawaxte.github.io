import lume from "lume/mod.ts";
import esbuild from "lume/plugins/esbuild.ts";
import minify from "lume/plugins/minify_html.ts";
import sass from "lume/plugins/sass.ts";
import vento from "lume/plugins/vento.ts";

const isGithubActions = Deno.env.get("GITHUB_ACTIONS") === "true";

const site = lume({
  location: isGithubActions
    ? new URL("https://kawaxte.github.io")
    : new URL("http://localhost"),
  src: "src",
  dest: "_site",
  includes: "_includes",
});

export default site
  .ignore("README.md")
  .use(esbuild({
    extensions: [".ts"],
    options: {
      platform: "browser",
      entryPoints: ["js/**/*.ts"],
      format: "iife",
      outdir: "assets",
      // minify: true,
      treeShaking: true,
    },
  }))
  .use(minify())
  .use(sass())
  .use(vento())
  .process([".css", ".js"], (pages): void => {
    for (const page of pages) {
      page.data.url = page.data.url.replace(/\.(css|js)$/, ".min.$1");
    }
  })
  .copy("icons", "assets/icons")
  .copy("images", "assets/images")
  .copy("svg", "assets/svg")
  .addEventListener("afterBuild", "dprint fmt");
