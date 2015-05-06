import Ember from 'ember';

export default Ember.Controller.extend({
  needs: 'inspections',
  Inspections: Ember.computed.alias('controllers.inspections'),

  fleetNumber: null,
  busDriver: null,

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

  init: function(){
    var inspectionModel = this.get('Inspections');
    inspectionModel.setController(this);
  },

  // For filling drop-down selection menu of Fleet Number
  fleetNumbers: [
    {label: '550', value: '550'},
    {label: '750', value: '750'},
    {label: '780', value: '780'},
    {label: '850', value: '850'}
  ],

  actions: {
  }
});
