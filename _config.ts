import lume from "lume/mod.ts";
import esbuild from "lume/plugins/esbuild.ts";
import sass from "lume/plugins/sass.ts";
import vento from "lume/plugins/vento.ts";
import { minify } from "minify";

const site = lume({
  location: new URL(`https://${Deno.readTextFileSync("CNAME")}`),
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
      format: "esm",
      minify: true,
      treeShaking: true,
    },
  }))
  .use(vento({
    options: {
      autoescape: true,
    },
  }))
  .use(sass())
  .process([".css"], (pages): void => {
    for (const page of pages) {
      page.data.url = page.data.url.replace(/\.css$/, ".min.css");
    }
  })
  .process([".html"], (pages): void => {
    for (const page of pages) {
      const content = page.content?.toString();
      if (!content) {
        throw new Error(`No content for ${page.data.url}`);
      }

      page.content = minify("html", content);
    }
  })
  .process([".js"], (pages): void => {
    for (const page of pages) {
      page.content = page.content?.toString();

      page.data.url = page.data.url.replace(/\.js$/, ".min.js");
    }
  })
  .copy("fonts")
  .copy("icons")
  .copy("images")
  .copy("svg")
  .copy("CNAME");
