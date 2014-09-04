var main = require('./');
var should = require('chai').should();

describe('Tests', function() {
  it('should kebabify a string', function() {
    var testText = 'Hello from Everyplay developers!';
    var kebabified = main.kebabify(testText);
    kebabified.should.equal('hello-from-everyplay-developers');
  });

  it('should read hits', function() {
    var queries = [
      'everyplay'
      'unity3d'
    ];
    return main
      .readHitsFromGoogle(queries)
      .then(function(hits) {
        // TODO: add tests for these:
        // 1. hits should be an array
        // 2. check that urls are not including everyplay.com or unity3d.com
      });
  });
});