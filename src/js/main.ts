document.addEventListener("DOMContentLoaded", () => {
  const themeToggle = document.querySelector(
    ".sl-c-header__theme-toggle",
  ) as HTMLElement;

  const sunIcon = themeToggle.querySelector(".fa-sun") as HTMLElement;
  const moonIcon = themeToggle.querySelector(".fa-moon") as HTMLElement;

  function toggleTheme(): void {
    const isDark = document.documentElement.style.colorScheme === "dark";
    document.documentElement.style.colorScheme = isDark ? "light" : "dark";

    sunIcon.style.display = isDark ? "inline-block" : "none";
    moonIcon.style.display = isDark ? "none" : "inline-block";

    localStorage.setItem("theme", isDark ? "light" : "dark");
  }

  const prefersDark = globalThis.matchMedia("(prefers-color-scheme: dark)");

  const savedTheme = localStorage.getItem("theme");
  if (savedTheme === "dark" || (!savedTheme && prefersDark.matches)) {
    toggleTheme();
  }

  themeToggle.addEventListener("click", toggleTheme);

  prefersDark.addEventListener("change", () => {
    if (!localStorage.getItem("theme")) toggleTheme();
  });
});
