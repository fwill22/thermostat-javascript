class Thermostat {

  constructor(temperature = 20) {
    this.temperature = temperature
  };

  increaseTemp() {
    this.temperature += 1
  };

  decreaseTemp() {
    this.temperature -= 1
  }
};