import Ember from 'ember';

export default Ember.Controller.extend({
  selectedFleetNumber: null,

  actions: {
    setFleetNumber: function(){
      console.log('Inside dorpdown');
      console.log('New value of fleetNumber - ' + this.get('selectedFleetNumber.value'));
    }
  }
});
