import type { JSX } from "preact";
import Button from "../components/button.tsx";
import Content from "../components/layouts/content.tsx";
import Page from "../components/layouts/page.tsx";

export default function Error500(): JSX.Element {
  return (
    <Page>
      <Content>
        <div class="flex flex-col items-center justify-center w-full max-w-md mx-auto">
          <i class="fas fa-exclamation-circle text-6xl mb-4 text-red-500"></i>
          <h1 class="text-4xl font-bold text-red-500 mb-4">500</h1>
          <p class="text-xl text-center mb-6">
            Oops! Something went awry...
          </p>
          <Button href="/" variant="primary">Go Back</Button>
        </div>
      </Content>
    </Page>
  );
}
