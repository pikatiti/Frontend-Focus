# ES9
> [ECMAScript® 2018 Language Specification](https://262.ecma-international.org/9.0/)

第 9 版，即ECMAScript 2018、ES2018、ES9
以下只关注常见的一些新特性～

### 异步迭代for-await-of
for...of: 遍历同步的 [Iterator](/base/javascript/iterate.md)

for await...of: 可遍历异步、同步的 Iterator(一般用于异步)

### Promise.prototype.finally
实现见[Promise](../codeWriting/promise.md)

### 扩展运算符‘...’
原先三个点（...）展开符仅用于数组，此版本扩展运算符支持普通对象

### 其他
- 四个正则新特性
  - Regular expression reverse (look behind) assertion (this article)
  - Regular expression Unicode escape.
  - Regular expression s/dotAll mode.
  - Regular expression named capture group.

