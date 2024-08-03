import type { JSX } from "preact";
import BaseLayout from "../components/layouts/baseLayout.tsx";
import ContentLayout from "../components/layouts/contentLayout.tsx";

export default function Home(): JSX.Element {
  return (
    <BaseLayout>
      <ContentLayout>
        <div class="flex flex-col md:flex-row items-center justify-between">
          <div class="md:w-1/2 mb-8 md:mb-0">
            <h1 class="text-4xl font-bold mb-4">
              Hello, I'm <span class="text-blue-600">Krystian</span>
            </h1>
            <p class="text-xl mb-6">
              Alleviating boredom through code, alternating between
              dissatisfaction und stagnation.
            </p>
            {
              /* <div class="space-x-4">
              <a href="#" class="btn btn-primary">View Projects</a>
            </div> */
            }
          </div>
          <div class="md:w-1/2 flex justify-center">
            <img
              src="/images/primary-logo.png"
              alt="Krystian Logo"
              class="max-w-full h-auto animate-float"
            />
          </div>
        </div>
      </ContentLayout>
    </BaseLayout>
  );
}
