const fs = require('fs');
const path = require('path');
const parser = require("@babel/parser");
const traverse = require('@babel/traverse').default;
const babel = require("@babel/core");

function moduleAnalyser(filename) {
  const content = fs.readFileSync(filename, 'utf-8');

  // 代码分析
  const ast = parser.parse(content, {
    sourceType: "module"
  });
  const dependencies = {};
  const dirname = path.dirname(filename);

  // ast: 语法树，将入口文件的内容parse成json格式的对象
  traverse(ast, {
    // 获取ImportDeclaration节点
    ImportDeclaration({node}) {
      const filePath = './' + path.join(dirname, node.source.value);
      dependencies[node.source.value] = filePath;
      // console.log('dependencies :', dependencies);  {'./message': ''./src/message'}
    }
  });
  const { code } = babel.transformFromAst(ast, null, {
    presets: ['@babel/preset-env']
  });
  // console.log('code :', code); 编译后的代码
  return {
    filename, dependencies, code
  }
}

// const moduleInfo = moduleAnalyser('./src/index.js');
// console.log('moduleInfo :', moduleInfo);



// 遍历依赖
function makeDepGraph(entry) {
  const entryModule = moduleAnalyser(entry);
  const graphArr = [entryModule];
  for(const { dependencies } of graphArr) {
    if (dependencies) {
      for(const attr in dependencies) {
        graphArr.push(moduleAnalyser(dependencies[attr]));
      }
    } 
  }
  // console.log('graphArr :', graphArr);
  const graph = {};
  graphArr.forEach(item => {
    graph[item.filename] = {
      dependencies: item.dependencies,
      code: item.code
    }
  });
  return graph;
}

// const graphInfo = makeDepGraph('./src/index.js');
// console.log('graphInfo :', graphInfo);


function generateCode(entry) {
  const graphInfo = JSON.stringify(makeDepGraph('./src/index.js'));
  
  return `
    (function(graph){
      function require(module){
        (function(code){\
          eval(code);
        })(graph[module].code)
      }
      require('${entry}');
    })(${graphInfo});
  `;
}


const code = generateCode('./src/index.js');
