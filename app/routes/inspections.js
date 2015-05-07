import Ember from 'ember';

export default Ember.Route.extend({
  model: function(){
    return this.store.find('driver').then(function(drivers){
      return drivers.sortBy('sort');
    });
  }
});
