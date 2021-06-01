var promisesAplusTests = require("promises-aplus-tests");

class Promise {
  constructor(executor) {
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

  then(onResolved, onRejected) {
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

  catch(onRejected) {
    return this.then(undefined, onRejected)
  }

  static resolve(value) {
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

  static reject(reason) {
    return new Promise((resolve, reject) => {
      reject(reason)
    })
  }

  static all(promises) {
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

  static race(promises) {
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

}

Promise.deferred = function() {
  var result = {};
  result.promise = new Promise(function(resolve, reject){
    result.resolve = resolve;
    result.reject = reject;
  });

  return result;
}

promisesAplusTests(adapter, function (err) {
  // All done; output is in the console. Or check `err` for number of failures.
});