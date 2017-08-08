var app = angular.module('app');

var buttonTemplate = '<button class="btn btn-default" ng-click="click()">Click me</button>';

app.component('clickButton',  {
  template: buttonTemplate,
  controller: function(Clicks, $scope) {
    $scope.click = function() {
      Clicks.addClick();
    }
  }
});