import { useSignal } from "@preact/signals";
import type { JSX } from "preact";

export default function MobileMenu(): JSX.Element {
  const isMenuOpen = useSignal(false);

  const toggleMenu = () => {
    isMenuOpen.value = !isMenuOpen.value;
  };

  return (
    <>
      <button
        class="md:hidden btn-icon flex items-center justify-center ml-4 w-10 h-10"
        onClick={toggleMenu}
      >
        <i class="fas fa-bars"></i>
      </button>

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
            <button
              onClick={toggleMenu}
              class="btn-icon flex items-center justify-center ml-4 w-10 h-10"
            >
              <i class="fas fa-times"></i>
            </button>
          </div>
          <nav class="flex flex-col items-stretch p-4">
            <a
              href="/"
              class="btn text-left mb-4 justify-start"
              onClick={toggleMenu}
            >
              <i class="fas fa-home mr-2"></i> Home
            </a>
            <a
              href="/projects"
              class="btn text-left mb-4 justify-start"
              onClick={toggleMenu}
            >
              <i class="fas fa-project-diagram mr-2"></i> Projects
            </a>
            <a
              href="/about"
              class="btn text-left mb-4 justify-start"
              onClick={toggleMenu}
            >
              <i class="fas fa-info-circle mr-2"></i> About
            </a>
            <a
              href="/contact"
              class="btn text-left mb-4 justify-start"
              onClick={toggleMenu}
            >
              <i class="fas fa-envelope mr-2"></i> Contact
            </a>
          </nav>
        </div>
      </div>
    </>
  );
}
