import { IS_BROWSER } from "$fresh/runtime.ts";
import { useSignal } from "@preact/signals";
import type { JSX } from "preact";
import { useEffect } from "preact/hooks";
import { IconButton } from "../components/iconButton.tsx";

export default function Theme(): JSX.Element {
  const letThereBeDark = useSignal(false);

  useEffect(() => {
    if (IS_BROWSER) {
      const savedTheme = globalThis.localStorage.getItem("theme");

      letThereBeDark.value = savedTheme === "dark" ||
        (!savedTheme &&
          globalThis.matchMedia("(prefers-color-scheme: dark)").matches);

      globalThis.document.documentElement.classList.toggle(
        "dark",
        letThereBeDark.value,
      );
    }
  }, []);

  const toggle = () => {
    if (IS_BROWSER) {
      letThereBeDark.value = !letThereBeDark.value;

      globalThis.localStorage.setItem(
        "theme",
        letThereBeDark.value ? "dark" : "light",
      );

      globalThis.document.documentElement.classList.toggle(
        "dark",
        letThereBeDark.value,
      );
    }
  };

  return (
    <div class="flex items-center">
      <IconButton
        onClick={toggle}
        icon={letThereBeDark.value ? "fa-moon" : "fa-sun"}
      />
    </div>
  );
}
