# 循环遍历
> https://segmentfault.com/q/1010000006658882
### 一、常见Array遍历
|方法|返回|
|--|--|
|map|新数组|
|filter|新数组|
|forEach|undefined|
|reduce|取决于传入函数|
|some|有一个元素满足返回true|
|every|所有元素都满足返回true|
|find|存在——>该元素，不存在——>undefined|
|findIndex|存在——>该元素索引，不存在——>-1|

- forEach中不能使用continue和break，return 可以实现类似continue的效果，要想类似break中断循环，需要throw error，map、filter等同理。
- 网上面试题会有map、forEach等能否中断的问题，主要是理解传给map等函数的是一个“callback函数”，return、break、continue都是对这个函数进行的！

### 二、常见Object遍历
- Object.entries
- Object.keys

```js
obj = {
  a: 10,
  b: 11
}
Object.entries(obj) // [["a", 10], ["b", 11]]
Object.keys(obj) // ["a", "b"]

```
### 三、通用遍历
- while、do...while、for、for...in...、for...of

#### (一)、for...in、for...of相关问题
##### 1. for in
> The for...in statement iterates over all **enumerable properties(可枚举属性)** of an **object** that are **keyed by strings** (ignoring ones keyed by Symbols), including inherited enumerable properties.
- 遍历的东西是“对象”的属性，即key
- key值: 对象的key可以是string或Symbol，for in不遍历Symbol类型的key
- 遍历顺序: 整数属性会被进行排序，其他属性则按照创建的顺序显示[详情](https://zh.javascript.info/object#forin-xun-huan)
  - 整数属性: Number(string) 和 string 一样的属性，如45是整数属性，+45、1.2都不是整数属性
- 可枚举属性: 内部 “可枚举” 标志设置为 true 的属性，直接的赋值和属性初始化的属性，该标识值默认为即为 true，对于通过 Object.defineProperty 等定义的属性，该标识值默认为 false
##### 2. for of
> for...of语句在**可迭代对象**上创建一个迭代循环，调用自定义的迭代钩子，并为对象的每个不同属性的值执行语句
- 可迭代对象
##### 2. 为什么有了 for in , 还需要 for of
##### 3. 为什么 for in 里会把原型属性也打印出来
##### 4. 为什么 for of 可以断开循环
