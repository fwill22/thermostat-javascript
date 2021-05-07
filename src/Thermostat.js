class Thermostat {

  constructor(temperature = 20) {
    this.temperature = temperature
    this.minimumTemperature = 10
  };

  increaseTemp() {
    this.temperature += 1
  };

  decreaseTemp() {
    if(this.temperature > this.minimumTemperature) {
      this.temperature -= 1
    };
  };
};