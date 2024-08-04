import type { PageProps } from "$fresh/server.ts";
import type { JSX } from "preact";

export default function App(
  { Component }: PageProps,
): JSX.Element {
  const stylesheets = [
    "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.6.0/css/all.min.css",
    "https://fonts.cdnfonts.com/css/corbel",
    "/styles/base/reset.css",
    "/styles/base/typography.css",
    "/styles/components/button.css",
    "/styles/global.css",
  ];

  return (
    <html>
      <head>
        <meta charset="utf-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

        <title>Krysyxte</title>

        {stylesheets.map((href) => <link rel="stylesheet" href={href} />)}
      </head>
      <body class="bg-gray-100 text-black dark:bg-gray-950 dark:text-gray-50">
        <Component />
      </body>
    </html>
  );
}
