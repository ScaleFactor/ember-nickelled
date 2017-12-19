import Ember from 'ember';

export default Ember.Route.extend({
  nickelled: Ember.inject.service('nickelled'),
  beforeModel() {
    let nickelled = this.get('nickelled');
    nickelled.setUserId('1233');
    nickelled.show();
  }
});
