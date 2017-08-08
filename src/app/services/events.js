var app = angular.module('app');

app.service('Events', function(Clicks) {
  function extractTimeStamps(events) {
    var times = [];

    for(var i = 0; i < events.length; i++) {
      times.push(Math.floor(events[i].timeStamp));
    }
    return times;
  }
  
  this.getTimeStamps = function() {
    return extractTimeStamps(Clicks.getEvents());
  }
});