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


  });
 
});