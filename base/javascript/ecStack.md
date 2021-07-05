# 执行上下文
> [JavaScript深入之执行上下文栈](https://github.com/mqyqingfeng/Blog/issues/4)
>[JavaScript深入之变量对象](https://github.com/mqyqingfeng/Blog/issues/5)

### 一. 执行上下文
- 当 JavaScript 代码<strong><font color="red">“执行”</font></strong>一段可执行代码(executable code)时，会创建对应的执行上下文(execution context)。
- 可执行代码：全局代码、函数代码、eval代码。
- 理解下列执行上下文栈  
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
- 每个执行上下文，都有三个重要属性：
	- 变量对象(Variable object，VO)
	- 作用域链(Scope chain)
	- this 

### 二. 变量对象
- 存储了在上下文中定义的变量和函数声明。
- 全局上下文的变量对象 —— 全局对象
    - window 对象是浏览器中的全局对象。
    - global 对象是Node中的全局对象。
- 函数上下文的变量对象 —— 一般指活动对象AO
    - 变量对象和活动对象其实是同一个对象，只是处于执行上下文的不同生命周期。
    - 只有活动对象上的各种属性才能被访问。
    - 活动对象在进入函数上下文时刻被创建，它通过函数的 arguments 属性初始化。

### 二. 作用域链
- 查找变量的时候，先查找当前上下文的变量对象，如果没有找到，就会从词法层面的父级上下文的变量对象中查找，一直找到全局上下文的变量对象(全局对象)。这样由多个执行上下文的变量对象构成的链表就叫做作用域链。
- 函数创建：
	- JS是词法作用域，函数的作用域在函数定义的时候就决定了，因为函数有一个内部属性 [[scope]]，函数创建的时候，就会保存所有父变量对象到其中，你可以理解 [[scope]] 就是所有父变量对象的层级链，<font color=red>[[scope]] 并不代表完整的作用域链！</font>
		```js
		function foo() {
			function bar() {
				...
			}
		}
		// 此时作用域链
		foo.[[scope]] = [
			globalContext.VO
		];

		bar.[[scope]] = [
				fooContext.AO,
				globalContext.VO
		];
		```
- 函数激活：
	- 当函数激活，进入函数上下文，创建 VO/AO 后，就会将活动对象添加到作用链的前端。此时才是完整的作用域链
		```js
		Scope = [AO].concat([[Scope]]);
		```

### 三. this
- [this指向问题](base/javascript/this.md)
- [Call、Apply、Bind](base/codeWriting/call-apply-bind.md)


### 四. 执行上下文行为
执行上下文的代码会分成两个阶段进行处理：分析(进入执行上下文)和执行(代码执行)

```js
var scope = "global scope";
function checkscope(){
    var scope = "local scope";
    function f(){
        return scope;
    }
    return f();
}
checkscope();
```

执行过程分析
```js
// 1.执行全局代码，创建全局执行上下文，全局上下文被压入执行上下文栈
ECStack = [
	globalContext
];
// 2.全局上下文初始化
globalContext = {
	VO: [global],
	Scope: [globalContext.VO],
	this: globalContext.VO
}
// 2.初始化的同时，checkscope 函数被创建，保存作用域链到函数的内部属性[[scope]]
checkscope.[[scope]] = [
	globalContext.VO
];
// 3.执行 checkscope 函数，创建 checkscope 函数执行上下文，checkscope 函数执行上下文被压入执行上下文栈
ECStack = [
	checkscopeContext,
	globalContext
];
/* 4.checkscope函数执行上下文初始化：
- 复制函数 [[scope]] 属性创建作用域链，
- 创建活动对象、并初始化
- 将活动对象压入 checkscope 作用域链顶端
*/
// 同时 f 函数被创建，保存作用域链到 f 函数的内部属性[[scope]]
checkscopeContext = {
	AO: {
		...
		f: reference to function f(){}
	},
	Scope: [AO, globalContext.VO],
	this: undefined // this 是在函数执行的时候才确定下来的!
}
// 5.执行 f 函数，创建 f 函数执行上下文，f 函数执行上下文被压入执行上下文栈
ECStack = [
	fContext,
	checkscopeContext,
	globalContext
];
// 6.f 函数执行上下文初始化, 以下跟第 4 步相同：
fContext = {
	AO: {...},
	Scope: [AO, checkscopeContext.AO, globalContext.VO],
	this: undefined // this 是在函数执行的时候才确定下来的!
}
// 7.f 函数执行，沿着作用域链查找 scope 值，返回 scope 值
// 8.f 函数执行完毕，f 函数上下文从执行上下文栈中弹出
// 9.checkscope 函数执行完毕，checkscope 执行上下文从执行上下文栈中弹出
ECStack = [
	globalContext
];
```
