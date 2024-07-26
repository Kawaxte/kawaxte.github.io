import { $ } from "../utils/dom.ts";
import { getPreferredTheme, setTheme } from "../utils/theme.ts";

export function initThemeToggle(): void {
	const themeToggle = $(".sl-c-header__theme-toggle") as HTMLElement;

	const letThereBeLight = $(".fa-sun", themeToggle) as HTMLElement;
	const letThereBeDark = $(".fa-moon", themeToggle) as HTMLElement;

	function updateThemeIcons(isDark: boolean): void {
		letThereBeLight.style.display = isDark ? "none" : "inline-block";
		letThereBeDark.style.display = isDark ? "inline-block" : "none";
	}

	function toggleTheme(): void {
		const isDark = document.documentElement.style.colorScheme === "light";

		setTheme(isDark);
		updateThemeIcons(isDark);
	}

	const isDark = getPreferredTheme();
	setTheme(isDark);
	updateThemeIcons(isDark);

	themeToggle.addEventListener("click", toggleTheme);

	const prefersDark = globalThis.matchMedia("(prefers-color-scheme: dark)");
	prefersDark.addEventListener("change", (event) => {
		if (!localStorage.getItem("theme")) {
			setTheme(event.matches);
			updateThemeIcons(event.matches);
		}
	});
}
