export default {
  tick: (): void => {
    const clock = document.getElementById("clock");
    if (clock) {
      const now = new Date();

      const options: Intl.DateTimeFormatOptions = {
        timeZone: "Europe/Tallinn",
        day: "2-digit",
        month: "short",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
      };

      clock.textContent = now.toLocaleString("en-GB", options).replace(
        ",",
        "",
      );
    }
  },
};
