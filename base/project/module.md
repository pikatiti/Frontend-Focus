export 和export default


延迟加载（在组件渲染的时候，再去加载该组件）


JS模块化Commonjs,AMD,CMD规范的了解，以及ES6的模块化跟其他几种的区别，以及出现的意义。
- CommonJS：同步，按顺序加载，最初用于NodeJS
- AMD（requireJS）： 依赖前置，立即加载，异步会有回调，不能按需加载，
- CMD（sea.js）：按需加载，依赖就近
- Es6 和 commonJS
  - es6值的引用，common，值的拷贝
  - es6编译时加载，静态引入，通过导入所有的包后再进行条件获取，只能写在顶层
  - common，运行时加载，动态引入，可以写在判断里
  - commonjs this是当前模块，es6 this是undefined