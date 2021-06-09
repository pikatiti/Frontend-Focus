# 类型判断
### typeof
原始类型中除了null返回"object"，其他均能正常识别
引用类型中除了Function返回"function"，其他均返回"object"

|类型|结果|
|--|--|
|Undefined|"undefined"|
|Boolean|"boolean"|
|Number|"number"|
|BigInt|"bigint"|
|String|"string"|
|Symbol|"symbol"|
|Null|"object"|
|Function 对象|"function"|
|其他任何对象|"object"|

### instanceof
```js
({}) instanceof Object // true
```
>The instanceof operator tests to see if the prototype property of a constructor appears anywhere in the prototype chain of an object. The return value is a boolean value. 

格式 ```A instanceof B```
B是一个构造函数
检测B的prototype是否出现在A的原型链中
原始类型无法判断
### constructor
```js
arr = new Array()
arr.constructor === Array // true
```
arr实例对象没有constructor，沿着原型链向上找到原型arr.\_\_proto__( 即\[[prototype]] )的constructor，具体参照[原型链](./prototypeChain.md)中的图～
原始类型无法判断

### Object.prototype.toString
```js
// 返回'[Object' + 类型 + ']'
Object.prototype.toString.call(1) // "[object Number]"
Object.prototype.toString.apply(1) // "[object Number]"
Object.prototype.toString.bind(1)() // "[object Number]"

Object.prototype.toString.call(null) // "[object Null]"
Object.prototype.toString.call(undefined) // "[object Undefined]"

```
toString是Object原型上的一个方法，通过call、apply、bind来改变toString方法上下文

### 总结
- 基础类型，除了null以外，使用typeof
- 引用类型判断是否是某个原型的实例用instanceof或者constructor
- 通用的，判断具体类型用Object.prototype.toString
