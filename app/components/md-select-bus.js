import Ember from 'ember';
import layout from '../templates/components/md-select-bus';

export default Ember.Component.extend({
  tagName: 'div',
  layout: layout,
  selectedFleetNumber: null,

// For drop-down select menu -----------------------------

  fleetNumbers: [
    {label: '500', value: '500'},
    {label: '550', value: '550'},
    {label: '750', value: '750'},
    {label: '780', value: '780'},
    {label: '850', value: '850'}
  ],

  actions: {
    setFleetNumber: function () {
      console.log('Inside dorpdown');
      console.log('New value of fleetNumber - ' + this.get('selectedFleetNumber.value'));
    },
    sendAction: function(){
      console.log('inside sendActiion');
      this.sendAction('action');
    }
  },

  // ---------------------------------------------------------
  didInsertElement() {
    console.log('Inside didInsertElement()');
    this._super(...arguments);
    this.$('select').material_select();
  }
});
