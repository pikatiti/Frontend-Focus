# Async/Await
> https://segmentfault.com/q/1010000016147496

1. 搬运[迭代器](/base/javascript/iterate.md)的观点，async/await 是 Generator + Promise解决异步问题的语法糖，而不是generator的语法糖。
2. 本篇前提: 对Promise熟悉, 对事件循环机制熟悉！指路[Promise](base/codeWriting/promise.md)，[事件循环机制]()

### Async/Await 转 Promise
1. Async 函数永远返回一个Promise对象
2. Await 操作符用于等待一个Promise对象

根据以上信息，我们可以得到:Async/Await如何转Promise
- 把 await XXX 转为 new Promise(...)
- 把 async XXX 转为 new Promise(...)

```js
async function async1(){
  console.log('async1')
}
↓↓↓↓↓↓async1↓↓↓↓↓↓↓
function async1(){
  new Promise((resolve, reject) => {
    console.log('async1')
    resolve()
  })
}
```
```js
async function async2(){
  console.log('async2')
}
async function async1() {
  await async2()
  console.log('async1')
}
↓↓↓↓↓↓↓async1↓↓↓↓↓↓
function async1() {
  new Promise((resolve, reject) => {
    console.log('async2')
    resolve()
  }).then(() => {
    console.log('async1')
  })
}
```


### 练习题一
下列的输出结果是啥
```js
async function async1(){
  console.log('async1 start')
  await async2()
  console.log('async1 end')
}
async function async2(){
  console.log('async2')
}

console.log('script start')
setTimeout(function(){
  console.log('setTimeout') 
},0)  
async1();

new Promise(function(resolve){
  console.log('promise1')
  resolve();
}).then(function(){
  console.log('promise2')
}).then(function() {
  console.log('promise3')
})
console.log('script end')
```
答案
```js
script start
async1 start
async2
promise1
script end
async1 end
promise2
promise3
setTimeout
```
题解
```js
// step 1: async2可转换成如下格式
async function async2(){
  console.log('async2')
}
↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓
function async2(){
  new Promise((resolve, reject) => {
    console.log('async2')
    resolve()
  })
}


// step 2: async1可转换成如下格式
async function async1(){
  console.log('async1 start')
  await async2()
  console.log('async1 end')
}
↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓
function async1() {
  console.log('async1 start')
  new Promise((resolve, reject) => {
    console.log('async2')
    resolve()
  }).then(() => {
    console.log('async1 end')
  })
}

// step 3: 按照宏任务微任务去执行
```



### 练习题二
下列的数据结果是啥
```js
async function async1() {
  console.log('async1 start');
  await async2();
  console.log('async1 end');
}

async function async2() {
  console.log('async2 start');
  return new Promise((resolve, reject) => {
    resolve();
    console.log('async2 promise');
  })
}

console.log('illegalscript start');

setTimeout(function() {
  console.log('setTimeout');
}, 0);  

async1();

new Promise(function(resolve) {
  console.log('promise1');
  resolve();
}).then(function() {
  console.log('promise2');
}).then(function() {
  console.log('promise3');
});

console.log('illegalscript end');
```
答案
```js
illegalscript start
async1 start
async2 start
async2 promise
promise1
illegalscript end
promise2
promise3
async1 end
setTimeout
```
题解
```js
// step 1: async2可转换成如下格式
async function async2() {
  console.log('async2 start');
  return new Promise((resolve, reject) => {
    resolve();
    console.log('async2 promise');
  })
}
↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓
function async2(){
  new Promise((resolve, reject) => {
    console.log('async2 start');
    resolve(
      new Promise((resolve, reject) => {
        resolve();
        console.log('async2 promise');
      })
    )
  })
}
↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓
function async2(){
  new Promise((rs, rj) => {
    console.log('async2 start');
    new Promise((resolve, reject) => {
      resolve();
      console.log('async2 promise');
    }).then(() => {
      rs()
    }).catch(() => {
      rj()
    })
  })
}


// step 2: async1可转换成如下格式
async function async1() {
  console.log('async1 start');
  await async2();
  console.log('async1 end');
}
↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓
async function async1() {
  console.log('async1 start');
  new Promise((rs, rj) => {
    console.log('async2 start');
    new Promise((resolve, reject) => {
      resolve();
      console.log('async2 promise');
    }).then(() => {
      rs()               // （*）
    })
  }).then(() => {
    console.log('async1 end');   // （**）
  })
}


// step 3: 按照宏任务微任务去执行
重点：这里有两层微任务，第一层微任务加入的是（*）, 第二层微任务加入的才是（**）
```