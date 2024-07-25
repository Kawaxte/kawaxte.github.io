document.addEventListener("DOMContentLoaded", () => {
  const themeToggle = document.querySelector(
    ".sl-c-header__theme-toggle",
  ) as HTMLElement;

  const sunIcon = themeToggle.querySelector(".fa-sun") as HTMLElement;
  const moonIcon = themeToggle.querySelector(".fa-moon") as HTMLElement;

  function toggleTheme(): void {
    const isDark = document.documentElement.classList.toggle("dark-theme");

    sunIcon.style.display = isDark ? "none" : "inline-block";
    moonIcon.style.display = isDark ? "inline-block" : "none";

    localStorage.setItem("theme", isDark ? "dark" : "light");
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
