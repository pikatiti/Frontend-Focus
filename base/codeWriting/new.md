# new
> [JavaScript深入之new的模拟实现](https://github.com/mqyqingfeng/Blog/issues/13)  
> [构造器和操作符 "new"](https://zh.javascript.info/constructor-new#gou-zao-qi-mo-shi-ce-shi-newtarget)

### 一、实现及原理
```javascript
_new = () => {
  const Constructor = [].shift.call(arguments) // 相当于arguments.shift()，具体详见arguments章节。
  if (typeof Constructor !== "function") {
    throw new Error("constructor should be a function");
  }

  const obj = {}
  obj.__proto__ = Constructor.prototype
  const ret = Constructor.apply(obj, arguments)
  return ret instanceof Object ? ret : obj
}

let person = _new(User, ...)
```
- 创建一个新对象
- 获取传入的构造函数
- 构造原型链
- 改变构造函数this指向，并执行（为这个this(新对象)添加属性）
- 函数有‘object’类型返回值，则返回；否则，返回新对象

### 二、其他知识点
#### 1. new.target
- 函数内部，可以使用 new.target 属性来检查它是否被使用 new 进行调用了。
- 可以通过 new.target 实现不加new创建对象
  - 不带 "new" —— 返回: undefined
  - 带 "new" —— 返回: function User { ... }

  ```javascript
  function User(name) {
    if (!new.target) {
      return new User(name);
    }
    this.name = name;
  }

  let john = User("John");
  ```

#### 2. return
- 带有对象的 return 返回该对象，在所有其他情况下返回 this。
```javascript
  function User () {
    this.name = 'pikatt'
    return 基础类型 // 返回 this (Boolean | String | Number | null | undefined | Symbol | BigInt)
    return object类型 //  返回 该object
  }
```