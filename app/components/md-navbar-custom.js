import Ember from 'ember';
import layout from '../templates/components/md-navbar-custom';

export default Ember.Component.extend({
  tagName: 'nav',
  layout: layout,

  didInsertElement() {
    this._super(...arguments);
    //TODO: is this scheduling necessary?
    this.$(".dropdown-button").dropdown();
    this._setupNavbar();
  },

  _setupNavbar() {
    if(Ember.typeOf(Ember.$('.button-collapse').sideNav) === 'function'){
      this.$('.button-collapse').sideNav({
        closeOnClick: true
      });
    }
  }

  //TODO: Unregister any listeners that $.sideNav() puts in place
  // _teardownNavbar() {
  //
  // }
});
