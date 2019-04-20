output = {
  // contenthash为内容变化就改变
  filename: 'js/[id].[contenthash:10].js',  // [name] === [id] === 'main'
  chunkFilename: 'js/[id].[contenthash:10].js',   // 非入口文件名，比如lodash
    
    // 输出目录，必须是绝对路径
    path: resolve(__dirname, 'bundles'),
    
    /*
     * 默认的外部引用路径是js/*
     * <script type="text/javascript" src="js/main.7de1343fc7.js"></script>
     * 配置publicPath后：
     * <script type="text/javascript" src="//bootstrap.cdn.com/js/main.7de1343fc7.js"></script>
     * */
    publicPath: '//bootstrap.cdn.com',


    // 创建全局变量myLibrary, 并将入口文件暴露出的对象赋给它
    library: 'myLibrary',

    /*
      指定打包后的内容如何暴露
      通过对象属性暴露：
        this:  将库的返回值分配给this对象的由output.library指定的属性。其中this的意义由用户决定
      umd: 通用所有模块定义系统
      参考：https://blog.csdn.net/frank_yll/article/details/78992778
    */
    libraryTarget: 'umd'
}