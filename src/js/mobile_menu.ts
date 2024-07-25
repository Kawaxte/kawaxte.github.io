export function initMobileMenu(): void {
	const hamburger = document.querySelector(".sl-c-header__hamburger");

	const mobileMenu = document.querySelector(".sl-c-header__mobile-menu");
	const closeButton = document.querySelector(".sl-c-header__mobile-menu-close");

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

	hamburger?.addEventListener("click", toggleMenu);
	closeButton?.addEventListener("click", toggleMenu);
	overlay.addEventListener("click", toggleMenu);
}
