import { start } from "$fresh/server.ts";
import config from "./fresh.config.ts";
import manifest from "./fresh.gen.ts";

async function main(): Promise<void> {
  await start(manifest, config);
}

main();
