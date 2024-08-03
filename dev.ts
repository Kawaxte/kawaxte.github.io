import freshDev from "$fresh/dev.ts";
import config from "./fresh.config.ts";

async function dev(): Promise<void> {
  await freshDev(import.meta.url, "./main.ts", config);
}

dev();
