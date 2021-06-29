function Test() {
  this.name = 111
  console.log(this) // Test { name: 111 }
  return {
    name: 222
  }
}
const test = new Test()
console.log(test) // Test { name: 222 }