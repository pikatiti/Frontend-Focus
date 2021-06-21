let obj = {
  a: 'aa',
  b: 'bb',
  c: 'cc'
}

// obj[Symbol.iterator] = function () {
//   const parentThis = this
//   return {
//     currentIdx: 0,
//     next: function() {
//       const totalLength = Object.keys(parentThis).length
//       const values = Object.values(parentThis)
//       if(this.currentIdx < totalLength) {
//         return {done: false, value: values[this.currentIdx++]}
//       } else {
//         return {done: true}
//       }
//     }
//   }
// }

obj[Symbol.iterator] = function*() {
  for(let i = 0; i < Object.keys(this).length; i++) {
    const key = Object.keys(this)[i]
    yield this[key]
  } 
}

const iterator = obj[Symbol.iterator]()
console.log('test :>> ', iterator.next())
console.log('test :>> ', iterator.next())
console.log('test :>> ', iterator.next())
console.log('test :>> ', iterator.next())
console.log('test :>> ', iterator.next())

for (let i of obj) {
  console.log('i :>> ', i)
}