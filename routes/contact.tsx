import type { Handlers } from "$fresh/server.ts";
import { setCookie } from "@std/http";
import type { JSX } from "preact";
import BaseLayout from "../components/layouts/baseLayout.tsx";
import ContentLayout from "../components/layouts/contentLayout.tsx";

export const handler: Handlers = {
  async POST(req: Request): Promise<Response> {
    try {
      const res = await fetch("https://formspree.io/f/mldrgyod", {
        method: "POST",
        body: await req.formData(),
        headers: { "Accept": "application/json" },
      });

      if (!res.ok) {
        return new Response("Form submission failed", { status: 500 });
      }

      const headers = new Headers();
      setCookie(headers, {
        name: "form_submitted",
        value: "true",
        maxAge: 300,
        path: "/",
        httpOnly: true,
        secure: true,
        sameSite: "Strict",
      });

      headers.set("Location", "/thanks");

      return new Response(null, { status: 303, headers });
    } catch {
      return new Response("An error occurred", { status: 500 });
    }
  },
};

export default function Contact(): JSX.Element {
  const timestamp = new Date().getTime();

  return (
    <BaseLayout>
      <ContentLayout>
        <div class="flex flex-col items-center justify-center w-full max-w-md mx-auto">
          <h1 class="text-blue-600 text-3xl font-bold text-center">
            Get in Touch
          </h1>
          <form
            action="/contact"
            method="POST"
            class="w-full space-y-4"
          >
            <input type="hidden" name="_subject" value="Oh my Gah!" />
            <input
              type="hidden"
              name="_next"
              value={`/thanks?t=${timestamp}`}
            />
            <input
              class="w-full px-3 py-2 text-gray-700 bg-white border rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
              type="text"
              name="name"
              placeholder="Name"
              required
            />
            <input
              class="w-full px-3 py-2 text-gray-700 bg-white border rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
              type="email"
              name="email"
              placeholder="Email Address (optional)"
            />
            <textarea
              class="w-full px-3 py-2 text-gray-700 bg-white border rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
              name="message"
              rows={3}
              placeholder="Your Message"
              required
              style={{ resize: "vertical", minHeight: "6rem" }}
            >
            </textarea>
            <div class="flex items-center justify-center">
              <button
                class="px-4 py-2 font-bold text-white bg-blue-500 rounded-md hover:bg-blue-600 focus:outline-none focus:shadow-outline"
                type="submit"
              >
                Send
              </button>
            </div>
          </form>
        </div>
      </ContentLayout>
    </BaseLayout>
  );
}
