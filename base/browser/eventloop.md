# EventLoop
> https://juejin.cn/post/6844903919789801486
> https://zhuanlan.zhihu.com/p/105903652

- JS是单线程语言，事件循环是实现JS非阻塞/异步的一种方式
- JS分为同步任务和异步任务，同步任务在主线程上形成一个执行栈
- 异步任务会由JS主线程通知相应的其他线程执行，执行完成之后会由事件触发线程将回调函数注册到消息队列
- 当JS主线程执行完同步任务执行栈之后，事件触发线程会从消息队列取出头部任务加入到执行栈。
- 这样形成的循环叫做事件循环

- 宏任务：script(整体代码)、setTimeout, setInterval、IO操作等
- 微任务: Promise.then/catch/finally...
- 每执行完一个宏任务，都会清空之后的微任务队列。
- 大概过程：执行同步脚本(宏任务) => 清空微任务队列 => 任务队列出队一个宏任务setTimeout到执行栈被执行 => 清空微任务队列...

- 其他：
  - 异步任务有各自的线程
  - JS引擎线程只执行“执行栈”中的事件
  - 宏任务/微任务 和 异步队列是两个不同纬度的概念。

```js
console.log('start')

setTimeout(function () {
  console.log('event loop2, macrotask')
  new Promise(function (resolve) {
    console.log('event loop2, macrotask continue')
    resolve()
  }).then(function () {
    console.log('event loop2, microtask1')
  })
}, 0)

new Promise(function (resolve) {
  console.log('middle')
  resolve()
}).then(function () {
  console.log('event loop1, microtask1')
  setTimeout(function () {
    console.log('event loop3, macrotask')
  })
})

console.log('end')
```
- 执行同步宏任务：start / middle / end
- 执行微任务：event loop1, microtask1
- 执行任务队列队头同步宏任务：event loop2, macrotask / event loop2, macrotask continue
- 执行微任务：event loop2, microtask1
- 执行任务队列队头同步宏任务：event loop3, macrotask