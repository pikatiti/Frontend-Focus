# Webpack 基础
- 主要的功能是打包，但是可以通过loader、plugin来进行打包以外的，如：编译、压缩等其他功能。
- 只能理解 `JavaScript` 和 `JSON` 文件，所以需要借助loader来处理其他类型的文件


##### loader
- 常见loader
  - thread-loader
  - url-loader
  - babel-loader
  - file-loader
##### plugin
- 常见plugin
  - HtmlWebpackPlugin 处理html

模块化原理


### babel原理
- 会通过词法分析/语法分析生成一颗AST，
- 遍历AST，对其进行转换，生成一棵转换后的AST
- 把转换后的AST转为代码

### tree shaking原理
- 清除多余代码方式来优化项目打包体积的技术
- `ES6`以前，我们可以使用`CommonJS`，通过require形式动态引入模块（即可ifelse导入）
- 所以commonjs无法在运行之前确定需要或者不需要哪些模块
- webpack再后来的版本（2）支持了es6module，es6 module是静态导入，需要在开始时倒入所有的包，然后条件获取。这使得tree shaking能给实现。
- 利用es6模块化可以进行静态分析，编译的时候可以创建依赖树，正确判断到底加载了那些模块，删除不必要的模块
- Dead Code从AST（抽象语法树）中删除（所以肯定是先建立一个AST）

### es6module对比commonjs
- es6，编译时加载，静态引入，通过导入所有的包后再进行条件获取，只能写在顶层
- ES6在浏览器和服务端上均适用，而CommonJS只适于服务端
- commonjs this是当前模块，es6 this是undefined

### webpack原理
- 从配置文件/命令中获取并合并参数
- 用这些参数初始化一个Compiler对象，加载配置的插件，然后执行它的run方法
- 编译模块：从入口文件出发,调用所有配置的 Loader 对模块及其依赖进行翻译
- 得到每个模块被翻译后的最终内容以及它们之间的依赖关系。
- 根据entry和模块之间的依赖关系,组装成一个个包含多个模块的 Chunk
- 根据output的文件名和路径输出最后的包