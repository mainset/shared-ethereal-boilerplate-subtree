/* eslint-disable */
var merge = require('webpack-merge');
var path = require('path');

var common = require('./common.config.js');

var rootPath = path.join(__dirname, '..', '..');
var proxyConfig = require('../proxy');
/* eslint-enable */

module.exports = merge(common, {
  output: {
    filename: 'dist/scripts.js',
  },
  devtool: 'inline-source-map',
  devServer: {
    port: 8080,
    contentBase: rootPath,
    historyApiFallback: true,
    proxy: proxyConfig,
  },
});
