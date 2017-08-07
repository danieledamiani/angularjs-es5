var app = angular.module('app');

app.component('titleApp', {
  template: '<h1>Number of clicks so far: {{clicks()}} </h1>',
  controller: function(Clicks, $scope) {
    $scope.clicks = function() {
      return Clicks.getClicks();
    }
  }
});