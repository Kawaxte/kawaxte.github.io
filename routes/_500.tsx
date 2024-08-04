import type { JSX } from "preact";
import BaseLayout from "../components/layouts/baseLayout.tsx";
import ContentLayout from "../components/layouts/contentLayout.tsx";

export default function Error500(): JSX.Element {
  return (
    <BaseLayout>
      <ContentLayout>
        <div class="flex flex-col items-center justify-center w-full max-w-md mx-auto">
          <i class="fas fa-exclamation-circle text-6xl mb-4 text-red-500"></i>
          <h1 class="text-4xl font-bold text-red-500 mb-4">500</h1>
          <p class="text-xl text-center mb-6">
            Oops! Something went awry...
          </p>
          <a
            href="/"
            class="px-4 py-2 font-bold text-white bg-red-500 rounded-md hover:bg-red-600 focus:outline-none focus:shadow-outline"
          >
            Go Back
          </a>
        </div>
      </ContentLayout>
    </BaseLayout>
  );
}
