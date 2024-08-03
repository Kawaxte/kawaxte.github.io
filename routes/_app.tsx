import type { PageProps } from "$fresh/server.ts";
import type { JSX } from "preact";

export default function App({ Component }: PageProps): JSX.Element {
  return (
    <html>
      <head>
        <meta charset="utf-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Krysyxte</title>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.6.0/css/all.min.css"
        />
        <link rel="stylesheet" href="https://fonts.cdnfonts.com/css/corbel" />
        <link rel="stylesheet" href="/styles/base/reset.css" />
        <link rel="stylesheet" href="/styles/base/typography.css" />
        <link rel="stylesheet" href="/styles/components/button.css" />
        <link rel="stylesheet" href="/styles/global.css" />
      </head>
      <body class="bg-gray-100 text-black dark:bg-gray-950 dark:text-gray-50">
        <Component />
      </body>
    </html>
  );
}
