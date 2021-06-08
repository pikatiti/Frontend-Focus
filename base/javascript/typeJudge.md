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
### constructor
```js
({}) instanceof Object // true
```