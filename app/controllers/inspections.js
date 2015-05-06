import Ember from 'ember';

export default Ember.Controller.extend({
  // Declaration of 'existing-inspection' controller for future using inside this controller
  needs: 'existing-inspection',
  dataController: Ember.computed.alias('controllers.existing-inspection'),

  foundModel: undefined,

  actions: {
    findInspectionById: function (inspectionId) {
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
      this.get('dataController').init();
      // Checks if 'existing-inspection' controller instance is present(not equals to NULL) then fills all inspection
      // variables from needed model for future binding them to check-boxes
      if (parent.dataController !== null) {
        parent.fillController();
      }
    }
  },

  // Sets 'existing-inspection' controller to dataController variable for future using
  setController: function(controller) {
    this.dataController = controller;
  },

  // Fills all inspection variables of 'existing-inspection' controller from needed model
  // for future binding them to check-boxes
  fillController: function(){
    var foundModel = this.foundModel;
    var dataController = this.dataController;

    dataController.set('fleetNumber', foundModel.get('fleetNumber'));
    dataController.set('busDriver', foundModel.get('name'));

    console.log('Fleet NUMBER - ' + dataController.get('fleetNumber'));

    dataController.set('cabWarningDevices', foundModel.get('cabWarningDevices'));
    dataController.set('wipersWashHorn',foundModel.get('wipersWashHorn'));
    dataController.set('demisters',foundModel.get('demisters'));
    dataController.set('mirrors',foundModel.get('mirrors'));
    dataController.set('handBrake',foundModel.get('handBrake'));
    dataController.set('directIndicators',foundModel.get('directIndicators'));
    dataController.set('fireExtinguishers',foundModel.get('fireExtinguishers'));
    dataController.set('floorThreads',foundModel.get('floorThreads'));
    dataController.set('driversSeat',foundModel.get('driversSeat'));
    dataController.set('passengerSeats',foundModel.get('passengerSeats'));
    dataController.set('handPoles',foundModel.get('handPoles'));
    dataController.set('bells',foundModel.get('bells'));
    dataController.set('emergencyExitHammers',foundModel.get('emergencyExitHammers'));
    dataController.set('interiorLights',foundModel.get('interiorLights'));
    dataController.set('TFTScreen',foundModel.get('TFTScreen'));
    dataController.set('wheelchairRamp',foundModel.get('wheelchairRamp'));
    dataController.set('EntranceDoor',foundModel.get('EntranceDoor'));
    dataController.set('stepLights',foundModel.get('stepLights'));
    dataController.set('licenseDiscs',foundModel.get('licenseDiscs'));
    dataController.set('windscreen',foundModel.get('windscreen'));
    dataController.set('exteriorLights',foundModel.get('exteriorLights'));
    dataController.set('wheelsNutsTyres',foundModel.get('wheelsNutsTyres'));
    dataController.set('bodyPanels',foundModel.get('bodyPanels'));
    dataController.set('fuelFilterCup',foundModel.get('fuelFilterCup'));
    dataController.set('oilWaterFuelLicks',foundModel.get('oilWaterFuelLicks'));
    dataController.set('emergencyExitExternal',foundModel.get('emergencyExitExternal'));
    dataController.set('bonnetsFlapsDoors',foundModel.get('bonnetsFlapsDoors'));
    dataController.set('exhaustSmoke',foundModel.get('exhaustSmoke'));
    dataController.set('destinationEquipment',foundModel.get('destinationEquipment'));
    dataController.set('CCTV',foundModel.get('CCTV'));
  }
});

