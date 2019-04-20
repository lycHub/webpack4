const CleanWebpackPlugin = require('clean-webpack-plugin');
const merge = require('webpack-merge');
const baseConfig = require('./webpack.base');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const WorkboxPlugin = require('workbox-webpack-plugin');

module.exports = merge(baseConfig, {
  mode: 'production',
  output: {
    filename: '[name].[contenthash:10].js',  // [name] === [id] === 'main'
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
    new CleanWebpackPlugin(),
      /*
          这里也可以使用 WorkboxPlugin.InjectManifest({}) 配置
          但是需要 配置 swSrc 指明模板 service-worker 文件
          WorkboxPlugin.GenerateSW({}) 可以直接生成 service-worker 文件
        */
      new WorkboxPlugin.GenerateSW({
        skipWaiting: true, // 强制等待中的 Service Worker 被激活
        clientsClaim: true, // Service Worker 被激活后使其立即获得页面控制权
       
    })
  ],
  optimization: {
    minimizer: [new OptimizeCSSAssetsPlugin({})]
  },
  performance: {
    hints: "warning"
  }
});