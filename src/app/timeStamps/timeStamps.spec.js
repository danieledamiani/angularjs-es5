describe('TimeStamps', function() {
  var element = angular.element('<time-stamps></time-stamps');
  var timeStamps = [10, 20, 30];
  
  beforeEach(module('app'));

  beforeEach(module(function($provide) {
    $provide.factory('Events', function() {
      return {
        getTimeStamps: function() {return timeStamps;}
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
  
  it('should render a series of values', function() {
    var title = element.find('span');
    expect(title.text()).toEqual(' 10  20  30 ');
  });
});