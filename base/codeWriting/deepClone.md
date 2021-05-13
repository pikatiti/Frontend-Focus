# 深拷贝
### 一. 浅拷贝
arr.slice()、arr.concat()、扩展运算符、Object.assign
### 二. 深拷贝
#### 1. JSON.parse(JSON.stringify(obj))
- 缺点
  - Date数据变成纯字符串
  - undefined、函数等丢失
  - Infinity、NaN变成null

#### 2. lodash包的cloneDeep

#### 3. 手写深拷贝
```javascript
  deepCopy = (obj) => {
    if (typeof obj !== 'object') {
      throw '只拷贝对象'
    }
    if (obj === null) {
      return null
    }
    const newObj = obj instanceof Array ? [] : {}
    for (const key in obj) {
      if (obj.hasOwnProperty(key)) {
        newObj[key] = typeof obj[key] === 'object' ? deepCopy(obj[key]) : obj[key]
      }
    }
    return newObj
  }
```
