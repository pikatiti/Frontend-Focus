# 跨域
##### 同源策略
- "协议+域名+端口"三者相同，即便两个不同的域名指向同一个ip地址，也非同源
- 同源限制：
  - Cookie、LocalStorage/sessionStorage 和 IndexDB 存储在浏览器中的数据无法读取
  - DOM和JS对象无法获得
  - AJAX 请求不能正常进行(可以发送，但浏览器会拒绝接受响应)
- 存在意义：如果没有，那么其他源的网站可以随意获取cookie等浏览器存储内容，不安全。
- 跨域和跨站：同站指两个 URL 的 eTLD(效顶级域名)+1 相同即可，不需要考虑协议和端口，SameSite是跨站限制

##### 跨域解决方案
- JSONP
  - script、img这样的获取资源的标签是没有跨域限制
  - 动态创建script，src请求地址上拼接callback函数```http://example.com/ip?callback=foo```
  - 服务器收到请求后，将数据作为callback参数返回```foo({...})```
  - window定义对应的处理函数，window.foo，等到请求返回后会被自动执行。
- 浏览器开启跨域：disable-web-security
- Node/Nginx/webpack(devServer)代理
- postMessage可以跨源通信, WebSocket没有同源限制
- iframe + domain: 两个网页一级域名相同，只是二级域名不同，如：a.test.com和b.test.com
  - document.domain = test.com 可以共享Cookie、dom等，即从跨域变成跨站

##### CORS
- 主要解决同源导致AJAX无法正常使用的问题，全程浏览器自动完成，浏览器一旦发现AJAX请求跨源，就会自动添加一些附加的头信息，有时还会多出一次附加的请求，用户和前端开发者是无感的，关键是服务器实现CORS接口。
- CORS是一种基于HTTP 头的机制， AJAX跨域 ——> 浏览器加一些header字段 ——> CORS请求
- 分为简单请求和复杂请求
- 简单请求
  - 浏览器发现是简单请求，直接给header加一个Origin，直接发出CORS请求
  - 服务端根据Origin来判断是否在许可范围，允许则返回Access-Control-Allow-Origin等CORS相关的header，否则返回一个正常响应，浏览器发现没有CORS相关的header就会抛出一个错误
- 非简单请求: PUT或DELETE或Content-Type：application/json或自定义头等
  - 浏览器发现是非简单请求，会在请求前增加一个“预检请求”，方法是Option
  - 预检请求会带上“origin”“Access-Control-Request-Headers”等CORS相关的header，告诉服务器本次请求的源、方法等
  - 服务端根据预检CORS相关headers来判断是否在许可范围，允许则返回Access-Control-Allow-Origin等CORS相关的header，否则返回一个正常响应，浏览器发现没有CORS相关的header就会抛出一个错误

- 如何发送Cookie： 服务端指定```Access-Control-Allow-Credentials: true```，客户端设置```withCredentials=true```

