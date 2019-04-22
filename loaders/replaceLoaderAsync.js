const { getOptions } = require('loader-utils');
module.exports = function(source) {
  const callback = this.async();
  setTimeout(() => {  // 会影响打包时间
    const options = getOptions(this);
    const result = source.replace('webpack', options.name || 'webpack4');
    callback(null, result); // 这里实际还是调用了this.callback()
  }, 1000);
}