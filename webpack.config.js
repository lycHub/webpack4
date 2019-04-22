const { resolve } = require('path');
const CopyRightPlugin = require('./plugins/copy-right.plugin');

module.exports = {
  mode: 'production',
  entry: './src/index.js',
  module: {
   rules: [
     
   ]
  },
  plugins: [
    new CopyRightPlugin({
      name: 'Madao'
    })
  ]
}