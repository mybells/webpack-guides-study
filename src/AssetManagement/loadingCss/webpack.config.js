const path = require('path');
module.exports = {
  entry: './src/AssetManagement/loadingCss/index.js',
  module: {
    rules: [{
        test: /\.css$/,
        use: [
          { loader: 'style-loader'},
          { loader: 'css-loader'}
        ]
    }]
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
}; 
