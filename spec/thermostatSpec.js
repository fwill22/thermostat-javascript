'use strict';

describe('Thermostat', function() {

  let thermostat;

  beforeEach(function() {
    thermostat = new Thermostat;
  });

  describe('Constructor', function() {
    it('starts with a default temperature of 20', function() {
      expect(thermostat.temperature).toEqual(20)
    });
    it('starts with power saving mode on', function() {
      expect(thermostat.powerSavingMode).toEqual(true)
    });
  });

  describe("Changing temperature", function() {
    it('returns the current temperature', function() {
      expect(thermostat.getCurrentTemperature()).toEqual(thermostat.temperature)
    });

    it('can increase the temperature', function() {
      thermostat.increaseTemp()
      expect(thermostat.temperature).toEqual(21)
    });

    it('can decrease the temperature', function() {
      thermostat.decreaseTemp()
      expect(thermostat.temperature).toEqual(19)
    });
    
    it('has a minimum temperature of 10', function() {
      let i;
      for (i = 0; i <= 10; i++) {
        thermostat.decreaseTemp();
      };
      expect(thermostat.temperature).toEqual(10)
    });

    it('can reset the temperature to 20', function() {
      thermostat.increaseTemp()
      thermostat.reset()
      expect(thermostat.temperature).toEqual(20)
    });

  });

  describe("Power Saving Mode", function() {
    it('can return the status of Power Saving Mode', function() {
      expect(thermostat.getPowerSavingMode()).toEqual(thermostat.powerSavingMode)
    });

    it('can be turned off', function() {
      thermostat.switchOffPowerSave()
      expect(thermostat.powerSavingMode).toEqual(false)
    });

    it('can be turned on', function() {
      thermostat.switchOffPowerSave()
      thermostat.switchOnPowerSave()
      expect(thermostat.powerSavingMode).toEqual(true)
    });

    it('when switched on, sets maximum temperature to 25', function() {
      let i;
      for(i = 0; i <= 10; i++) {
        thermostat.increaseTemp();
      };
      expect(thermostat.temperature).toEqual(25)
    });

    it('when switched off, sets maximum temperature to 32', function() {
      thermostat.switchOffPowerSave()
      let i;
      for(i = 0; i <= 15; i++) {
        thermostat.increaseTemp();
      };
      expect(thermostat.temperature).toEqual(32)
    });

  });

  describe("Energy usage", function() {
    it('returns "low-usage" when temperature < 18', function() {
      let thermostatLow = new Thermostat(17, true, 25)
      expect(thermostatLow.energyUsage()).toEqual("low-usage")
    });

    it('returns "medium-usage" when temperature <= 25', function() {
      let thermostatMid = new Thermostat(25, true, 25)
      expect(thermostatMid.energyUsage()).toEqual("medium-usage")
    });

    it('returns "high-usage" when temperature is > 25', function() {
      let thermostatHigh = new Thermostat(28, false, 32)
      expect(thermostatHigh.energyUsage()).toEqual("high-usage")
    });
  });
 
});