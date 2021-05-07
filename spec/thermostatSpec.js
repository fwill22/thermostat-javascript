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
  });

  describe("Changing temperature", function() {
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

  });

  describe("Power Saving Mode", function() {
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
 
});