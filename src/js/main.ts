import clock from "../_data/clock.ts";

document.addEventListener("DOMContentLoaded", () => {
  clock.updateClock();

  globalThis.setInterval(clock.updateClock, 1000);
});
