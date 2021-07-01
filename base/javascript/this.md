# this
> [this练习题](https://juejin.cn/post/6844904083707396109)

- 普通函数的this指向调用它的对象，箭头函数this由外围最近一层非箭头函数决定
- 普通函数是调用时决定，箭头函数是定义时决定
- 严格模式，在全局作用域this指向undefined，非严格模式指向window。
- 把[this练习题](https://juejin.cn/post/6844904083707396109)做一遍就都懂啦～

### 补充题
```js
var length = 10;
function fn() {
  console.log(this.length);
}
 
var obj = {
  length: 5,
  method: function(fn) {
    fn();
    arguments[0]();
  }
};

obj.method(fn, 1) // 10 2
// 传了2个参数fn 和 1哦！！！
```

```js
window.name = 'global';
const obj = {
    name:'obj',
    test: ()=> {
        let name = 'scope';
        console.log(this.name);
    }
}
const test = obj.test;
test(); // global
obj.test(); // global

```
### 错题
7.4，7.5, 7.6, 8.3, 8.4