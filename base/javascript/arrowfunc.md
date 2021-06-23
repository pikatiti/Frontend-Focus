# 箭头函数
创建函数的方式: 函数声明、函数表达式、箭头函数
### 函数声明和函数表达式
```js
// 函数声明: 在主代码流中声明为单独的语句的函数。

function square(number) {
  return number * number;
}

// 函数表达式: 在一个表达式中或另一个语法结构中创建的函数。
const square = function(number) { return number * number; };
// 这个也是函数表达式哦！！
(function () { })
```
- <font color=red>函数表达式function作为语句的一部分，而不是单独的存在</font>
- 要注意区分square和square(),square就是个普通的值。
- 代码块的结尾不需要加分号‘;’，像 if { }，for { }，function f { } 等语法结构后面都不用加。
- 函数声明和函数表达式区别——函数声明会提升，函数表达式不会提升，指路[执行上下文栈](base/javascript/ecStack.md)
- 匿名函数属于函数表达式的一种，算是普通函数，不具有箭头函数的特征～

### 箭头函数和普通函数区别
- 写法不同，更简单
- 没有 this 和 super, <font color='red'>不应该</font>作为对象方法
- 没有arguments 和 new.target
- 不能作为构造函数
- Can not use yield, within its body.
为什么箭头函数不能用作构造函数？

总是指向所在函数运行时的this

