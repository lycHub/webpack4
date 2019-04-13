consele.log('aaa');

/*
浏览器报错会默认指向编译后，运行在浏览器上的文件
* source-map则会将错误指向源文件。
* source-map会为每个js都生成一个对应的.map文件
*
* inline-*:
*   这个前缀会吧映射关系直接写在对应的js文件里，不会单独生成.map
*
* cheap-*:
*   source-map特性：
*     *默认会提示错误代码的精确位置（某文件的某行某列），
*     *会映射入口文件及其引入的其它依赖
*   加上cheap前缀就只会提示到某行，并且只管入口文件
*
*   如果用了cheap前缀，又想映射其它依赖，需要在加上module(cheap-module)
*
*
*   推荐：
*     开发环境：cheap-module-eval-source-map
*     生产环境：cheap-module-source-map
* */