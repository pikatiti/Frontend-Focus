# ES8
> [ECMAScript® 2017 Language Specification](https://262.ecma-international.org/8.0/)

第 8 版，即ECMAScript 2017、ES2017、ES8
以下只关注常见的一些新特性～

### Object.values/entries/getOwnPropertyDescriptors
```js
obj = {
  a: 10,
  b: 11
}
Object.values(obj) // [10, 11]
Object.entries(obj) // [["a", 10], ["b", 11]]

// getOwnPropertyDescriptors获取一个对象的所有自身属性的描述符。
Object.getOwnPropertyDescriptors(obj)
/**
{
  a: {
    configurable: true
    enumerable: true
    value: 10
    writable: true
  },
  b: {
    configurable: true
    enumerable: true
    value: 11
    writable: true
  }
}
**/
```

### String.prototype.padStart()/padEnd()
字符串填充功能

### Async/Await
- 个人观点，搬运[迭代器](/base/javascript/iterate.md)的观点，async/await 是 Generator + Promise解决异步问题的语法糖，而不是generator的语法糖。



### 其他
- ShareArrayBuffer和Atomics对象