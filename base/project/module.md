### 为什么要模块化
- 解决全局变量污染
### export、export default、exports
- commonJS使用exports，即module.exports
- export是es6 Module的
  - export default {} —— import xx form xxx
  - export const xxx  —— import {} from xxx

### 模块化原理
- CommonJS
  - 每个文件就是一个模块，有自己的作用域。里面的函数、变量，都是私有的，其他文件不可见。
  - 每个模块有：require 和 module。require 用来加载某个模块，获取的就是exports导出的值。module指代当前模块，exports是module的一个属性，保存了当前模块要导出的接口或者变量
  - node为了方便，定义了exports指向module.exports，所以我们可以直接写exports.xx = xxx。这个exports可以理解成一个指针，指向module.exports，所以我们不应该使用exports = xxx，这样改变了exports的指向。
  - 那么如果要导出单一的值那？可以用：module.exports = xxx

### es6module对比commonjs
- CommonJS 模块输出的是一个值的拷贝，而ES6 模块输出的是值的引用；
- CommonJS 模块是运行时加载，ES6 模块是编译时输出接口。
- CommonJs 是单个值导出，ES6 Module可以导出多个
- CommonJs 是动态语法可以写在判断里，ES6 Module 静态语法只能写在顶层
- CommonJs 的 this 是当前模块，ES6 Module的 this 是 undefined

commonjs 导出的是 js变量地址的拷贝

JS模块化Commonjs,AMD,CMD规范的了解，以及ES6的模块化跟其他几种的区别，以及出现的意义。
- CommonJS：同步，按顺序加载，最初用于NodeJS
- AMD（requireJS）： 依赖前置，立即加载，异步会有回调，不能按需加载，
- CMD（sea.js）：按需加载，依赖就近
- Es6 和 commonJS
  - es6值的引用，common，值的拷贝
  - es6编译时加载，静态引入，通过导入所有的包后再进行条件获取，只能写在顶层
  - common，运行时加载，动态引入，可以写在判断里
  - commonjs this是当前模块，es6 this是undefined



<!-- - commonJS的require是同步的，Node是服务端，同步读取本地文件也很快。但是浏览器端读取文件还要经过网络请求，所以同步不合适，以此衍生出了AMD，CMD啥的。
es6，编译时加载，静态引入，通过导入所有的包后再进行条件获取，只能写在顶层
- ES6在浏览器和服务端上均适用，而CommonJS只适于服务端
- commonjs this是当前模块，es6 this是undefined -->


### 模块化原理


