import { $ } from "../utils/dom.ts";

export function initPageTransitions(): void {
  const loadingOverlay = $("#loadingOverlay") as HTMLElement;

  function showLoading(): void {
    loadingOverlay.classList.add("is-active");
  }

  function hideLoading(): void {
    loadingOverlay.classList.remove("is-active");
  }

  document.addEventListener("click", handleLinkClick);
  globalThis.addEventListener("load", hideLoading);

  function handleLinkClick(event: MouseEvent): void {
    const link = (event.target as HTMLElement).closest("a");
    if (
      link && link.href && !link.target &&
      link.hostname === window.location.hostname
    ) {
      event.preventDefault();

      showLoading();

      window.location.href = link.href;
    }
  }

  preloadPages(["/projects", "/contact"]);
}

function preloadPages(pages: string[]): void {
  pages.forEach((page) => {
    const link = document.createElement("link");
    link.rel = "prefetch";
    link.href = page;
    document.head.appendChild(link);
  });
}
