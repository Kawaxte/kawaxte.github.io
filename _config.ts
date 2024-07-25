import lume from "lume/mod.ts";
import esbuild from "lume/plugins/esbuild.ts";
import minify from "lume/plugins/minify_html.ts";
import sass from "lume/plugins/sass.ts";
import vento from "lume/plugins/vento.ts";

const isActions = Deno.env.get("GITHUB_ACTIONS") === "true";

const site = lume({
  src: "src",
  dest: "_site",
  includes: "_includes",
  location: isActions
    ? new URL("https://krysyxte.github.io")
    : new URL("https://krysyxte.eu"),
});

site.ignore("README.md");

site.use(esbuild({
  extensions: [".ts"],
  options: {
    platform: "browser",
    entryPoints: ["js/**/*.ts"],
    format: "iife",
    treeShaking: true,
  },
}));
site.use(minify());
site.use(sass());
site.use(vento());

site.process([".css", ".js"], (pages): void => {
  for (const page of pages) {
    page.data.url = page.data.url.replace(/\.(css|js)$/, ".min.$1");
  }
});

site.copy("icons", "assets/icons");
site.copy("images", "assets/images");
site.copy("svg", "assets/svg");
site.copy("CNAME");

site.addEventListener("afterBuild", "dprint fmt");

export default site;
