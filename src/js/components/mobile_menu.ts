import { $ } from "../utils/dom.ts";

export function initMobileMenu(): void {
	const hamburger = $(".sl-c-header__hamburger");

	const mobileMenu = $(".sl-c-header__mobile-menu");
	const closeButton = $(".sl-c-header__mobile-menu-close");

	const overlay = document.createElement("div");
	overlay.classList.add("sl-c-header__overlay");
	document.body.appendChild(overlay);

	function toggleMenu(): void {
		mobileMenu?.classList.toggle("is-active");
		overlay.classList.toggle("is-active");

		document.body.style.overflow = mobileMenu?.classList.contains("is-active")
			? "hidden"
			: "";
	}

	[hamburger, closeButton, overlay].forEach((el) =>
		el?.addEventListener("click", toggleMenu)
	);
}
