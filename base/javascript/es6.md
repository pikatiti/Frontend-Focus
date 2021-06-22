# ES6
> [ECMAScript® 2015 Language Specification](https://262.ecma-international.org/6.0/)
https://zhuanlan.zhihu.com/p/24570791

第 6 版，即ECMAScript 2015、ES2015、ES6
以下只关注常见的一些新特性～

- [let & const](base/javascript/let-const.md)
- [箭头函数](base/javascript/arrowfunc.md)
- 函数参数支持默认值
- 扩展运算符```...```
- 模版语法``` `` ```
- 对象属性
  - 支持简写```{x: x}``` => ```{x}```
  - 属性计算```{['a' + 'b']: x}```
- 解构赋值
  ```js
  // 数组为例，对象同理
  let num = [1, 2, 3];
  let [a, , c] = num
  console.log(a) // 1
  console.log(c) // 3
  ```
- [模块化](base/project/module.md)
- [Class](base/javascript/class.md)
- [迭代器 & 生成器](base/javascript/iterate.md)
- [for of](base/javascript/loop.md)
- [Promise](base/codeWriting/promise.md)
- [Proxy & Reflex](base/javascript/proxy-reflex.md)
- 新增数据类型
  - Symbol类型
  - [WeakMap & WeakSet](base/javascript/set-map.md)
- 新增常见API...





