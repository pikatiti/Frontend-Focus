async function async2() {
  console.log('async2 start');
  return new Promise((resolve, reject) => {
   resolve();
   console.log('async2 promise');
  })
}

new Promise((resolve, reject) => {
  console.log('async2 start');
  resolve(
    new Promise((resolve, reject) => {
      resolve();
      console.log('async2 promise');
    })
  )
})


new Promise((rs, rj) => {
  console.log('async2 start');
  new Promise((resolve, reject) => {
    reject();
    console.log('async2 promise');
  }).then(() => {
    rs()
  })
}).then(() => {
  
})