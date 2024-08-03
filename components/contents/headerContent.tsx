import type { JSX } from "preact";

export default function HeaderContent(
  { children }: { children: JSX.Element | JSX.Element[] },
): JSX.Element {
  return (
    <div class="bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-50 p-4 flex justify-between items-center">
      <a href="/" class="text-2xl font-bold text-blue-600">Krysyxte</a>
      {children}
    </div>
  );
}
