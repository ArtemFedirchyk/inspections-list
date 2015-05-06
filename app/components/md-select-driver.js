import Ember from 'ember';
import layout from '../templates/components/md-select-driver';

export default Ember.Component.extend({
  tagName: 'div',
  layout: layout,

  didInsertElement() {
    this._super(...arguments);
    this.$('select').material_select();
  }
});  