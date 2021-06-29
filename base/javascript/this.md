# this
- 只有函数执行的时候才能确定this到底指向谁，普通函数的this指向调用它的对象，箭头函数this由外围最近一层非箭头函数决定
- 严格模式，在全局作用域this指向undefined，非严格模式指向window。

### 刷题刷多了就知道this啦
为了好理解，采用非严格模式，全局作用域this指向window
##### 例1: 基础题
1. 普通调用
```js
function test1() {
  console.log(this)
}
const test2 = () => {
  console.log(this)
}
test1() // window
test2() // window
```
2. 对象调用
```js
const obj = {
  test1: function () {
    console.log(this)
  },
  test2: () => {
    console.log(this)
  } 
}
obj.test1() // obj
obj.test2() // window
const func1 = obj.test1
const func2 = obj.test2
func1() // window
func2() // window
```

3. new —— return 非‘object’, null也是非object哦, 指路[new](base/codeWriting/new.md)
```js
function Test() {
  this.name = 111
  console.log(this) // Test { name: 111 }
}
const test = new Test()
console.log(test) // Test { name: 111 }
```

4. new —— return ‘object’, 指路[new](base/codeWriting/new.md)
```js
function Test() {
  this.name = 111
  console.log(this) // Test { name: 111 }
  return {
    name: 222
  }
}
const test = new Test()
console.log(test) // Test { name: 222 }
```
##### 例2: 嵌套题
```js
let obj = {
  name: 'Mike',
  parent: {
      name: 'Coco',
      test1: function(){
        console.log(this)
      },
      test2: () => {
        console.log(this)
      },
  }
}

obj.parent.test1() // parent
obj.parent.test2() // window
```
##### 例3: 进阶——嵌套题
##### 例2
##### 例2

```js
const obj = {
  a: 1,
  aa: function aa(){
    console.log('this1: ', this)
  },
  bb:(function(){
    console.log('this2: ', this)
  }),
  cc:(() => {
    console.log('this3: ', this)
  })
}
obj.aa()
obj.bb()
obj.cc()

```


```js
let length = 10;
function fn() {
  console.log(this.length);
}
 
let obj = {
  length: 5,
  method: function(fn) {
    fn();
    arguments[0]();
  }
};

obj.method(fn, 1)
```