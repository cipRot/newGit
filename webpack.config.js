var webpack = require('webpack');
var path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin'); //installed via npm
const HtmlWebpackPlugin = require('html-webpack-plugin');

var BUILD_DIR = path.resolve(__dirname, 'src/client/public');
var APP_DIR = path.resolve(__dirname, 'src/client/app');

var config = {
  entry: APP_DIR + '/index.jsx',
  output: {
    path: BUILD_DIR,
    filename: 'bundle.js'
  },
  devtool: "inline-source-map",
  devServer: {
     contentBase: BUILD_DIR,
     index: path.resolve(__dirname, 'src/client/index.html')
  },
  module: {
    rules: [
      { 
          test: /\.jsx?$/, 
          exclude: /node_modules/, 
          loader: "babel-loader", 
          query:
            {
              presets:['react']
          }
      },
      {
          test: /\.less$/,
          use: [{
              loader: "style-loader"
          }, {
              loader: "css-loader", options: {
                  sourceMap: true
              }
          }, {
              loader: "less-loader", options: {
                  sourceMap: true
              }
          }]
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin('public'),
    new HtmlWebpackPlugin({
      title: "Test",
      template: path.resolve(__dirname, 'src/client/index.html'),
      filename: "index.html"
    })
  ]
};

module.exports = config;