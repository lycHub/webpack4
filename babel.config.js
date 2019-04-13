const presets = [
  ["@babel/env", {
      // 设置打包后的代码将在哪些浏览器运行？只针它们做转化
      targets: {
        edge: "17",
        firefox: "60",
        chrome: "67",
        safari: "11.1",
      },
    corejs: 2,
      useBuiltIns: "usage"
    }
  ]
];

module.exports = { presets };