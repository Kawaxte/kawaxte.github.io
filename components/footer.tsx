import type { JSX } from "preact";
import { FooterContent } from "./contents/footerContent.tsx";

export default function Footer(): JSX.Element {
  return (
    <footer class="bg-white dark:bg-gray-900 text-black dark:text-gray-50 p-4">
      <FooterContent author="Krystian" />
    </footer>
  );
}
