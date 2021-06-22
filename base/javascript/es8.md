# ES8
> [ECMAScript® 2017 Language Specification](https://262.ecma-international.org/8.0/)

第 8 版，即ECMAScript 2017、ES2017、ES8
以下只关注常见的一些新特性～

### Async/Await
指路[Async/Await](base/javascript/async-await.md)

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

### 其他
- ShareArrayBuffer和Atomics对象