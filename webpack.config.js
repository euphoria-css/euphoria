const chalk = require('chalk')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const HtmlWebpackHarddiskPlugin = require('html-webpack-harddisk-plugin')
const path = require('path')
const webpack = require('webpack')

// Environment variables
const APP_NAME = 'Euphoria Examples'
const ENV = process.env.NODE_ENV || 'development'

console.log(
  '🔨 ',
  chalk.green('Building with environment'),
  chalk.blue.underline(ENV)
)

const context = path.join(process.cwd(), 'examples')

const webpackConfig = {
  // Context is the location where WebPack looks for application
  // code.
  context,

  // Define the entry point of the application and any dependencies
  // we need to import before loading the application.
  entry: {
    examples: ['babel-polyfill', './index.js'],
  },

  // Define the output (compiled) JavaScript code for the application.
  output: {
    path: process.cwd(),
    filename: '[name].js',
    //publicPath: '/',
  },
  plugins: [
    new ExtractTextPlugin('[name].css'),
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      alwaysWriteToDisk: true,
      filename: 'index.html',
      //title: APP_NAME,
      template: 'template.ejs',
      showErrors: ENV === 'development',
    }),
    new HtmlWebpackHarddiskPlugin(),
  ],
  module: {
    rules: [
      {
        // See .babelrc for configuration settings
        test: /\.js$/,
        exclude: /(node_modules)/,
        loader: 'babel-loader',
        include: context,
      },
    ],
  },
  stats: 'minimal',
  devServer: {
    hot: true,
  },
}

module.exports = webpackConfig
