const path = require('path');
const webpack = require('webpack');

module.exports = {
  mode:'development',
  entry: {
    polyfills: "./src/Shimming/loadingPolyfills/polyfills.js",
    index: "./src/Shimming/loadingPolyfills/index.js"
  },
  output: {
    filename: "[name].bundle.js",
    path: path.resolve(__dirname, "dist")
  },
  devServer: {
    // openPage: "index.html"
    contentBase: './src/Shimming/loadingPolyfills/dist',
  },
  plugins: [
    new webpack.ProvidePlugin({
      //_: 'lodash'
      join: ["lodash", "join"]
    })
  ]
};