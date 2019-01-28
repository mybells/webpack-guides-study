const path = require('path');

module.exports = {
  mode:'development',
  devtool: 'inline-source-map',//配置这个只能看见ts转成js后的代码，查看ts源代码得在tsconfig.json中sourceMap为true
  entry: './src/TypeScript/index.ts',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  module:{
    rules:[
      {
        test:/\.tsx?$/,
        use:'ts-loader',
        exclude:/node_modules/
      }
    ]
  },
  resolve:{
    extensions:['.tsx','.ts','.js']
  }
};