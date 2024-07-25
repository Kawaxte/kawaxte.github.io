import { initContactForm } from "./contact_form.ts";
import { initMobileMenu } from "./mobile_menu.ts";
import { initThemeToggle } from "./theme_toggle.ts";

document.addEventListener("DOMContentLoaded", () => {
	initThemeToggle();
	initMobileMenu();

	initContactForm();
});
