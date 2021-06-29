# let & const

### 栈内存 & 堆内存
栈内存: 原始数据类型(基本数据类型)、引用数据类型的指针(引用地址)

堆内存: 引用数据类型的具体内容

### const注意点
- const 声明的时候必须赋值
- const定义的原始数据类型不可改变，但是const定义的引用类型属性可变，因为const只保证栈中的引用地址不变。
那么如何让引用类型不可变呐？

```js
const obj = {
  user: {
    name: 'Mike',
    age: 14
  },
  type: 'apple'
}
// 方法一 Object.freeze: 第一层属性不可修改、删除、添加
Object.freeze(obj)
obj.type = 'orange' // 修改无效，不能修改属性
obj.phone = 1234 // 修改无效，不能添加新属性
obj.user.name = 'Nike' // 修改有效，只能保证第一层属性不可变

// 方法二 Object.seal: 第一层属性不可删除和添加，但是可以修改
// 方法三 Object.preventExtensions: 第一层属性不能添加
```


### 变量提升，函数提升
- JS 中[执行上下文](base/javascript/ecStack.md)的工作方式使得在声明函数和变量之前就可以调用它。
- 只会提升声明，不会提升其初始化，函数和变量相比，会被优先提升。(函数提升的是声明不是表达式，[箭头函数](base/javascript/arrowfunc.md)中提到过声明和表达式的区别)


### let、const 和 var的区别

##### 1. 有块级作用域
- 作用域: 全局作用域、函数作用域。块级作用域
- let & const: 全局作用域、函数作用域。块级作用域。
- var: 全局作用域、函数作用域。
- 块级作用域: {} 内，如for、if，<font color=red><font>
```js
var funcs = [];
for (var i = 0; i < 3; i++) {
  funcs[i] = function () {
      console.log(i);
  };
}
funcs[0](); // 3
```
es5改进
```js
var funcs = [];
for (var i = 0; i < 3; i++) {
  (function (i) {
    console.log(i)
    funcs[i] = function () {
      console.log(i);
    };
  })(i)
}
funcs[0](); // 0
```
es6改进
```js
for (let i = 0; i < 3; i++) {
  funcs[i] = function () {
      console.log(i);
  };
}
```

##### 2. 不会被提升，形成TDZ
- 临时死区(Temporal Dead Zone)，简写为 TDZ。
- let&const声明的变量在进入作用域和被声明之前会形成TDZ，在此期间访问该变量会报错ReferenceError。
```js
(function() {
  // start TDZ for x
  console.log(x); // Uncaught ReferenceError:...
  let x = 'inner value'; // declaration ends TDZ for x
}());
```

##### 3. 重复声明报错

##### 4. 不会在全局声明时创建 window 对象的属性
