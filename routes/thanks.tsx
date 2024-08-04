import type { JSX } from "preact";
import BaseLayout from "../components/layouts/baseLayout.tsx";
import ContentLayout from "../components/layouts/contentLayout.tsx";

export default function Thanks(): JSX.Element {
  return (
    <BaseLayout>
      <ContentLayout>
        <div class="flex flex-col items-center justify-center w-full max-w-md mx-auto">
          <i class="fas fa-check-circle text-6xl mb-4 text-green-500"></i>
          <p class="text-xl text-center mb-6">
            Thanks for your Message! I'll get back to you as soon as I could.
          </p>
          <a
            href="/"
            class="px-4 py-2 font-bold text-white bg-blue-600 rounded-md hover:bg-blue-600 focus:outline-none focus:shadow-outline"
          >
            Go Back
          </a>
        </div>
      </ContentLayout>
    </BaseLayout>
  );
}
