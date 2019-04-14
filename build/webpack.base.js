const HtmlWebpackPlugin = require('html-webpack-plugin');
const { resolve } = require('path');

module.exports = {
  entry: resolve(__dirname, '../src/index.js'),
  module: {
    rules: [{
      test: /\.js$/,
      exclude: /node_modules/,
      loader: 'babel-loader'
    }, {
      test: /\.(gif|jpg|jpeg|png|svg)$/,
      use: [{
        loader: "url-loader",
        options: {
          limit: 801920,    // 801kb
          name: '[name].[hash:8].[ext]',
          outputPath: 'images/'
        }
      }]
    }]
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Hi Webpack',
      // template: '../index.html',
      template: resolve(__dirname, '../index.html'),
      meta: {
        'viewport': 'width=device-width, initial-scale=1, shrink-to-fit=no user-scalable=no',
        'apple-touch-fullscreen': 'yes',
      }
    })
  ],
  
   optimization: {
     splitChunks: {
       chunks: 'all'
     }
   },
  
  performance: {
    hints: false  // 不展示警告或错误提示。
  }
}
