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
 
});