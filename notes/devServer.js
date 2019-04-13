devServer = {
  /*
   * 告诉服务器从哪里提供内容, 一般用于提供提供静态文件
   * contentBase: resolve(__dirname, 'bundles'),
   * */
  
  /*
   * 假设服务器运行在 http://localhost:8080 并且 output.filename 被设置为 bundle.js。
   * 默认 publicPath 是 "/"，所以你的包(bundle)可以通过 http://localhost:8080/bundle.js 访问。
   *
   * 假设publicPath: "/assets/"
   * 现在服务器运行在 http://localhost:8080/assets/
   * 包可以通过 http://localhost:8080/assets/bundle.js 访问。
   * */
  
  /*
   * 热更新：
   * hot: true
   * hotOnly: true(可选)
   * */
  
  historyApiFallback: true // 参考：https://blog.csdn.net/astonishqft/article/details/82762354
}