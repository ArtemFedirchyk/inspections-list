import Ember from 'ember';
import layout from '../templates/components/md-dropdown-custom';

export default Ember.Component.extend({
  tagName: 'div',
  layout: layout,

  didInsertElement() {
    this._super(...arguments);
    this.$(".dropdown-button").dropdown();
  }
});