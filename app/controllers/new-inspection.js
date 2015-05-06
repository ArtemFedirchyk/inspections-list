import Ember from 'ember';
//import BusSelection from '../components/md-select-bus.js';

export default Ember.Controller.extend({
  //busSelection: BusSelection,

  // List of Inspections' variables
  cabWarningDevices: false,
  wipersWashHorn: false,
  demisters: false,
  mirrors: false,
  handBrake: false,
  directIndicators: false,
  fireExtinguishers: false,
  floorThreads: false,
  driversSeat: false,
  passengerSeats: false,
  handPoles: false,
  bells: false,
  emergencyExitHammers: false,
  interiorLights: false,
  TFTScreen: false,
  wheelchairRamp: false,
  EntranceDoor: false,
  stepLights: false,
  licenseDiscs: false,
  windscreen: false,
  exteriorLights: false,
  wheelsNutsTyres: false,
  bodyPanels: false,
  fuelFilterCup: false,
  oilWaterFuelLicks: false,
  emergencyExitExternal: false,
  bonnetsFlapsDoors: false,
  exhaustSmoke: false,
  destinationEquipment: false,
  CCTV: false,

  needs: ['inspections'],

  // Variable for storing selected Fleet Number from drop-down list
  selectedFleetNumber: null,

  // For filling drop-down selection menu of Fleet Number
  fleetNumbers: [
    {label: '500', value: '500'},
    {label: '550', value: '550'},
    {label: '750', value: '750'},
    {label: '780', value: '780'},
    {label: '850', value: '850'}
  ],

  actions: {
    createModel: function () {
      // Generation of the TIME -----------------------------------
      var today = new Date();
      var dd = today.getDate();
      var mm = today.getMonth()+1; //January is 0!
      var yyyy = today.getFullYear();

      if(dd<10) {
        dd='0'+dd;
      }
      if(mm<10) {
        mm='0'+mm;
      }
      // ------------------------------------------------------------
      var readableDate = mm + '.' + dd + '.' + yyyy;

      // Creating new model and setting all model's fields
      var driver = this.store.createRecord('driver', {
        name: 'Tom Watson',
        fleetNumber: this.get('selectedFleetNumber'),
        date: readableDate,

        // Feeling Inspections list's variables for new model
        cabWarningDevices: this.get('cabWarningDevices'),
        wipersWashHorn: this.get('wipersWashHorn'),
        demisters: this.get('demisters'),
        mirrors: this.get('mirrors'),
        handBrake: this.get('handBrake'),
        directIndicators: this.get('directIndicators'),
        fireExtinguishers: this.get('fireExtinguishers'),
        floorThreads: this.get('floorThreads'),
        driversSeat: this.get('driversSeat'),
        passengerSeats: this.get('passengerSeats'),
        handPoles: this.get('handPoles'),
        bells: this.get('bells'),
        emergencyExitHammers: this.get('emergencyExitHammers'),
        interiorLights: this.get('interiorLights'),
        TFTScreen: this.get('TFTScreen'),
        wheelchairRamp: this.get('wheelchairRamp'),
        EntranceDoor: this.get('EntranceDoor'),
        stepLights: this.get('stepLights'),
        licenseDiscs: this.get('licenseDiscs'),
        windscreen: this.get('windscreen'),
        exteriorLights: this.get('exteriorLights'),
        wheelsNutsTyres: this.get('wheelsNutsTyres'),
        bodyPanels: this.get('bodyPanels'),
        fuelFilterCup: this.get('fuelFilterCup'),
        oilWaterFuelLicks: this.get('oilWaterFuelLicks'),
        emergencyExitExternal: this.get('emergencyExitExternal'),
        bonnetsFlapsDoors: this.get('bonnetsFlapsDoors'),
        exhaustSmoke: this.get('exhaustSmoke'),
        destinationEquipment: this.get('destinationEquipment'),
        CCTV: this.get('CCTV')
      });

      // Saving the 'Driver' model
      driver.save();
    },
    resetCheckBoxes: function() {
      this.set(this.cabWarningDevices, false);
    }
  }

});
