import { onDOMContentLoaded } from "./utils/dom.ts";
import { initMobileMenu } from "./components/mobile_menu.ts";
import { initThemeToggle } from "./components/theme_toggle.ts";
import { initPageTransitions } from "./services/page_transitions.ts";

onDOMContentLoaded(() => {
	initThemeToggle();
	initPageTransitions();
	initMobileMenu();

	if (document.getElementById("contactForm")) {
		import("./components/contact_form.ts").then((module) => {
			module.initContactForm();
		});
	}
});
