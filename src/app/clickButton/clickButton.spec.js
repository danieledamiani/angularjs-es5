describe('clickButton', function() {
  
  var element = angular.element('<click-button></click-button');
  var addClick = jasmine.createSpy('addClick');
  
  beforeEach(module('app'));

  beforeEach(module(function($provide) {
    $provide.factory('Clicks', function() {
      return {
        addClick: addClick
      }
    });
  }))

  beforeEach(inject(function($rootScope, $compile) {
    var scope = $rootScope.$new();
    var compiledElement = $compile(element)(scope);
    scope.$apply();
  }));

  it('should be defined', function() {
    var button = element.find('button');
    expect(button).toBeDefined();
  });
  
  it('should have a text value', function() {
    var button = element.find('button');
    expect(button.text()).toEqual('Click me');
  });

  it('should call addClick method on Clicks when button is clicked', function() {
    var button = element.find('button');
    button.triggerHandler('click');
    expect(addClick).toHaveBeenCalled();
  });

});