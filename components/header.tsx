import type { JSX } from "preact/jsx-runtime";
import MobileMenu from "../islands/mobileMenu.tsx";
import ThemeToggle from "../islands/themeToggle.tsx";
import HeaderContent from "./contents/headerContent.tsx";

export default function Header(): JSX.Element {
  return (
    <header>
      <HeaderContent>
        <nav class="hidden md:flex space-x-4 items-center">
          <a href="/" class="btn">Home</a>
          <a href="#" class="btn">Projects</a>
          <a href="#" class="btn">About</a>
        </nav>
        <div class="flex items-center">
          <ThemeToggle />
          <MobileMenu />
        </div>
      </HeaderContent>
    </header>
  );
}
