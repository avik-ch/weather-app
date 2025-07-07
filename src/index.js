import "./styles.css";
import { domElements } from "./DOM.js";
import { updateWeatherData } from "./weatherFetch.js";

updateWeatherData('minneapolis');
const updateDisplay = domElements();
