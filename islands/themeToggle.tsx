import { IS_BROWSER } from "$fresh/runtime.ts";
import { useSignal } from "@preact/signals";
import type { JSX } from "preact";
import { useEffect } from "preact/hooks";

export default function ThemeToggle(): JSX.Element {
  const isDark = useSignal(false);

  useEffect(() => {
    if (IS_BROWSER) {
      const savedTheme = globalThis.localStorage.getItem("theme");
      isDark.value = savedTheme === "dark" ||
        (!savedTheme &&
          globalThis.matchMedia("(prefers-color-scheme: dark)").matches);
      globalThis.document.documentElement.classList.toggle(
        "dark",
        isDark.value,
      );
    }
  }, []);

  const toggleTheme = () => {
    if (IS_BROWSER) {
      isDark.value = !isDark.value;
      globalThis.localStorage.setItem("theme", isDark.value ? "dark" : "light");
      globalThis.document.documentElement.classList.toggle(
        "dark",
        isDark.value,
      );
    }
  };

  return (
    <div class="flex items-center">
      <button
        class="btn-icon flex items-center justify-center ml-4 w-10 h-10"
        onClick={toggleTheme}
      >
        <i class={`fas ${isDark.value ? "fa-moon" : "fa-sun"}`}></i>
      </button>
    </div>
  );
}
