import { Application, Router } from "@oak/oak";

const router = new Router();

const app = new Application();
app.use(async (ctx, next) => {
  try {
    await ctx.send({
      root: `${Deno.cwd()}/_site`,
      index: "index.html",
    });
  } catch {
    next();
  }
});
app.use(router.routes());
app.use(router.allowedMethods());

async function listen(): Promise<void> {
  await app.listen({ port: 8000 });
}

listen();
