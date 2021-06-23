const obj = {
  a: 1,
  aa: function aa(){
    console.log('this1: ', this)
  },
  bb:(function(){
    console.log('this2: ', this)
  }),
  cc:(() => {
    console.log('this3: ', this)
  })
}
obj.aa()
obj.bb()
obj.cc()
