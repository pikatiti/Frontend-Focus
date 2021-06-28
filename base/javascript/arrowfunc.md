# 箭头函数
创建函数的方式: 函数声明、函数表达式、箭头函数表达式
### 函数声明和函数表达式
```js
// 函数声明: 在主代码流中声明为单独的语句的函数。
function square(number) { ... }

// 函数表达式: 在一个表达式中或另一个语法结构中创建的函数。
const square = function(number) { ... };
// 这个也是函数表达式哦！！
(function () { ... })
```
- <font color=red>函数表达式function作为语句的一部分！</font>
- 要注意区分square和square(),square就是个普通的值。
- 代码块的结尾不需要加分号‘;’，像 if { }，for { }，function f { } 等语法结构后面都不用加。
- 函数声明和函数表达式区别——函数声明会提升，函数表达式不会提升，指路[执行上下文栈](base/javascript/ecStack.md)
- 匿名函数属于函数表达式的一种，算是普通函数，不具有箭头函数的特征～

### 箭头函数和普通函数区别

- 没有this、super、arguments、new.target，由外围最近一层非箭头函数决定。不应当用作对象方法，但适合用作类方法。<font color=red>(1)</font>
- call()、apply()、bind()无效<font color=red>(2)</font>
- 不能作为构造函数<font color=red>(3)</font>
- 不能作为生成器函数<font color=red>(4)</font>
- 没有原型<font color=red>(5)</font>


<font color=red>(1): </font>需要通过查找作用域链来确定 this 的值。可以通过rest 参数访问箭头函数的传入参数。没有new 自然没有new target。

```js
class User{
  constructor(){
    console.log('user');
  }
}
class Mike extends User{
  constructor(){
    (() => {
        super();
        console.log(this);
        console.log(arguments);
        console.log(new.target);
    })()
  }
}

new Mike(124)
```
<font color=red>(2): </font>指路[Call、Apply、Bind](base/codeWriting/call-apply-bind.md)

<font color=red>(3): </font>JavaScript 函数有两个内部方法：\[\[Call]] 和 \[\[Construct]]。普通调用执行\[\[Call]]，new调用执行\[\[Construct]]。箭头函数没有\[\[Construct]]。

<font color=red>(4): </font>生成器函数要用function*声明，箭头函数没有function关键字

<font color=red>(5): </font>没有prototype 这个属性，即没有原型，也不能通过super 来访问原型的属性。
