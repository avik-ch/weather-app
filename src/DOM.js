import {
  getWeatherData,
  updateWeatherData,
  changeTempValues,
} from "./weatherFetch.js";

export const domElements = () => {
  const tempUnits = [...document.querySelectorAll(".unit-selected")];

  const searchField = document.querySelector(".search-field");

  searchField.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
      const query = searchField.value.trim();
      if (query) {
        updateWeatherData(query).then(updateDisplayData);
      }
    }
  });

  const location = document.querySelector(".location");
  const mainTemp = document.querySelector(".temp");
  const description = document.querySelector(".description");

  const feelsLike = document.getElementById("feels-like");
  const tempMax = document.getElementById("temp-max");
  const tempMin = document.getElementById("temp-min");
  const humidity = document.getElementById("humidity");
  const precip = document.getElementById("precip");
  const snow = document.getElementById("snow");

  const searchfield = document.querySelector('.search-field');
  searchField.addEventListener('focus', () => searchField.select());

  function updateDisplayData() {
    const weatherData = getWeatherData();

    location.innerHTML = weatherData.location;
    mainTemp.innerHTML = weatherData.temp;
    description.innerHTML = weatherData.description;
    feelsLike.innerHTML = weatherData.feelsLike;
    tempMax.innerHTML = weatherData.maxTemp;
    tempMin.innerHTML = weatherData.minTemp;
    humidity.innerHTML = weatherData.humidity;
    precip.innerHTML = weatherData.precip;
    snow.innerHTML = weatherData.snow;
  }

  function changeTempUnit() {
    const current = tempUnits[0].innerHTML;
    let newUnit;
    if (current == "C") {
      newUnit = "F";
    } else {
      newUnit = "C";
    }
    changeTempValues(newUnit);
    tempUnits.forEach((element) => (element.innerHTML = newUnit));
  }

  const changeTempUnitBtn = document.querySelector(".unit-switcher");
  changeTempUnitBtn.addEventListener("click", () => {
    changeTempUnit();
    updateDisplayData();
  });

  return { updateDisplayData };
};
