/*
* 向 webpack 的 compiler 提供提示哪些代码是“纯粹部分”。
* 如果所有代码都不包含副作用，我们就可以简单地将该属性标记为 false，
* 来告知 webpack，它可以安全地删除未用到的 export 导出。
* "sideEffects": false,
*
*
* 如果你的代码确实有一些副作用，那么可以改为提供一个黑名单数组：
* "sideEffects": [
* "@babel/polly-fill",
* "*.scss",
 "./src/some-side-effectful-file.js"
 ]
* */

optimization = {
  /*
  * 摇树优化，即标记未被使用并无副作用的export模块，mode: production时默认为true
  * 在做css代码分隔时，和mini-css-extract-plugin有冲突，
  * 所以sideEffects里一般会设置忽略*.scss
  * */
  usedExports: true
};