import type { Handlers } from "$fresh/server.ts";
import { setCookie } from "@std/http";
import type { JSX } from "preact";
import Button from "../components/button.tsx";
import FormInput from "../components/formInput.tsx";
import Content from "../components/layouts/content.tsx";
import Page from "../components/layouts/page.tsx";

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
    <Page>
      <Content>
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
            <FormInput
              type="text"
              name="name"
              placeholder="Name"
              required={true}
            />
            <FormInput
              type="email"
              name="email"
              placeholder="Email Address (optional)"
            />
            <FormInput
              type="textarea"
              name="message"
              placeholder="Your Message"
              required={true}
              rows={3}
            />
            <div class="flex items-center justify-center">
              <Button variant="primary" type="submit">Send Message</Button>
            </div>
          </form>
        </div>
      </Content>
    </Page>
  );
}
