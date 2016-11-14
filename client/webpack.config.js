'use strict'

var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  context: `${__dirname}/app`,
  entry: './index.js',
  output: {
    path: `${__dirname}/dist`,
    filename: 'bundle.js'
  },
  module: {
    loaders: [{
      test: /\.less$/,
      loader: 'style!css!less'
    }, {
      test: /\.js$/,
      exclude: /node_modules/,
      loader: "babel",
      query: {
        cacheDirectory: true,
        plugins: ['transform-class-properties', 'transform-decorators-legacy'],
        presets: ['es2015', 'stage-0', 'react']
      }
    }]
  },
  debug: true,
  watch: true,
  devtool: 'cheap-module-eval-source-map',
  plugins: [
    new HtmlWebpackPlugin({
      title: 'index',
      filename: 'index.html',
      template: './index.html',
      inject: true
    })
  ]
}
