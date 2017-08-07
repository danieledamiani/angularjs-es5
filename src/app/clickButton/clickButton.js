var app = angular.module('app');

app.component('clickButton',  {
  template: '<button ng-click="click()">Click me</button>',
  controller: function(Clicks, $scope) {
    $scope.click = function() {
      Clicks.addClick();
    }
  }
});