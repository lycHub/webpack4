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
  
  
  /*
  * 如果是一对多的关系，可用数组
  * proxy: [{
     context: ["/auth", "/api"],
     target: "https://api-m.mtime.cn",
   }]
  * */
  proxy: {
    '/PageSubArea': {
      target: 'https://api-m.mtime.cn',
      changeOrigin: true,
      /*
       * 路径替换，请求的是LocationMovies.api，实际是LocationMovies.api
       * https://api-m.mtime.cn/Showtime/LocationMovies.api
       * 替换成
       * https://api-m.mtime.cn/Showtime/LocationMovies.api
       * */
      pathRewrite: {
        'LocationMovies.api': 'HotCitiesByCinema.api'
      },
  
      // 拦截器
      /* bypass: function(req, res, proxyOptions) {
       if (req.headers.accept.indexOf("html") !== -1) {
       console.log("Skipping proxy for browser request.");
       return "/index.html";
       }
       }*/
    }
  },
  
  /*
  * 当使用 HTML5 History API 时，任意的 404 响应都可能需要被替代为 index.html
  * historyApiFallback: true
  * */
  historyApiFallback: {
    rewrites: [
      // 根路径/ => /views/landing.html
      // /subpage => /views/subpage.html
      { from: /^\/$/, to: '/views/landing.html' },
      { from: /^\/subpage/, to: '/views/subpage.html' },
      { from: /./, to: '/views/404.html' }
    ]
  }
}