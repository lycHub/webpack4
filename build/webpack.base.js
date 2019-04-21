const HtmlWebpackPlugin = require('html-webpack-plugin');
const { resolve } = require('path');

const config = {
  entry: {
    main: resolve(__dirname, '../src/pages/main/main.js'),
    list: resolve(__dirname, '../src/pages/list/list.js'),
    detail: resolve(__dirname, '../src/pages/detail/detail.js')
  },
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
  plugins: [],
  
   optimization: {
     splitChunks: {
       chunks: 'all'
     }
   },
  
  performance: {
    hints: false  // 不展示警告或错误提示。
  }
};

config.plugins = config.plugins.concat(makeHtmlPlugins(config.entry));


module.exports = config;


function makeHtmlPlugins(entry) {
  const plugins = [];
  Object.keys(entry).forEach(item => {
    plugins.push(new HtmlWebpackPlugin({
      title: item,
      template: resolve(__dirname, `../src/pages/${item}/${item}.html`),
      filename: item + '.html',
      chunks: [item]
    }))
  });
  return plugins;
}