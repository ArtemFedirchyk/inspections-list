import Ember from 'ember';

export default Ember.ArrayController.extend({
  // Declaration of 'existing-inspection' controller for future using inside this controller
  needs: ['existing-inspection', 'new-inspection'],
  existingController: Ember.computed.alias('controllers.existing-inspection'),
  newInspectionController: Ember.computed.alias('controllers.new-inspection'),

  foundModel: undefined,
  failuresCounter: 0,

  actions: {
    findInspectionById: function (inspectionId) {
      console.log('inside findInspectionById()');
      // Gets all models from Store
      var foundInspections = this.get('model');
      var parent = this;
      // Checks all models inside Store for needed for model which has needed ID and if it's exist then
      // sets 'foundModel' variable for future using
      foundInspections.forEach(function (entry) {
        if (entry.get('id') === inspectionId) {
          parent.set('foundModel', entry);
        }
      });

      // Initializing of 'existing-inspection' controller for future setting needed fields for binding to check-boxes
      this.get('existingController').init();
      // Checks if 'existing-inspection' controller instance is present(not equals to NULL) then fills all inspection
      // variables from needed model for future binding them to check-boxes
      if (parent.existingController !== null) {
        parent.fillController();
      }
      this.send('checkFailures');
    },
    // Checks how much failures are present in Inspection record (Model)
    checkFailures: function(){
      console.log('Inside checkFailures action');
      var parent = this;
      var foundModel = parent.foundModel;
      var counter = 0;
      if(foundModel.get('cabWarningDevices') === false){
        counter = parent.failuresCounter + 1;
        parent.set('failuresCounter', counter);
      }
      console.log(parent.get('failuresCounter'));
    },
    // Clears all Check-boxes and drop-down for new inspection
    clearNewInspection: function(){
      var parent = this;
      this.get('newInspectionController').init();
      if(parent.newInspectionController !== null){
        var newInspectionController = parent.newInspectionController;
        // Resetting Fleet Number value from drop-down
        newInspectionController.set('selectedFleetNumber', null);
        // Resetting inspections values
        newInspectionController.set('cabWarningDevices', false);
        newInspectionController.set('wipersWashHorn', false);
        newInspectionController.set('demisters', false);
        newInspectionController.set('mirrors', false);
        newInspectionController.set('handBrake', false);
        newInspectionController.set('directIndicators', false);
        newInspectionController.set('fireExtinguishers', false);
        newInspectionController.set('floorThreads', false);
        newInspectionController.set('driversSeat', false);
        newInspectionController.set('passengerSeats', false);
        newInspectionController.set('handPoles', false);
        newInspectionController.set('bells', false);
        newInspectionController.set('emergencyExitHammers', false);
        newInspectionController.set('interiorLights', false);
        newInspectionController.set('TFTScreen', false);
        newInspectionController.set('wheelchairRamp', false);
        newInspectionController.set('EntranceDoor', false);
        newInspectionController.set('stepLights', false);
        newInspectionController.set('licenseDiscs', false);
        newInspectionController.set('windscreen', false);
        newInspectionController.set('exteriorLights', false);
        newInspectionController.set('wheelsNutsTyres', false);
        newInspectionController.set('bodyPanels', false);
        newInspectionController.set('fuelFilterCup', false);
        newInspectionController.set('oilWaterFuelLicks', false);
        newInspectionController.set('emergencyExitExternal', false);
        newInspectionController.set('bonnetsFlapsDoors', false);
        newInspectionController.set('exhaustSmoke', false);
        newInspectionController.set('destinationEquipment', false);
        newInspectionController.set('CCTV', false);
      }
    }
  },

  // Sets 'existing-inspection' controller to existingController variable for future using
  setController: function(controller) {
    this.existingController = controller;
  },
  // Sets 'new-inspection' controller to newInspectionController variable for future using
  setNewInspecctionController: function(controller){
    this.newInspectionController = controller;
  },

  // Fills all inspection variables of 'existing-inspection' controller from needed model
  // for future binding them to check-boxes
  fillController: function(){
    var foundModel = this.foundModel;
    var existingController = this.existingController;

    existingController.set('fleetNumber', foundModel.get('fleetNumber'));
    existingController.set('busDriver', foundModel.get('name'));

    console.log('Fleet NUMBER - ' + existingController.get('fleetNumber'));

    existingController.set('cabWarningDevices', foundModel.get('cabWarningDevices'));
    existingController.set('wipersWashHorn',foundModel.get('wipersWashHorn'));
    existingController.set('demisters',foundModel.get('demisters'));
    existingController.set('mirrors',foundModel.get('mirrors'));
    existingController.set('handBrake',foundModel.get('handBrake'));
    existingController.set('directIndicators',foundModel.get('directIndicators'));
    existingController.set('fireExtinguishers',foundModel.get('fireExtinguishers'));
    existingController.set('floorThreads',foundModel.get('floorThreads'));
    existingController.set('driversSeat',foundModel.get('driversSeat'));
    existingController.set('passengerSeats',foundModel.get('passengerSeats'));
    existingController.set('handPoles',foundModel.get('handPoles'));
    existingController.set('bells',foundModel.get('bells'));
    existingController.set('emergencyExitHammers',foundModel.get('emergencyExitHammers'));
    existingController.set('interiorLights',foundModel.get('interiorLights'));
    existingController.set('TFTScreen',foundModel.get('TFTScreen'));
    existingController.set('wheelchairRamp',foundModel.get('wheelchairRamp'));
    existingController.set('EntranceDoor',foundModel.get('EntranceDoor'));
    existingController.set('stepLights',foundModel.get('stepLights'));
    existingController.set('licenseDiscs',foundModel.get('licenseDiscs'));
    existingController.set('windscreen',foundModel.get('windscreen'));
    existingController.set('exteriorLights',foundModel.get('exteriorLights'));
    existingController.set('wheelsNutsTyres',foundModel.get('wheelsNutsTyres'));
    existingController.set('bodyPanels',foundModel.get('bodyPanels'));
    existingController.set('fuelFilterCup',foundModel.get('fuelFilterCup'));
    existingController.set('oilWaterFuelLicks',foundModel.get('oilWaterFuelLicks'));
    existingController.set('emergencyExitExternal',foundModel.get('emergencyExitExternal'));
    existingController.set('bonnetsFlapsDoors',foundModel.get('bonnetsFlapsDoors'));
    existingController.set('exhaustSmoke',foundModel.get('exhaustSmoke'));
    existingController.set('destinationEquipment',foundModel.get('destinationEquipment'));
    existingController.set('CCTV',foundModel.get('CCTV'));
    existingController.set('date', foundModel.get('date'));
  }
});

