const {resolve} = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
  mode: 'development',
   /*
  * entry: {
  *   main: './index.js'  // 入口文件id和文件名（chunks和chunk name）,默认为main
    * }
  * */
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',  // [name] === [id] === 'main'
  },
  devServer: {},
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
    }, {
      test: /\.scss$/,
      use: ['style-loader', {
        loader: 'css-loader',
        options: {
          /* *
            入口引入的[name].scss文件，会依次经过前两个loader
            如果[name].scss里面还依赖了其它scss文件
            那些scss文件会直接走到css-loader,
            这个选项就是指定其它依赖的scss在到达css-loader前要经过几个loader处理
          */
          importLoaders: 2,  // 0 => no loaders (default); 1 => postcss-loader; 2 => postcss-loader, sass-loader
          modules: true
        }
      }, 'postcss-loader', 'sass-loader']
    }]
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      title: 'Hi Webpack',
      template: './index.html',
      meta: {
        'viewport': 'width=device-width, initial-scale=1, shrink-to-fit=no user-scalable=no',
        'apple-touch-fullscreen': 'yes',
      }
    })
  ],
  optimization: {
    // 摇树优化，即标记未被使用并无副作用的export模块，mode: production时默认为true
    usedExports: true
  }
}
