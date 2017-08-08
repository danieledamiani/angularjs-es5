var app = angular.module('app');

app.component('titleApp', {
  template: '<span>Number of clicks so far: {{clicks()}}</span>',
  controller: function(Clicks, $scope) {
    $scope.clicks = function() {
      return Clicks.getClicks();
    }
  }
});