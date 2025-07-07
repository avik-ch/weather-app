export class WeatherData {
  #temp;
  #description;
  #location;
  #feelsLike;
  #maxTemp;
  #minTemp;
  #humidity;
  #precip;
  #snow;

  constructor(
    temp,
    description,
    location,
    feelsLike,
    maxTemp,
    minTemp,
    humidity,
    precip,
    snow
  ) {
    this.#temp = temp;
    this.#description = description;
    this.#location = location;
    this.#feelsLike = feelsLike;
    this.#maxTemp = maxTemp;
    this.#minTemp = minTemp;
    this.#humidity = humidity;
    this.#precip = precip;
    this.#snow = snow;
  }

  get temp() {
    return this.#temp;
  }

  get description() {
    return this.#description;
  }

  get location() {
    return this.#location;
  }

  get feelsLike() {
    return this.#feelsLike;
  }

  get maxTemp() {
    return this.#maxTemp;
  }

  get minTemp() {
    return this.#minTemp;
  }

  get humidity() {
    return this.#humidity;
  }

  get precip() {
    return this.#precip;
  }

  get snow() {
    return this.#snow;
  }

  convertToCelsius() {
    this.#temp = this.#fahrenheitToCelsius(this.#temp);
    this.#feelsLike = this.#fahrenheitToCelsius(this.#feelsLike);
    this.#maxTemp = this.#fahrenheitToCelsius(this.#maxTemp);
    this.#minTemp = this.#fahrenheitToCelsius(this.#minTemp);
  }

  convertToFahrenheit() {
    this.#temp = this.#celsiusToFahrenheit(this.#temp);
    this.#feelsLike = this.#celsiusToFahrenheit(this.#feelsLike);
    this.#maxTemp = this.#celsiusToFahrenheit(this.#maxTemp);
    this.#minTemp = this.#celsiusToFahrenheit(this.#minTemp);
  }

  #fahrenheitToCelsius(f) {
    return Math.round((5 / 9) * (f - 32) * 10) / 10;
  }

  #celsiusToFahrenheit(c) {
    return Math.round((c * (9 / 5) + 32) * 10) / 10;
  }
}
