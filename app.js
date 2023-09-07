const slackNameElement = document.querySelector(
  '[data-testid="slackUserName"]'
);
const currentDayElement = document.querySelector(
  '[data-testid="currentDayOfTheWeek"]'
);
const currentUTCTimeElement = document.querySelector(
  '[data-testid="currentUTCTime"]'
);

slackNameElement.textContent = "Taiwo Akerele";

const daysOfWeek = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
const today = new Date();
const currentDayOfWeek = daysOfWeek[today.getUTCDay()];
currentDayElement.textContent = currentDayOfWeek;

const options = {
  timeZone: "UTC",
  hour: "2-digit",
  minute: "2-digit",
  second: "2-digit",
};
currentUTCTimeElement.textContent = today.toLocaleTimeString("en-US", options);
