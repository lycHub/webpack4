const fs = require('fs');
const path = require('path');
const parser = require("@babel/parser");
const traverse = require('@babel/traverse').default;

function moduleAnalyser(filename) {
  const content = fs.readFileSync(filename, 'utf-8');

  // 代码分析
  const ast = parser.parse(content, {
    sourceType: "module"
  });
  const dependencies = {};
  const dirname = path.dirname(filename);

  traverse(ast, {
    // 获取ImportDeclaration节点
    ImportDeclaration({node}) {
      const filePath = './' + path.join(dirname, node.source.value);
      dependencies[node.source.value] = filePath;
      console.log('dependencies :', dependencies);  // {'./message': ''./src/message'}
    }
    /* enter(path) {
      if (path.isIdentifier({ name: "n" })) {
        path.node.name = "x";
      }
    } */
  });
}

moduleAnalyser('./src/index.js');