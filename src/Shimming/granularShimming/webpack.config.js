const path = require('path');
const webpack = require('webpack');

module.exports = {
  entry: "./src/Shimming/granularShimming/index.js",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist")
  },
  devServer:{
    openPage:'bundle'
  },
  module: {
    rules: [
      {
        test: require.resolve("./index.js"),
        use: "imports-loader?this=>window"
      }
    ]
  },
  plugins: [
    new webpack.ProvidePlugin({
      //_: 'lodash'
      join: ["lodash", "join"]
    })
  ]
};