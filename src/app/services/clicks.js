var app = angular.module('app');

app.factory('Clicks', function() {
  var numberOfClicks = 0;
  
  function addClick() {
    numberOfClicks++;
  }

  function getClicks() {
    return numberOfClicks;
  }
  
  return {
    addClick: addClick,
    getClicks: getClicks
  }
});