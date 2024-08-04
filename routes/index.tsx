import type { JSX } from "preact";
import Content from "../components/layouts/content.tsx";
import Page from "../components/layouts/page.tsx";

export default function Home(): JSX.Element {
  return (
    <Page>
      <Content>
        <div class="flex flex-col md:flex-row items-center justify-between">
          <div class="md:w-1/2 mb-8 md:mb-0">
            <h1 class="text-4xl font-bold mb-4">
              Hello, I'm <span class="text-blue-600">Krystian</span>
            </h1>
            <p class="text-xl mb-6">
              Alleviating boredom through code, alternating between
              dissatisfaction und stagnation.
            </p>
          </div>
          <div class="md:w-1/2 flex justify-center">
            <img
              src="/images/primary-logo.png"
              alt="Krystian Logo"
              class="max-w-full h-auto animate-float"
            />
          </div>
        </div>
      </Content>
    </Page>
  );
}
