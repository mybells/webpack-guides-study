const path = require('path');
const webpack = require('webpack');

module.exports = {
  entry: "./src/Shimming/globalExports/index.js",
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
                     test: require.resolve('./globals.js'),
                     use: 'exports-loader?file,parse=helpers.parse'
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