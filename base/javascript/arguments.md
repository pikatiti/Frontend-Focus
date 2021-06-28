# Arguments

arguments是类数组、可迭代对象。

### 类数组定义
> means that arguments has a length property and properties indexed from zero, but it doesn't have Array's built-in methods like forEach() and map().

- arguments存在于任何非箭头函数中，箭头函数访问到的arguments是外部普通函数的。
- arguments不能使用任何数组内建方法

### 类数组 & 真实数组
##### 类数组调用真实数组的方法
```js
Array.prototype.join.call(arguments, ',')
[].join.call(arguments, ',')
[].map.call(arguments, function(item) {
  return item
})
...
```
##### 类数组转真实数组
以下都是浅拷贝的哦
```js
let args = [...arguments]
let args = Array.from(arguments)

[].slice.call(arguments)
...
```


### 注意点！！
现在推荐用rest参数代替arguments
```js
function sum (...args) {
  console.log(args) // [1, 2, 4, 5, 6]
}
sum(1, 2, 4, 5, 6)
```