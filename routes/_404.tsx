import type { JSX } from "preact";
import BaseLayout from "../components/layouts/baseLayout.tsx";
import ContentLayout from "../components/layouts/contentLayout.tsx";

export default function Error404(): JSX.Element {
  return (
    <BaseLayout>
      <ContentLayout>
        <div class="flex flex-col items-center justify-center w-full max-w-md mx-auto">
          <i class="fas fa-search text-6xl mb-4 text-blue-500"></i>
          <h1 class="text-4xl font-bold text-blue-500 mb-4">404</h1>
          <p class="text-xl text-center mb-6">
            Oops! Cannot find what you're looking for...
          </p>
          <a
            href="/"
            class="px-4 py-2 font-bold text-white bg-blue-500 rounded-md hover:bg-blue-600 focus:outline-none focus:shadow-outline"
          >
            Go Back
          </a>
        </div>
      </ContentLayout>
    </BaseLayout>
  );
}
