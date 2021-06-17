# 迭代器
>[MDN迭代协议](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Iteration_protocols)
>[Iterable object](https://zh.javascript.info/iterable)
### 迭代协议
迭代协议分为: **可迭代协议** 和 **迭代器协议**。
#### 可迭代协议
> 允许JS对象定制自身的迭代行为。

> 要成为**可迭代对象**, 该对象必须实现<strong>@@iterator</strong>方法，即该对象或者该对象原型链上的某个对象必须有一个key为@@iterator的属性，这个属性可以通过**Symbol.iterator**访问

#### 迭代器协议
> 定义了产生一系列值的标准方式。当值为有限个时，所有的值都被迭代完毕后，则会返回一个默认返回值。
其实就是定义了next()的返回格式——什么是next见下“理解”

#### 理解
- 只有可迭代对象才能参与for of等迭代遍历。
- 类似Array、Map等本身就内置了Symbol.iterator方法，所以本身就是可迭代对象。自定义的对象没有Symbol.iterator方法，如果要参与for of循环，就得自定义Symbol.iterator方法。
- for of 循环启动时，会调用Symbol.iterator方法(没找到就报错), 该方法返回一个迭代器 —— **一个有 next 方法的对象。**
- for of的循环实际上就是不停地在调用next()
- next的返回格式是：{done: Boolean, value: any}, 当 done=true 时，表示迭代结束，否则 value 是下一个值。

```js
// 自定义一个迭代器
let obj = {
  a: 'aa',
  b: 'bb',
  c: 'cc'
}

obj[Symbol.iterator] = function () {
  const parentThis = this
  return {
    currentIdx: 0,
    next: function() {
      const totalLength = Object.keys(parentThis).length
      const values = Object.values(parentThis)
      if(this.currentIdx < totalLength) {
        return {done: false, value: values[this.currentIdx++]}
      } else {
        return {done: true}
      }
    }
  }
}

const iterator = obj[Symbol.iterator]()
console.log('test :>> ', iterator.next()) // { done: false, value: 'aa' }
console.log('test :>> ', iterator.next()) // { done: false, value: 'bb' }
console.log('test :>> ', iterator.next()) // { done: false, value: 'cc' }
console.log('test :>> ', iterator.next()) // { done: true }
console.log('test :>> ', iterator.next()) // { done: true }

for (let i of obj) { // 实际上就是在不停调用next，直至{ done: true }
  console.log('i :>> ', i)
}
/** 
i :>>  aa
i :>>  bb
i :>>  cc
**/

```
