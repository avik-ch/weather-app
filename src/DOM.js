import { getWeatherData, updateWeatherData, changeTempValues } from "./weatherFetch.js";

export const domElements = (weatherData) => {
  const tempUnits = [...document.querySelectorAll(".unit-selected")];

  const location = document.querySelector(".location");
  const mainTemp = document.querySelector(".temp");
  const description = document.querySelector(".description");

  const feelsLike = document.querySelector("#feels-like");
  const tempMax = document.querySelector("#temp-max");
  const tempMin = document.querySelector("#temp-Min");
  const humidity = document.querySelector("#humidity");
  const precip = document.querySelector("#precip");
  const snow = document.querySelector("#snow");

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
