var _ = require('lodash');
var request = require('request');
var cheerio = require('cheerio');
var Promise = require('bluebird');

/**
 * Implement this function so that it returns given
 * str in Kebab case
 * http://en.wikipedia.org/wiki/Letter_case#Special_case_styles
 */
exports.kebabify = function(str) {

};

/**
 * Read titles of hits from Google. It should read titles of pages for given urls
 * from Google that are not hosted in everyplay.com or unity3d.com. If there is multiple
 * urls, read result in parallel from Google. Use bluebird for Promises implemention.
 *
 * @param  {Array of Strings} urls to crawl
 * @return {Promise} it should resolve a Promise containing titles and urls of pages
 * in array e.g. [{url: 'http://foo.bar', title: 'Foo bar'}]
 */
exports.readTitlesFromGoogle = function(urls) {

};
