export function setTheme(isDark: boolean): void {
  document.documentElement.style.colorScheme = isDark ? "dark" : "light";

  localStorage.setItem("theme", isDark ? "dark" : "light");
}

export function getPreferredTheme(): boolean {
  const savedTheme = localStorage.getItem("theme");

  const prefersDark = globalThis.matchMedia("(prefers-color-scheme: dark)");

  return savedTheme === "dark" || (!savedTheme && prefersDark.matches);
}
