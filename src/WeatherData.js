class WeatherData {
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
}
