var path=require('path');
module.exports={
    mode:'development',
    entry:{
        main:'./src/AuthoringLibraries/example/index.js'
    },
    output:{
        path:path.resolve(__dirname,'dist'),
        filename: '[name].bundle.js',
    },
    devServer: {
        openPage:'main.bundle'//应该配置devServer.publicPath，不过如果未配置，他会自动使用output.path设置
    },
}