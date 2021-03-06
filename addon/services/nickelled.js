import Ember from 'ember';

export default Ember.Service.extend({
  userId: null,
  setUserId(userId) {
    this.set('userId', userId);
    window.NickelledMissionDockSettings['userId'] = userId;
  },
  init() {
    window.NickelledMissionDock._init();
  },
  show() {
    if(this.get('userId')) {
      window.NickelledMissionDock.show();
    }
  },
  hide() {
    if(this.get('userId')) {
      window.NickelledMissionDock.hide();
    }
  }
});