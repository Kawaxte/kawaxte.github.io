const devTime = new Date().toLocaleTimeString("et-EE", {
  timeZone: "Europe/Tallinn",
  hour: "2-digit",
  minute: "2-digit",
  second: "2-digit",
});

export const data = {
  devTime,
};
