const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: './src/js/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    rules: [{
      test: /\.js/,
      exclude: /node_modules/,
      use: 'jshint-loader'
    },{
      test: /\.html$/i, 
      loader: 'html-loader'
    }]
  },
  plugins : [
    new HtmlWebpackPlugin({
      title: 'Custom template',
      template: './src/index.html'
    })
  ]  
};