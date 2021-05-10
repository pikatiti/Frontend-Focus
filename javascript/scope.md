# 词法作用域和动态作用域
> [JavaScript深入之词法作用域和动态作用域](https://github.com/mqyqingfeng/Blog/issues/3)


### 总结
##### 1. 重点摘录
- JavaScript 采用的是词法作用域，函数的作用域在函数定义的时候就决定了。
- 与词法作用域相对的是动态作用域，函数的作用域是在函数调用的时候才决定的。  

##### 2. 理解下列输出
```javascript
var value = 1;
function foo() {
  console.log(value);
}
function bar() {
    var value = 2;
    foo();
}
bar(); // 1
```