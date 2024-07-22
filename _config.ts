import esbuild from "lume/plugins/esbuild.ts";
import lume from "lume/mod.ts";
import sass from "lume/plugins/sass.ts";
import vento from "lume/plugins/vento.ts";

const site = lume({
  src: "./src",
  dest: "./_site",
  includes: "./src/_includes",
});

export default site
  .ignore("README.md")
  .use(esbuild({
    extensions: [".ts"],
    options: {
      platform: "browser",
      entryPoints: ["assets/ts/main.ts"],
      format: "esm",
      splitting: true,
      minify: true,
      treeShaking: true,
    },
  }))
  .use(vento({
    extensions: [".vto"],
    options: {
      dataVarname: "data",
      autoescape: true,
    },
  }))
  .use(sass({
    extensions: [".scss", ".sass"],
    options: {
      style: "compressed",
      alertAscii: true,
      alertColor: true,
    },
  }))
  .copy("assets/media")
  .copy("CNAME");
