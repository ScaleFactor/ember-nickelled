/* eslint-env node */
'use strict';

module.exports = {
  name: 'ember-nickelled',

  contentFor: function(type, config) {
    var config = config['ember-nickelled'];
    var missionDockId = config && config.missionDockId;

    if (type === 'head' && missionDockId) {
      return "<script>\
        window.NickelledMissionDockSettings = {\
          missionDockId: " + missionDockId + "\
        };\
        (function(){var NickelledMissionDock=window.NickelledMissionDock=NickelledMissionDock||{};NickelledMissionDock.preloadEvents=[];NickelledMissionDock.show=function(){NickelledMissionDock.preloadEvents.push('show')};NickelledMissionDock.hide=function(){NickelledMissionDock.preloadEvents.push('hide')};var loadMD=function(){var s,f;s=document.createElement('script');s.async=true;s.src='https://cdn.nickelled.com/mission-dock.min.js';f=document.getElementsByTagName('script')[0];f.parentNode.insertBefore(s,f);};loadMD();})();\
      </script>"
    }
  }
};
