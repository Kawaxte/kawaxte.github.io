import type { JSX } from "preact";
import Button from "../components/button.tsx";
import Content from "../components/layouts/content.tsx";
import Page from "../components/layouts/page.tsx";

export default function Thanks(): JSX.Element {
  return (
    <Page>
      <Content>
        <div class="flex flex-col items-center justify-center w-full max-w-md mx-auto">
          <i class="fas fa-check-circle text-6xl mb-4 text-green-500"></i>
          <p class="text-xl text-center mb-6">Thanks for Message!</p>
          <Button href="/" variant="primary">Go Back</Button>
        </div>
      </Content>
    </Page>
  );
}
