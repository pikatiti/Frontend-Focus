function Promise(executor){
  // 添加属性
  this.PromiseState = 'pending'
  this.PromiseResult = null
  this.callbacks = []
  const _this = this

  function resolve(data) {
    // 保证只能改变一次状态
    if (_this.PromiseState !== 'pending') return
    // 1、改变状态：实例对象上的一个属性——promiseState
    _this.PromiseState = 'fulfilled'
    // 2、设置对象结果：实例对象上的一个属性——promiseResult
    _this.PromiseResult = data

    setTimeout(() => {
      _this.callbacks.forEach((cb) => {
        cb.onResolved(data)
      })
    })
  }
  function reject(data) {
    if (_this.PromiseState !== 'pending') return
    _this.PromiseState = 'rejected'
    _this.PromiseResult = data

    setTimeout(() => {
      _this.callbacks.forEach((cb) => {
        cb.onRejected(data)
      })
    })
  }
  // executor 同步调用
  try {
    executor(resolve, reject)
  } catch (err) {
    reject(err)
  }
}

// 添加then方法
Promise.prototype.then = function(onResolved, onRejected) {
  const _this = this
  if (typeof onRejected !== 'function') {
    onRejected = reason => {
      throw reason
    }
  }
  if (typeof onResolved !== 'function') {
    onResolved = value => value
  }

  return new Promise((resolve, reject) => {
    function callback (type) {
      try {
        const res = type(_this.PromiseResult)
        if (res instanceof Promise) {
          // 返回新的promise对象A，新promise状态：A的状态，value: A结果
          res.then((v) => {
            resolve(v)
          }, (r) => {
            reject(r)
          })
        } else {
          // 返回非promise，新promise状态：fulfilled，value: 该值
          resolve(res) 
        }
      } catch (err) {
        reject(err)
      }
    }

    if (this.PromiseState === 'fulfilled') {
      setTimeout(() => {
        callback(onResolved)
      })
    }
    if (this.PromiseState === 'rejected') {
      setTimeout(() => {
        callback(onRejected)
      })
    }
    if (this.PromiseState === 'pending') {
      this.callbacks.push({
        onResolved: function() {
          callback(onResolved)
        },
        onRejected: function() {
          callback(onRejected)
        },
      })
    }
  })
}

// 添加catch方法
Promise.prototype.catch = function(onRejected) {
  return this.then(undefined, onRejected)
}

// Promise.resolve(), 
Promise.resolve = function(value) {
  return new Promise((resolve, reject) => {
    if (value instanceof Promise) {
      value.then((v) => {
        resolve(v)
      }, (r) => {
        reject(r)
      })
    } else {
      resolve(value)
    }
  })
}

// Promise.reject(), 
Promise.reject = function(reason) {
  return new Promise((resolve, reject) => {
    reject(reason)
  })
}

// Promise.all(), 
Promise.all = function(promises) {
  return new Promise((resolve, reject) => {
    let count = 0;
    const arr = []
    for (let i = 0; i <promises.length; i++) {
      promises[i].then(v => {
        count++
        arr[i] = v
        if (count === promises.length ) {
          resolve(arr)
        }
      }, r => {
        reject(r)
      })
   }
  })
}

Promise.all = function(promises) {
  return new Promise((resolve, reject) => {
    let count = 0
    const arr = []
    for (let i = 0; i < promises.length; i++) {
      promises[i].then(v => {
        
      }, r => {

      })
    }
  })
}

// Promiserace(), 
Promise.race = function(promises) {
  return new Promise((resolve, reject) => {
    for (let i = 0; i <promises.length; i++) {
      promises[i].then(v => {
        resolve(v)
      }, r => {
        reject(r)
      })
   }
  })
}




// 使用
let p = new Promise((resolve, reject) => {
  console.log('ok')
  reject('OK')
  // reject('Error')
  // throw 'throw error'
  // setTimeout(() => {
  //   reject('OK')
  // }, 1000)
})

const result = p.then((v) => {
  console.log('then')
}, (r) => {
  console.log('err :>> ');
})

// const result = p.then().then(() => {
//   console.log('222 :>> ', 222)
// }).then(() => {
//   console.log('333 :>> ', 333)
//   throw 'kkk'
// }).catch((reason) => {
//   console.log('fail :>> ', reason);
//   console.warn(reason)
// })


const p1 = new Promise((resolve, reject) => {
  // setTimeout(() => {
    resolve('1111')
  // }, 1000)
})
console.log(2222)




// setTimeout(() => {
//   console.log('res :>> ', res)
// }, 2000);


// console.log(p)
// 问题1
// then方法为什么写在原型上
// onResolved, onRejected和构造器