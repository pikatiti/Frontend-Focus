# 原型链

> [JavaScript深入之从原型到原型链](https://github.com/mqyqingfeng/Blog/issues/2)

### 总结
##### 1. 什么是原型链
图中蓝色的这条线  
![原型链图片](../../media/prototype.png)

- 解释
JS继承只有一种结构: 对象。每个"实例对象"都有一个私有属性(\_\_proto__)指向它的构造函数的原型对象(prototype)。该原型对象也有一个自己的原型对象(\_\_proto__) ，层层向上直到一个对象的原型对象为 null。根据定义，null 没有原型，并作为这个原型链中的最后一个环节。

- 注意1: \[[Prototype]] 和 prototype 的区别
  - [[Prototype]]是对象的内置属性，指向这个对象的原型，可以通过.\_\_ptoto__(已废弃) 或者 Object.getPrototypeOf/Reflect.getPrototypeOf 获取
  - 每函数都有一个prototype熟悉，记住 构造函数 prototype 指向 实例的 \[[Prototype]]就好了。F.prototype.constructor指向自身

##### 2. 什么是原型
- js没有类，原型是用于模拟类的。一个toString方法，只要在原型上定义过一次，就不需要每个实例再重新写一遍。

##### 3. 混淆点
```js
funciton Person() {
  // ⬇ 如Person是类的一个方法，则此处在实例上添加name属性
  this.name = 'Mike'
}

// ⬇ 在原型上添加age属性，实例没有才会往原型上找
Person.prototype.age = 25

// ⬇ getAge是静态方法，Person是个函数也是个对象，getAge是Person对象的方法！
Person.getAge = function() {
  return this.age
} 
const person1 = new Person()
```


```js

Function.prototype.a = () => {
console.log(1);
};
Object.prototype.b = () => {
console.log(2);
};
function A() {}
const a = new A();

a.a();
a.b();
A.a();
A.b();
```
##### 2. [实现一个new](base/codeWriting/new.md)
