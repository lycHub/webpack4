module.exports = class CopyRightPlugin {
  constructor(params) {
    this.name = params.name || 'madao';
    // console.log('params :', params);
  }
  apply(compiler) {
    /*
      compiler.hooks：webpack生命周期
    */

    const that = this;

    // 生成资源到 output 目录前执行, 是个异步钩子
    compiler.hooks.emit.tapAsync('CopyRightPlugin', (compilation, cb) => {
      // compilation.assets  打包后的内容
      // debugger;
      compilation.assets['copyRight.txt'] = {
        source() {
          return 'copyright by ' + that.name
        },
        size() {
          return 30
        }
      }
      cb();
    });
    
    

    // 同步钩子，一个新的编译(compilation)创建后执行，效果同上
    /* compiler.hooks.compile.tap('CopyRightPlugin', compilation => {
      // compilation.assets  打包后的内容
      compilation.assets['copyRight.txt'] = {
        source() {
          return 'copyright by ' + that.name
        },
        size() {
          return 30
        }
      }
    }); */
  }
}