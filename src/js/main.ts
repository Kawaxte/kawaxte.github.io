import { initContactForm } from "./contact_form.ts";
import { initThemeToggle } from "./theme_toggle.ts";

document.addEventListener("DOMContentLoaded", () => {
  initThemeToggle();
  initContactForm();
});
