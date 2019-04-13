/*
* 某js的依赖默认只在当前脚本中生效，
* 比如要用axios时，一定要先import axios.
* ProvidePlugin可以简化这个过程
* */

new webpack.ProvidePlugin({
  $: 'jquery',
  jQuery: 'jquery',
  animate: ['jquery', 'animate'],   // 类似快捷方式：animate === $.animate
  axios: 'axios'
});