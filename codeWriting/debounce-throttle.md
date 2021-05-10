# 防抖 & 节流
> [JavaScript专题之跟着 underscore 学节流](https://github.com/mqyqingfeng/Blog/issues/26)  
> [JavaScript专题之跟着 underscore 学防抖](https://github.com/mqyqingfeng/Blog/issues/22)
- PS1: lodash 有库可以直接使用  
- PS2: 以下实现均使用了闭包，指路[闭包]()
- PS3: this指向，指路[this]()

### 一. 防抖debounce
#### 1. 是什么
- 事件触发 n 秒后才执行，延迟执行
- 应用：文本编辑器实时保存，input 实时搜索，频繁操作点赞和取消点赞

#### 2. 实现
```javascript
function debounce(func, wait) {
  let timeout;

  return function () {
      const context = this;
      const args = arguments;

      clearTimeout(timeout)
      timeout = setTimeout(function(){
        func.apply(context, args)
      }, wait);
  }
}

```
### 二. 节流throttle
#### 1. 是什么
- 持续触发事件，每隔一段时间，只执行一次事件。

#### 2. 实现
```javascript
function throttle(func, wait) {
  let timeout;

  return function() {
      const context = this;
      const args = arguments;
      if (!timeout) {
        timeout = setTimeout(function(){
          timeout = null;
          func.apply(context, args)
        }, wait)
      }

  }
}

```
ps lodash 有库可以直接使用