document.addEventListener("DOMContentLoaded", function() {
  updateTemperature = function() {
  document.querySelector('#getCurrentTemperature').innerText = thermostat.temperature;
  document.querySelector('#getCurrentTemperature').className = thermostat.energyUsage();
}

const thermostat = new Thermostat();
updateTemperature();


document.querySelector('#increaseTemp').addEventListener('click', function() {
  thermostat.increaseTemp()
  updateTemperature();
});

document.querySelector('#decreaseTemp').addEventListener('click', () => {
  thermostat.decreaseTemp()
  updateTemperature();
});

document.querySelector('#resetTemp').addEventListener('click', () => {
  thermostat.reset()
  updateTemperature();
});

document.querySelector('#powerSavingMode-On').addEventListener('click', () => {
  thermostat.switchOnPowerSave()
  document.querySelector('#power-saving-status').innerText = 'On';
  updateTemperature();
});

document.querySelector('#powerSavingMode-Off').addEventListener('click', () => {
  thermostat.switchOffPowerSave()
  document.querySelector('#power-saving-status').innerText = 'Off';
  updateTemperature();
});

});