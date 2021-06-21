# 迭代器 & 生成器
>[MDN迭代协议](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Iteration_protocols)
>[Iterable object](https://zh.javascript.info/iterable)
### 迭代器
迭代协议分为: **可迭代协议** 和 **迭代器协议**。
##### 可迭代协议
> 允许JS对象定制自身的迭代行为。

> 要成为**可迭代对象**, 该对象必须实现<strong>@@iterator</strong>方法，即该对象或者该对象原型链上的某个对象必须有一个key为@@iterator的属性，这个属性可以通过**Symbol.iterator**访问

##### 迭代器协议
> 定义了产生一系列值的标准方式。当值为有限个时，所有的值都被迭代完毕后，则会返回一个默认返回值。
其实就是定义了next()的返回格式——什么是next见下“理解”

##### 需要可迭代对象的语法
- for of
- 展开语法: 在数组或函数参数中使用展开语法时
- yield*——详见下属“generator”
- Array.from: 接受一个可迭代或类数组的值，返回一个新数组
- ...

##### 理解
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

### 生成器
##### 相关概念
迭代器：指迭代器对象，一个有 next 方法的对象。
生成器函数(Generator Function)：function*定义的函数，调用的时候不会运行代码，它返回一个**Generator**对象。
生成器(Generator Object)：指生成器对象，生成器函数返回的东西，即Generator对象。
生成器即是一个迭代器——有next方法，又是一个可迭代对象——有Symbol.iterator方法
个人理解：Generator Function创建的Generator Object是一个特殊的Iterator Object，感觉类似于Iterator Object的改进版，然后给改进版换了个新名字，类似扫把和扫地机器人的区别～

##### 代码实现
```js
// 上述迭代器可以改写为
obj[Symbol.iterator] = function*() {
  for(let i = 0; i < Object.keys(this).length; i++) {
    const key = Object.keys(this)[i]
    yield this[key]
  } 
}

// 此时 obj[Symbol.iterator]() 返回的是一个generator
```

##### yield 和 yield*
> https://zh.javascript.info/generators#generator-zu-he

yield: 用来暂停和恢复一个生成器函数
yield*: 用来指令将执行 委托 给另一个 generator, 主要用于Generator组合
```js
function* generateSequence(start, end) {
  for (let i = start; i <= end; i++) yield i;
}

function* generatePasswordCodes() {
  // 0..9
  yield* generateSequence(48, 57);
  // 实际就是: for (let i = 48; i <= 57; i++) yield i;

  // A..Z
  yield* generateSequence(65, 90);

  // a..z
  yield* generateSequence(97, 122);

}

let str = '';
for(let code of generatePasswordCodes()) {
  str += String.fromCharCode(code);
}
alert(str); // 0..9A..Za..z
```

##### 误区
之前一直以为Promise是Generator的改进，应该是哪里混乱了
现在的理解是：
Generator 是 Iterator的改进
Generator 和 Async/Await都是使用Promise的“载体”
通过Generator + Promise 或者 Async/Await + Promise 可以解决会掉地狱的问题
async/await 是 Generator + Promise 的语法糖～

