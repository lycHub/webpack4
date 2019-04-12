const {resolve} = require('path');

module.exports = {
  mode: 'development',
   /*
  * entry: {
  *   main: './index.js'  // 入口文件id和文件名（chunks和chunk name）,默认为main
    * }
  * */
  entry: './src/index.js',
  output: {
    filename: 'js/[id].js',  // [name] === [id] === 'main'
    
    // 输出目录，必须是绝对路径
    path: resolve(__dirname, 'bundles')
  },
  module: {
    rules: [{
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
  }
}
