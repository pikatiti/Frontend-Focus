### 总结
- cookie、session
  - HTTP是无状态协议，需要一种机制(cookies/session等)知道上一次请求和这次请求是否是同个人。
  - 纯cookie的方式：当需要保存用户状态的时候，服务端通过Response的Set-Cookie字段来告诉浏览器保存相应的cookie内容。发送http请求的时候cookie会被带着一起发送过去，服务端就知道用户状态了。
  - session方式：用户信息以某种方式被记录在服务端，然后将sessionid存客户端(一般是cookie)，每次请求服务端会通过sessionID来获取相应的session数据，从而判断用户状态。
  - 如果禁用cookie，session还能用么: 可以的，只要通过某种方式让每次请求带上sessionid即可 —— 如将sessionid拼接在url、存在localstorage等
- cookie机制、session机制的区别
  - 本质都是用来解决http无状态问题的一种机制
  - cookie存在客户端，透明、容易泄露，session的主要内容存在服务端，
  - cookie信息是透明的，容易泄露，不安全，session相对安全。


- token
  - 因为session保存在服务端，会占用大量的空间，所以衍生出了token
  - 用户登陆后，服务端产生一个token存在客户端(cookie、sessionStorage、localStorage等等都可)，之后的每次请求都带上，一般是通过拦截器放header里。
  - 服务端通过密钥验证对token进行解密，
  - 