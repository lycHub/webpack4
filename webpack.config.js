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
          limit: 8192
        }
      }]
    }]
  }
}
