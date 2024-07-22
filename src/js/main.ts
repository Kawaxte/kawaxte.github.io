import clock from "./clock.ts";

function updateClock(): void {
  clock.tick();

  globalThis.setInterval(updateClock, 1000);
}

document.addEventListener("DOMContentLoaded", () => {
  updateClock();
});
