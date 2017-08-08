describe('Event service', function() {
  var __Events__ = null,
      fakeGetEvents = jasmine.createSpy('fakeGetEvents');
  
  beforeEach(function() {
    module('app');
    
    module(function($provide) {
      $provide.value('Clicks', {
        getEvents: fakeGetEvents
      });

      fakeGetEvents.and.returnValue([
        {someData: 'abc', timeStamp: 10},  
        {someData: 'abc', timeStamp: 20},  
        {someData: 'abc', timeStamp: 30}
      ]);
    });

    inject(function(Events) {
      __Events__ = Events;
    });
  });

  it('should be defined', function() {
    expect(__Events__).toBeDefined();
    expect(__Events__.getTimeStamps).toEqual(jasmine.any(Function));
  });

  it('should return an array of times', function() {
    var result = __Events__.getTimeStamps();
    var expectedResult = [10, 20, 30];
    expect(result).toEqual(expectedResult);
  });

});