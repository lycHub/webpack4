const CleanWebpackPlugin = require('clean-webpack-plugin');
const merge = require('webpack-merge');
const baseConfig = require('./webpack.base');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');

module.exports = merge(baseConfig, {
  mode: 'production',
  output: {
    filename: 'library.js',  // [name] === [id] === 'main'

    // 创建全局变量myLibrary, 并将入口文件暴露出的对象赋给它
    library: 'myLibrary',

    // 指定打包后的内容如何暴露，umd表示通用所有模块定义系统
    libraryTarget: 'umd'
  },
  // devtool: 'cheap-module-source-map',
  module: {
    rules: [{
      test: /\.scss$/,
      use: [MiniCssExtractPlugin.loader, {
        loader: 'css-loader',
        options: {
          importLoaders: 2,
          modules: true
        }
      }, 'postcss-loader', 'sass-loader']
    }]
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: '[name].css',
      chunkFilename: '[id].css',
    }),
    new CleanWebpackPlugin()
  ],
  optimization: {
    minimizer: [new OptimizeCSSAssetsPlugin({})]
  },
  performance: {
    hints: "warning"
  }
});