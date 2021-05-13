# 执行上下文栈
> [JavaScript深入之执行上下文栈](https://github.com/mqyqingfeng/Blog/issues/4)
>[JavaScript深入之变量对象](https://github.com/mqyqingfeng/Blog/issues/5)

### 总结
#### 一. 执行上下文栈
- 当 JavaScript 代码<strong><font color="red">“执行”</font></strong>一段可执行代码(executable code)时，会创建对应的执行上下文(execution context)。
- 可执行代码：全局代码、函数代码、eval代码。
##### 1. 理解下列执行上下文栈  
```javascript
var scope = "global scope";
function checkscope(){
    var scope = "local scope";
    function f(){
        return scope;
    }
    return f;
}
checkscope()();  
  
// 执行上下文栈, 假设这是个完整的js文件
ECStack = []
ECStack.push(globalContext);
ECStack.push(<checkscope> functionContext);
ECStack.push(<f> functionContext);
ECStack.pop();
ECStack.pop();
ECStack.pop();
```  

#### 二. 执行上下文
每个执行上下文都有三个重要属性: 
- **变量对象(Variable object，VO)** ,
- **作用域链(Scope chain)** ,
- **this**  

##### 1. 变量对象
存储了上下文中定义的变量和函数声明
- 全局上下文的变量对象 —— 全局对象
    - window 对象是浏览器中的全局对象。
    - global 对象是Node中的全局对象。
- 函数上下文的变量对象 —— 一般指活动对象AO
    - 变量对象和活动对象其实是同一个对象，只是处于执行上下文的不同生命周期。
    - 只有活动对象上的各种属性才能被访问。
    - 活动对象在进入函数上下文时刻被创建，它通过函数的 arguments 属性初始化。
- 函数定义的三种方式
    - 函数声明: ```function myFunction(a, b) { return a * b } // 函数提升```
    - 函数表达式: ```var x = function (a, b) { return a * b }``` 
    - Function() 构造函数

##### 2. 作用域链
##### 3. this
- this指向问题
- [Call、Apply、Bind](test.md)
##### 4. 执行上下文行为
执行上下文的代码会分成两个阶段进行处理：分析和执行，我们也可以叫做：
- 进入执行上下文
- 代码执行

