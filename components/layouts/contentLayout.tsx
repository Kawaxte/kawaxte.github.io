import type { ComponentChildren, JSX } from "preact";

export default function ContentLayout(
  { children }: { children: ComponentChildren },
): JSX.Element {
  return (
    <section class="flex flex-col items-center justify-center md:px-6 md:py-12 px-4 py-8">
      <div class="flex flex-col md:flex-row justify-center items-center mx-auto shadow-lg rounded-lg bg-white dark:bg-gray-900 max-w-full md:max-w-5xl min-h-[18.75rem] md:min-h-[25rem] overflow-hidden">
        <div class="px-6 py-8">
          {children}
        </div>
      </div>
    </section>
  );
}
