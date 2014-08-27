var main = require('./');
var should = require('chai').should();

describe('Tests', function() {
  it('should kebabify a string', function() {
    var testText = 'Hello from Everyplay developers!';
    var kebabified = main.kebabify(testText);
    kebabified.should.equal('hello-from-everyplay-developers');
  });

  it('should read hits', function() {
    var urls = [
      'https://www.google.fi/#q=everyplay',
      'https://www.google.fi/#q=everyplay&start=10'
    ];
    return main
      .readHitsFromGoogle(urls)
      .then(function(hits) {
        // TODO: add tests for these:
        // 1. hits should be an array
        // 2. check that urls are not including everyplay.com or unity3d.com
        // 3. check that first hit is App Store (or whatever is the first hit in Google currently)
      });
  });
});