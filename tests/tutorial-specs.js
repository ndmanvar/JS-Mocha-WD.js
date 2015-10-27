var makeSuite = require('./helpers').makeSuite;

makeSuite('Enter a value in the search field', function() {

  it('should enter a value in the search field', function(done) {
    browser
      .notify(done);
  });

});