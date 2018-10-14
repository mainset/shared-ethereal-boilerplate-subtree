/* eslint-disable */
var merge = require('webpack-merge');
var path = require('path');

var common = require('./common.config.js');

var rootPath = path.join(__dirname, '..', '..');
/* eslint-enable */

module.exports = merge(common, {
  mode: 'production',
});
