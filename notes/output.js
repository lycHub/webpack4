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
    publicPath: '//bootstrap.cdn.com'
}