import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

export default Router.map(function() {
  this.resource('inspections', {'path':'/'});
  this.route('new-inspection');
  this.route('existing-inspection');
  this.route('inspections');
  this.route('driver');
});
