import { walk } from "@std/fs";
import { compile } from "lume/deps/sass.ts";

async function buildScss(): Promise<void> {
  for await (const entry of walk("src")) {
    if (entry.isFile && entry.name.endsWith(".scss")) {
      const result = compile(entry.path);
      const outputPath = entry.path.replace("src", "_site").replace(
        ".scss",
        ".css",
      );

      await Deno.writeTextFile(outputPath, result.css);
      console.log(`SASS: ${entry.path} -> ${outputPath}`);
    }
  }
}

buildScss();
