const { resolve } = require('path');

module.exports = {
  mode: 'production',
  entry: './src/index.js',
  resolveLoader: {
    // loader查找顺序，从左到右
    modules: ['node_modules', './loaders/']
  },
  module: {
   rules: [
     {
      test: /\.js$/,
      use: [
        'replaceLoader',
        {
          loader: 'replaceLoaderAsync',
          options: {
            name: 'MadaoX'
          }
        },
      ]
     }
   ]   
  }
}