function f(next) {
  console.log(1)
  next()
  console.log(2)
}
function g(next) {
  console.log(3)
  next()
  console.log(4)
}
function h(next) {
  console.log(5)
  next()
  console.log(6)
}


  // return function(){
  //   f(
  //     function(){
  //       g(
  //         function() {
  //           h(
  //             function() {}
  //           )
  //         }
  //       )
  //     }
  //   )
  // }

function compose(...funcs) {
  let next = function(){}
  for(let i = funcs.length - 1; i >= 0; i--) {
    const func = funcs[i]
    next = function(){
      func(next)
    }
  }
  return next
}

function compose(...funcs) {
  let next = function(){}
  let pre = next
  for(let i = funcs.length - 1; i >= 0; i--) {
    const func = funcs[i]
    pre = next
    next = function(){
      func(pre)
    }
  }
  return next
}

compose(h)()
// 输出 1,3,5,6,4,2

// next = dd()


