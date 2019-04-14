const merge = require('webpack-merge');
const baseConfig = require('./webpack.base');

module.exports = merge(baseConfig, {
  mode: 'development',
  output: {
    filename: '[name].js',  // [name] === [id] === 'main'
  },
  devServer: {},
  devtool: 'cheap-module-eval-source-map',
  module: {
    rules: [{
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
  optimization: {
    usedExports: true
  }
});
