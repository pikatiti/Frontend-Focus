# WeakSet & WeakMap

### Set & Map
- Map允许任何类型的Key，普通对象只允许String或Symbol
- Set 是一个“值的集合”（没有键），它的每一个值只能出现一次。
- Map 和 Set提供了很多内置方法
- Map 和 Set都是[可迭代对象](/base/javascript/iterate.md)，普通对象不是。

### WeakSet & WeakMap
- WeakMap key值只能是对象
- WeakSet值只能是对象

```js
const user = {
  name: 'pikatt',
  age: 20
}
const map = new Map()
map.set(user, "...")
user = null
// ⬆因为map还在，所以user不会被回收，map和user都在内存中直至map被回收

const user = {
  name: 'pikatt',
  age: 20
}
const weakmap = new WeakMap()
weakmap.set(user, "...")
user = null
// ⬆user被回收，WeakSet同理
```