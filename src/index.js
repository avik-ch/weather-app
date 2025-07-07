import "./styles.css";
import { domElements } from "./DOM.js";
import { updateWeatherData } from "./weatherFetch.js";

document.addEventListener("DOMContentLoaded", () => {
  const { updateDisplayData } = domElements();
  updateWeatherData('minneapolis').then(updateDisplayData);
});