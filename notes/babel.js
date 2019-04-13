/*
 * babel-loader只识别.js文件，
 * @babel/preset-env才是编译语法
 * babel的插件只会转换语法，并不会转换API。
 * 对于ES6的内建功能（如 Promise / Set / Map），
 * 原型链的扩展（Array / Object 等）需要用垫片库（polyfill）来支持。
 * 但是@babel/polyfill会极大增加代码体积
 * */

const presets = [
  ["@babel/env", {
    // 设置打包后的代码将在哪些浏览器运行？只针它们做转化
    targets: {
      edge: "17",
      firefox: "60",
      chrome: "67",
      safari: "11.1",
    },
    
    // 目前@babel/polyfill依赖的core-js@2，需要指定此选项并安装
    corejs: 2,
    
    /*
     * @babel/polyfill会将所有高阶语法转化，这个选项作为优化手段，只转化项目中用到的语法
     *797k => 291k
     * 当useBuiltIns: "usage"时，入口文件就不需要import "@babel/polyfill"了
     * 当useBuiltIns: "entry"时，需要在入口文件里import "@babel/polyfill"一次
     * */
    useBuiltIns: "usage"
  }
  ]
];

module.exports = { presets };