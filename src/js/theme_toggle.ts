const themeToggle = document.querySelector(
	".sl-c-header__theme-toggle",
) as HTMLElement;

const letThereBeLight = themeToggle.querySelector(".fa-sun") as HTMLElement;
const letThereBeDark = themeToggle.querySelector(".fa-moon") as HTMLElement;

function setTheme(isDark: boolean): void {
	document.documentElement.style.colorScheme = isDark ? "dark" : "light";

	letThereBeLight.style.display = isDark ? "none" : "inline-block";
	letThereBeDark.style.display = isDark ? "inline-block" : "none";

	localStorage.setItem("theme", isDark ? "dark" : "light");
}

function toggleTheme(): void {
	const isDark = document.documentElement.style.colorScheme === "light";

	setTheme(isDark);
}

export function initThemeToggle(): void {
	const prefersDark = globalThis.matchMedia("(prefers-color-scheme: dark)");

	const savedTheme = localStorage.getItem("theme");
	if (savedTheme === "dark" || (!savedTheme && prefersDark.matches)) {
		setTheme(true);
	} else setTheme(false);

	themeToggle.addEventListener("click", toggleTheme);

	prefersDark.addEventListener("change", (event) => {
		if (!localStorage.getItem("theme")) setTheme(event.matches);
	});
}
