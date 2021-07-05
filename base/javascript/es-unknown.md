# 不知道哪个版本的特性

### 装饰器
装饰器（Decorator）是一种与类（class）相关的语法，用来注释或修改类和类方法。
```js
@decorator
class A {}

// 等同于

class A {}
A = decorator(A) || A;
```