document.addEventListener("DOMContentLoaded", () => {
  const background = document.querySelector(
    ".background",
  ) as HTMLElement;

  function updateParallax(event?: MouseEvent): void {
    const scrollY = globalThis.scrollY;

    const mouseX = event ? event.clientX : globalThis.innerWidth / 2;
    const mouseY = event ? event.clientY : globalThis.innerHeight / 2;

    if (background) {
      const speed = parseFloat(background.dataset["speed"] || "0.1");

      const yPos = -(scrollY * speed);
      const xPos = (mouseX - globalThis.innerWidth / 2) * speed * 0.01;
      const yMousePos = (mouseY - globalThis.innerHeight / 2) * speed * 0.01;

      background.style.transform =
        `translate(-50%, -50%) translate3d(${xPos}px, ${
          yPos + yMousePos
        }px, 0)`;
    }
  }

  globalThis.addEventListener("scroll", () => updateParallax());
  globalThis.addEventListener("mousemove", updateParallax);

  updateParallax();
});
