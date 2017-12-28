const chalk = require('chalk')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const HtmlWebpackHarddiskPlugin = require('html-webpack-harddisk-plugin')
const path = require('path')
const webpack = require('webpack')

// Environment variables
const ENV = process.env.NODE_ENV || 'development'

console.log(
  '🔨 ',
  chalk.green('Building with environment'),
  chalk.blue.underline(ENV)
)

const ROOT = path.join(process.cwd(), 'docs')

const webpackConfig = {
  // Context is the location where WebPack looks for application
  // code.
  context: ROOT,

  // Define the entry point of the application and any dependencies
  // we need to import before loading the application.
  entry: ['babel-polyfill', './index.js'],

  // Define the output (compiled) JavaScript code for the application.
  output: {
    path: ROOT,
    filename: '[name].js',
    //publicPath: '/',
  },
  plugins: [
    new ExtractTextPlugin('[name].css'),
    new webpack.EnvironmentPlugin(['NODE_ENV']),
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      alwaysWriteToDisk: true,
      filename: 'index.html',
      template: 'template.ejs',
      showErrors: ENV === 'development',
      NODE_ENV: ENV,
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
        include: ROOT,
      },
    ],
  },
  stats: 'minimal',
  devServer: {
    hot: true,
    overlay: true,
  },
}

if (ENV === 'production') {
  // webpackConfig.plugins.push(new webpack.optimize.UglifyJsPlugin())
}

module.exports = webpackConfig
