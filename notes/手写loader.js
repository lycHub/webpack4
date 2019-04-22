const { getOptions } = require('loader-utils');
module.exports = function(source) {

  /* 
    this是webpack的上下文，
    source：打包后的文件内容
    console.log('query:', this.query);  options参数
  */
  const options = getOptions(this);

  // 返回处理后的结果，相当于是打包拦截器
  return source.replace('webpack', options.name || 'webpack4');
}


module.exports = function(source) {
  const options = getOptions(this);
  const result = source.replace('webpack', options.name || 'webpack4');

  this.callback(null, result);  // 效果同上, 可以有第三个和第四个参数返回些其他东西
}


// 一部loader
module.exports = function(source) {
  const callback = this.async();
  setTimeout(() => {  // 会影响打包时间
    const options = getOptions(this);
    const result = source.replace('webpack', options.name || 'webpack4');
    callback(null, result); // 这里实际还是调用了this.callback()
  }, 3000);
}