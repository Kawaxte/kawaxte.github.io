import Server from "lume/core/server.ts";
import expires from "lume/middlewares/expires.ts";

const server = new Server({
  root: `${Deno.cwd()}/_site`,
});

server.use(expires());

server.start();
