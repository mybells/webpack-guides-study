const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const webpack = require('webpack');
module.exports = {
    mode: "production", //移除标记的模块
    entry: {
        app: './src/TreeShaking/index.js',
    },
    devServer: {
        contentBase: './dist',
        hot: true
    },
    optimization: {
        namedModules: true //浏览器控制台可以看到哪个文件修改
    },
    plugins: [
        new CleanWebpackPlugin(['dist']),
        new HtmlWebpackPlugin({
            title: 'TreeShaking'
        }),
        // new webpack.NameModulesPlugin(),//webpack4中已移除
        new webpack.HotModuleReplacementPlugin()
    ],
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist')
    }
};