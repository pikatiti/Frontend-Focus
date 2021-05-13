# 驼峰和下划线转换
```javascript
toHump = (text) => {
  return name.replace(/_(\w)/g, (all, letter) => letter.toUpperCase())
}

toHump = (text) => {
  let arr = text.split('-')
  arr.reduce((prev, cur) => prev + cur[0].toUpperCase() + cur.substr(1))
}
  
// $1匹配第一个括号
toLine = (text) => name.replace(/([A-Z])/g, '_$1').toLowerCase()
```