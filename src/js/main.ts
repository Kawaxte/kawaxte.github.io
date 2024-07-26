import { onDOMContentLoaded } from "./utils/dom.ts";
import { initContactForm } from "./components/contact_form.ts";
import { initMobileMenu } from "./components/mobile_menu.ts";
import { initThemeToggle } from "./components/theme_toggle.ts";
import { initPageTransitions } from "./services/page_transitions.ts";

onDOMContentLoaded(() => {
	initThemeToggle();
	initPageTransitions();
	initMobileMenu();
	initContactForm();
});
