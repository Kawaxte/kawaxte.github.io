import { useSignal } from "@preact/signals";
import type { JSX } from "preact";
import { IconButton } from "../components/iconButton.tsx";

export default function MobileMenu(): JSX.Element {
  const isMenuOpen = useSignal(false);

  const toggleMenu = () => {
    isMenuOpen.value = !isMenuOpen.value;
  };

  return (
    <>
      <IconButton
        onClick={toggleMenu}
        icon="fa-bars"
        className="md:hidden"
      />

      <div
        class={`fixed inset-0 bg-black bg-opacity-50 z-40 transition-opacity duration-300 ${
          isMenuOpen.value ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={toggleMenu}
      >
        <div
          class={`fixed top-0 right-0 bottom-0 w-3/4 bg-white dark:bg-gray-900 z-50 transition-transform duration-300 ${
            isMenuOpen.value ? "translate-x-0" : "translate-x-full"
          }`}
          onClick={(event) => event.stopPropagation()}
        >
          <div class="flex justify-between items-center p-4 bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-50">
            <span class="text-2xl font-bold text-blue-600">Krysyxte</span>
            <IconButton
              onClick={toggleMenu}
              icon="fa-times"
            />
          </div>
          <nav class="flex flex-col items-stretch p-4">
            {[
              { href: "/", icon: "fa-home", text: "Home" },
              {
                href: "/projects",
                icon: "fa-project-diagram",
                text: "Projects",
              },
              { href: "/about", icon: "fa-info-circle", text: "About" },
              { href: "/contact", icon: "fa-envelope", text: "Contact" },
            ].map(({ href, icon, text }) => (
              <a
                key={href}
                href={href}
                class="btn text-left mb-4 justify-start"
                onClick={toggleMenu}
              >
                <i class={`fas ${icon} mr-2`}></i> {text}
              </a>
            ))}
          </nav>
        </div>
      </div>
    </>
  );
}
