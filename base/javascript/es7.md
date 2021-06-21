# ES7
> [ECMAScript® 2016 Language Specification](https://262.ecma-international.org/7.0/)

第 7 版，即ECMAScript 2016、ES2016、ES7
以下只关注常见的一些新特性～

### includes()
验证数组中是否存在某个元素
```js
arr = ['a', 'b', 'c']
// 原来判断‘a’是存在
arr.indexOf('a') !== -1
// 现在判断‘a’是存在
arr.includes('a')
```

### **
等同于Math.pow
```js
Math.pow(2,10) // 1024
2**10 // 1024
```