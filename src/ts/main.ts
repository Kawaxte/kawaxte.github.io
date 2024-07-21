Deno.serve((_req) => {
  const html = Deno.readTextFileSync("./src/index.html");

  return new Response(html);
});
