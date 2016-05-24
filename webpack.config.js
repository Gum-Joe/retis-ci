// Webpack config
const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {

  // Use client as our root
  context: __dirname + "/client",
  // Entry file
  entry: "./index",
  // Output to /build
  output: {
        path: path.join(__dirname, "build", "js"),
        filename: "bundle.js"
    },
  loaders: [
    { test: /\.js$/, exclude: /node_modules/, loader: "babel-loader" },
    { test: /\.jsx$/, exclude: /node_modules/, loader: "babel-loader" },
    { test: /\.scss$/, loaders: ["style", "css", "sass"] }
  ],
  // Plugins
  plugins: [
    // HTML
    new HtmlWebpackPlugin({
      title: 'Bedel',
      filename: path.join(__dirname, 'views', 'index.html'),
      inject: true
    })
  ]
};
