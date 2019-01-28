const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HTMLWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode:'development',
  entry: {
    main: './src/Caching/extractingBoilerplate/index.js',
    vendor:[
      'lodash'
    ]
  },
  plugins: [
    new CleanWebpackPlugin(['dist']),
    new HTMLWebpackPlugin({
      title: 'Caching'
    }),
  ],
  optimization:{
    runtimeChunk: {
      name:'manifest'
    },
    splitChunks:{
      name: 'vendor',
      chunks: 'initial'
    },
  },
  output: {
    filename: '[name].[chunkhash].js',
    path: path.resolve(__dirname, 'dist')
  }
};