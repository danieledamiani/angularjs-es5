describe('Clicks service', function() {

  var __Clicks__ = null;
  beforeEach(module('app'));

  beforeEach(angular.mock.inject(function(Clicks) {
      __Clicks__ = Clicks; 
    }) 
  );

  it('should return an instance of Clicks factory', function() {
    expect(__Clicks__).toBeDefined();
    expect(__Clicks__.getClicks).toEqual(jasmine.any(Function));
    expect(__Clicks__.addClick).toEqual(jasmine.any(Function));
  });

  it('should return the right number of clicks', function() {
    expect(__Clicks__.getClicks()).toEqual(0);
    __Clicks__.addClick();
    expect(__Clicks__.getClicks()).toEqual(1);
  });

});