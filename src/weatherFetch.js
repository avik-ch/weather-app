import { WeatherData } from "./WeatherData.js";

let weatherData;
export function getWeatherData() {
    return weatherData;
}

async function fetchWeatherData(query) {
  const response = await fetch(query, { mode: "cors" });
  const weatherData = await response.json();
  return weatherData;
}

function buildQuery(location) {
  return `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}?unitGroup=metric&include=current&key=RFHWDR395TWSDMP2PVA6QEH52&contentType=json`;
}

export async function updateWeatherData(location) {
  const query = buildQuery(location);
  const data = await fetchWeatherData(query);
  weatherData = new WeatherData(
    data.days[0].temp,
    data.days[0].description,
    data.resolvedAddress,
    data.days[0].feelslike,
    data.days[0].tempmax,
    data.days[0].tempmin,
    data.days[0].humidity,
    data.days[0].precip,
    data.days[0].snow
  );
  return weatherData;
}

export function changeTempValues(unit) {
  if (unit == "C") {
    weatherData.convertToCelsius();
  } else {
    weatherData.convertToFahrenheit();
  }
}

