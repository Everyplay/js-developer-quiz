var _ = require('lodash');
var util = require('util');
var request = require('request');
var Promise = require('bluebird');

/**
 * Implement this function so that it returns given
 * str in Kebab case ignoring non-alphanumeric characters
 * http://en.wikipedia.org/wiki/Letter_case#Special_case_styles
 */
exports.kebabify = function(str) {

};

/**
 * Read titles & urls of hits from Google. It should omit pages
 * hosted in everyplay.com or unity3d.com (or their subdomains). If there is multiple
 * queries, read results in parallel. Use bluebird for Promises implemention.
 *
 * @param  {Array of Strings} queries to search
 * @return {Promise} it should resolve a Promise containing titles and urls of pages
 * in array e.g. [{url: 'http://foo.bar', title: 'Foo bar'}]
 */
exports.readHitsFromGoogle = function(queries) {
  // Note this API_KEY is rate limited so you might need to create one
  // for yourself if quota exceeds
  var API_KEY = 'AIzaSyCdnk8qEX5LereKxKtOgyIhC-eOf1uEqaM';
  var CSE_ID = '011951793078425431577:mh87sceyea8';
  var API_URL = 'https://www.googleapis.com/customsearch/v1?key=%s&cx=%s&q=%s';
};
