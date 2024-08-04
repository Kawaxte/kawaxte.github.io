import type { JSX } from "preact/jsx-runtime";
import MobileMenu from "../../islands/mobileMenu.tsx";
import Theme from "../../islands/theme.tsx";

export default function Header(): JSX.Element {
  return (
    <header class="bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-50 p-4 flex justify-between items-center">
      <a href="/" class="text-2xl font-bold text-blue-600">Krysyxte</a>
      <nav class="hidden md:flex space-x-4 items-center">
        <a href="/" class="btn">Home</a>
        <a href="/projects" class="btn">Projects</a>
        <a href="/about" class="btn">About</a>
        <a href="/contact" class="btn">Contact</a>
      </nav>
      <div class="flex items-center">
        <Theme />
        <MobileMenu />
      </div>
    </header>
  );
}
