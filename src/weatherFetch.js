async function getWeatherData(query) {
  const response = await fetch(query, { mode: "cors" });
  const weatherData = await response.json();
  return weatherData;
}

function buildQuery(location) {
  return `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}?unitGroup=us&key=RFHWDR395TWSDMP2PVA6QEH52&contentType=json`;
}

function updateWeatherData(location) {
  const query = buildQuery(location);
  const data = getWeatherData(query);
  // DOM Manipulation goes here
}
