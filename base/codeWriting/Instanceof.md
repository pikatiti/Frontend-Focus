# Instanceof
```javascript
const _instanceof = (l, r) => {
  let lProto = l.__proto__
  let rProto = r.prototype

  while (lProto) {
    if (lProto === rProto) {
      return true
    }
    lProto = lProto.__proto__
  }
  return false
}

```