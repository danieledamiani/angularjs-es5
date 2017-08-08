var app = angular.module('app');

app.factory('Clicks', function() {
  var numberOfClicks = 0,
    events = [];
  
  function addClick(evt) {
    events.push(evt);
    numberOfClicks++;
  }

  function getClicks() {
    return numberOfClicks;
  }
  
  function getEvents() {
    return events;
  }

  return {
    addClick: addClick,
    getClicks: getClicks,
    getEvents: getEvents
  }
});