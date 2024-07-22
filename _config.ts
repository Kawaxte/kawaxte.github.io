import lume from "lume/mod.ts";
import sass from "lume/plugins/sass.ts";
import postcss from "lume/plugins/postcss.ts";
import terser from "lume/plugins/terser.ts";

const site = lume();

site.use(sass());
site.use(postcss());
site.use(terser());

site.copy("static");

export default site;