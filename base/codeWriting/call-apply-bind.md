# Call、Apply、Bind
> [JavaScript深入之call和apply的模拟实现](https://github.com/mqyqingfeng/Blog/issues/11)
> [JavaScript深入之bind的模拟实现](https://github.com/mqyqingfeng/Blog/issues/12)
### 一、Call
```javascript
Function.prototype.call2 = function (context, ...args) {
    context = context || window // context为null时指向window
    context.__fn__ = this // 获取调用call的函数，及func
    let result = context.__fn__(...args)
    delete context.__fn__
    return result
}

func.call2(obj, name, age)
```

### 二、Apply
```javascript
Function.prototype.apply2 = function (context, arr) {
  context = context || window
  context.__fn__ = this // 获取调用 call 的函数
  let result;
  if (!arr)	{
    result = context.__fn__()
  } else {
    result = context.__fn__(...arr)
  }
  delete context.__fn__
  return result
}
```

### 三、Bind
```javascript
Function.prototype.bind2 = function (context) {
  let self = this;
  // 在bind的传入参数
  let args = Array.from(arguements).slice(1)
  return function () {
    // 在bind返回函数的传入参数
    let bindArgs = Array.from(arguements).slice()
    return self.apply(context, args.concat(bindArgs));
  }
}
```