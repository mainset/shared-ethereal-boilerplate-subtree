/* eslint-disable */
var merge = require('webpack-merge');
var path = require('path');

var common = require('./common.config.js');

var rootPath = path.join(__dirname, '..', '..');
/* eslint-enable */

module.exports = merge(common, {
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    port: 8080,
    contentBase: rootPath,
    historyApiFallback: true,
  },
});
