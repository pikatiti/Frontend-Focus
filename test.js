obj = {
  a: 1,
  b: 2,
  c: 3,
  d: 4,
  e: 5,
  [Symbol.iterator]: function (){
    return {
      next: function () {
        return {
          done: '',
          value: ,
        }
      }
    }
  }
}

obj = {
  a: 1,
  b: 2,
  c: 3,
  d: 4,
  e: 5
}

for (let i of obj) {
  console.log('i :>> ', i)
}