var _ = require('lodash');
var request = require('request');
var cheerio = require('cheerio');
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
 * urls, read results in parallel. Use bluebird for Promises implemention.
 *
 * @param  {Array of Strings} urls to crawl
 * @return {Promise} it should resolve a Promise containing titles and urls of pages
 * in array e.g. [{url: 'http://foo.bar', title: 'Foo bar'}]
 */
exports.readHitsFromGoogle = function(urls) {

};
