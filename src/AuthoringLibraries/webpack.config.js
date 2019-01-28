var path=require('path')
module.exports={
    mode:'development',
    entry:'./src/AuthoringLibraries/index.js',
    output:{
        path:path.resolve(__dirname,'dist'),
        filename: 'webpack-numbers.js',
        library:'webpackNumbersx',
        libraryTarget:'umd'
    },
    externals:{
        lodash:{
            commonjs:'lodash',
            commonjs2:'lodash',
            amd:'lodash',
            root:'_'
        }
    }
}