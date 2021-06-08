# 值比较

### 比较规则
- 同类型比较，直接比
  - Number比大小，String逐个字符比Unicode编码顺序，Object比较地址
- 不同类型比较：除了null、undefined、NaN，都先转换成数字再比较
- null == undefined, 且各自不等于任何其他的值。
- NaN 是独一无二的，它不等于任何东西，包括它自身。
```js
0 == 0 // true
[] == ![] // true
undefined == null // true
"2" > "12" // true
NaN === NaN // false
```

### 奇怪的题目
```js
[] == 0 // true
![] == 0 // true
[] == ![] // true
[] == [] // false
{} == !{} // false
{} == {} // false
```
- 1、不同类型，[] ——> 0，0 == 0，true
- 2、不同类型，![] ——> false ——> 0，0 == 0，true
- 3、不同类型，[] ——> 0，![] ——> false ——> 0，0 == 0，true
- 4、同类型，引用类型比较地址，false
- 5、不同类型，{} ——> NaN，!{} ——> false ——> 0，NaN == 0 false
- 6、不同类型，{} ——> NaN，NaN == NaN false
