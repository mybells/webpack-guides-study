const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const webpack = require('webpack');
module.exports = {
    devtool: 'inline-source-map',
    entry: {
        app: './src/HotModuleReplacement/hmrWithStyle/index.js',
    },
    devServer: {
        contentBase: './dist',
        hot: true
    },
    optimization: {
        namedModules: true //浏览器控制台可以看到哪个文件修改
    },
    module: {
        rules: [{
            test: /\.css$/,
            use: ['style-loader', 'css-loader']
        }]
    },
    plugins: [
        new CleanWebpackPlugin(['dist']),
        new HtmlWebpackPlugin({
            title: 'HotModuleReplacement'
        }),
        // new webpack.NameModulesPlugin(),//webpack4中已移除
        new webpack.HotModuleReplacementPlugin()
    ],
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist')
    }
};