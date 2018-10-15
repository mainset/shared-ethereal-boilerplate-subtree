/* eslint-disable */
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var path = require('path');

var babelConfig = require('../../babel.config');

var rootPath = path.join(__dirname, '..', '..');
/* eslint-enable */

module.exports = {
  mode: JSON.stringify(process.env.NODE_ENV),
  entry: [
    '@babel/polyfill',
    path.join(rootPath, 'src/main.js'),
  ],
  output: {
    path: path.join(rootPath, 'public'),
  },
  module: {
    rules: [
      {
        test: /.js?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: babelConfig,
      },
    ],
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify(process.env.NODE_ENV),
      },
    }),
    new HtmlWebpackPlugin({ template: path.join(rootPath, 'src/index.template.html') }),
  ],
};
