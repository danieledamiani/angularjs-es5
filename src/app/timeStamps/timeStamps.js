var app = angular.module('app');

function timeStampsController(Events, $scope) {
  $scope.timeStamps = function() {
    return Events.getTimeStamps();
  }
}

var points = '<span ng-repeat="timeStamp in timeStamps() track by $index"> {{timeStamp}} </span>';
var timeStampsTemplate = '<div>' + points +'</div>';

app.component('timeStamps', {
  template: timeStampsTemplate,
  controller: timeStampsController
});