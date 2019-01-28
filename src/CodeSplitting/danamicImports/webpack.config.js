const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HTMLWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: {
    index: './src/CodeSplitting/danamicImports/index.js',
  },
  plugins: [
    new CleanWebpackPlugin(['dist']),
    new HTMLWebpackPlugin({
      title: 'Code Splitting'
    }),
    // new webpack.optimize.CommonsChunkPlugin({//webpack4中已移除,
    //   name:'common'// 指定公共 bundle 的名称。webpack.optimize.CommonsChunkPlugin has been removed, please use config.optimization.splitChunks instead.
    // })
  ],
  output: {
    filename: '[name].bundle.js',
    chunkFilename:'[name].bundle.js',
    path: path.resolve(__dirname, 'dist')
  }
};