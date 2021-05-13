# 函数柯里化 Curry
> [JavaScript专题之函数柯里化](https://github.com/mqyqingfeng/Blog/issues/42)
> [「前端进阶」彻底弄懂函数柯里化](https://juejin.cn/post/6844903882208837645)——这个柯里化的例子很不错
### 一、概念
#### 1. 柯里化
- 用闭包把参数保存起来，当参数的数量足够执行函数了，就开始执行函数
- 用途：参数复用
- ```js
    function add(a, b) {
        return a + b;
    }
    add(1, 2) // 3

    let addCurry = curry(add);
    addCurry(1)(2) // 3

    // 实际内部实现
    function addCurry(a) {
        return function(b) {
            return a + b
        }
    }

    ```  

### 二、实现
```javascript

function sub_curry(fn) {
    var args = [].slice.call(arguments, 1);
    return function() {
        return fn.apply(this, args.concat([].slice.call(arguments)));
    };
}

function curry(fn, length) {
    // 获取还需要几个参数才开始执行
    length = length || fn.length;

    var slice = Array.prototype.slice;

    return function() {
        if (arguments.length < length) {
            var combined = [fn].concat(Array.from.(arguments).slice());
            return curry(sub_curry.apply(this, combined), length - arguments.length);
        } else {
            return fn.apply(this, arguments);
        }
    };
}
```