const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');

module.exports = {
  mode:'development',
  entry: {
    main: './src/Caching/moduleIdentifiers/index.js',
    vendor:[
      'lodash'
    ]
  },
  plugins: [
    new CleanWebpackPlugin(['dist']),
    new HTMLWebpackPlugin({
      title: 'Caching'
    }),
    new webpack.HashedModuleIdsPlugin(),
  ],
  optimization:{
    runtimeChunk: {
      name:'manifest'
    },
    splitChunks:{
      name: 'vendor',
      chunks: 'all'
    },
  },
  output: {
    filename: '[name].[chunkhash].js',
    path: path.resolve(__dirname, 'dist')
  }
};