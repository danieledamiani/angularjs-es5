describe('titleApp', function() {
  
  var element = angular.element('<title-app></title-app');
  var numberOfClicks = 4;
  
  beforeEach(module('app'));

  beforeEach(module(function($provide) {
    $provide.factory('Clicks', function() {
      return {
        getClicks: function() {return numberOfClicks;}
      }
    });
  }))

  

  beforeEach(inject(function($rootScope, $compile) {
    var scope = $rootScope.$new();
    var compiledElement = $compile(element)(scope);
    scope.$apply();
  }));

  it('should be defined', function() {
    var title = element.find('span');
    expect(title).toBeDefined();
  });
  
  it('should have a text value', function() {
    var title = element.find('span');
    expect(title.text()).toEqual('Number of clicks so far: ' + numberOfClicks);
  });

});