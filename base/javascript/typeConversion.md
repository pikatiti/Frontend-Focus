# 类型转换
>[类型转换](https://zh.javascript.info/type-conversions)
>[对象 — 原始值转换](https://zh.javascript.info/object-toprimitive)
>[](https://github.com/mqyqingfeng/Blog/issues/159)

### 数据类型 -- 7种
- 原始类型：undefined、Boolean、Number、String、BigInt、Symbol
- 引用类型：Object

### 原始 ——> String
```js
// 直接输出
String(null) // "null"
String(undefined) // "undefined"
String(NaN) // "NaN"

// 注意
String(+1) // 1
String(-1) // -1
String(-0) // 0
```

### 原始 ——> Number
- String 转 Number
  - 去掉首尾空格
  - 如果剩余字符串为空, 返回0
  - 将会从剩余字符串中“读取”数字，当类型转换出现 error 时返回 NaN (忽略所有前导的 0)
  - ```Number('  344-  ') —— NaN``````Number('  000344  ') —— 344```
- Number 转 Number —— 直接返回
- Boolean 转 Number —— true 1， false 0
- 其他
```js
Number(undefined) //NaN
Number(null) // 0
Number() // 0
Number([]) // 0
```
- parseInt、parseFloat —— 尽可能多的解析数字
```js
parseFloat(".14 abc") // 0.14
parseInt("-12.34") // -12
parseInt("0xFF") // 255
```

- **注意:**```Number(NaN) —— NaN```

### 原始 ——> Boolean
- 0、''、null、undefined、NaN 为 false, 其余均为true
- **注意:**
```Boolean() —— false```
```Boolean("0") —— true```
```Boolean([]) —— true```
```Boolean(' ') —— true```

### 原始 ——> Object
```js
// null 和 undefined 除外，直接调用构造函数
new Number(1)
new String('xx')

```

### Object ——> String
- 调用 toString, 返回结果A是原始类型，返回 String(A)
- 否则调用 valueOf, 返回结果A是原始类型，返回 String(A)
- 否则报错
### Object ——> Number
- 调用 valueOf, 返回结果A是原始类型，返回 String(A)
- 否则调用 toString, 返回结果A是原始类型，返回 String(A)
- 否则报错
- PS
```js
[].valueOf() // []
[].toString() // ''
Number([]) // 0
[1,2,3].valueOf() // [1, 2, 3]
[1,2,3].toString() // "1,2,3"
{}.valueOf() // {}
{}.toString() // "[object Object]"
Number({}) // NaN
```
### Object ——> Boolean
一律返回true

