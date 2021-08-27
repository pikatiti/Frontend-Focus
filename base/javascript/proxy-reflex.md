# Proxy & Reflect

### Proxy
一个 Proxy 对象包装另一个对象并拦截诸如读取/写入属性和其他操作。
没有捕捉器的 proxy 是一个 target 的透明包装器，透明地将操作转发给 target。

```js
// target: 要包装的对象
// handler: 捕捉器, 如get、set等方法
let proxy = new Proxy(target, handler)

let proxy1 = new Proxy(obj, {})
proxy1.name = 'Mike'
// 此处proxy1没有定义set捕捉器，将直接对obj的name进行更改
```
- Object.defineProperty 和 Proxy区别
  - defineProperty是直接修改对象
  - Proxy包装了一层对象，用户可以自定义行为
### Reflect
它提供拦截 JavaScript 操作的方法，提供的方法同Proxy的handler
```js
Proxy instanceof Function // true
Reflect instanceof Function // false
false
```
- Proxy是个函数对象，Reflect是个内置对象，非函数对象。
- Reflect类似一个工具包, 可以简化Proxy的创建 —— 即在创建Proxy的handler时候，可以直接调用Reflect里的方法。

```js
let userProxy = new Proxy(user, {
  get(target, prop, receiver) { // receiver = admin
    return Reflect.get(target, prop, receiver); // (*)
  }
});
```
