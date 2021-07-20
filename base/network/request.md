# GET POST区别
> https://www.zhihu.com/question/28586791/answer/767316172 (以下为大宽宽的回答摘抄)
​

HTTP最早被用来做浏览器与服务器之间交互HTML和表单的通讯协议，后来又被被广泛的扩充到接口格式的定义上。所以在讨论区别的时候，需要现确定下到底是浏览器使用的GET/POST还是用HTTP作为接口传输协议的场景。
### 浏览器对最初的get和post(非ajax)定义：
- GET: 
  - “读取“一个资源，没有副作用幂等的，所以可以进行数据缓存。
  - 浏览器直接发出的GET只能由一个url触发，要么是地址栏的url，要么是a标签href的url，所以get的参数只能拼在url上，http本身并没有这个限制。
- POST: 
  - 表单submit会向服务器发post请求，有副作用不幂等的，不能被缓存。
  - 每次提交表单，表单数据被浏览器编码到HTTP请求的body里。body主要有有两种格式，一种是application/x-www-form-urlencoded用来传输简单的数据，大概就是"key1=value1&key2=value2"这样的格式。另外一种是传文件，会采用multipart/form-data格式，因为前者的编码方式对于文件这种二进制的数据非常低效。浏览器在POST一个表单时，url上也可以带参数，只要```<form action="url" >```里的url带querystring就行。只不过表单里面的那些用```<input>```等标签经过用户操作产生的数据都在会在body里。因此我们一般会泛泛的说“GET请求参数在url中，POST请求参数在body中“。但这种情况仅限于浏览器发请求的场景。

### 接口中的GET和POST
通过浏览器的Ajax api或者curl，postman之类的工具发出来的GET和POST请求。此时只要是符合HTTP格式的就可以发。
```
<METHOD> <URL> HTTP/1.1\r\n
<Header1>: <HeaderValue1>\r\n
<Header2>: <HeaderValue2>\r\n
...
<HeaderN>: <HeaderValueN>\r\n
\r\n
<Body Data....>
```
```<METHOD>```可以是GET也可以是POST，或者其他的HTTP Method，如PUT、DELETE、OPTION……。并没有规定GET一定不能没有body，POST就一定不能把参放到<URL>的querystring上，甚至还可以让所有的参数都放Header里。


太自由也是一种麻烦，所以就有了REST一类的接口规范/风格。REST约定GET、POST、PUT和DELETE分别用于获取、创建、替换和删除“资源”，REST最佳实践还推荐在请求体使用json格式。这样仅仅通过看HTTP的method就可以明白接口是什么意思，并且解析格式也得到了统一。（写一个接口支持上传文件，那么还是multipart/form-data格式更合适。）

一般情况下POST比GET私密性更好，但是http本身是明文传送，要处理安全性问题还是得https

### 总结一下
1、本质上并没有区别，都是http请求，最大的区别是语义，get获取资源，post提交资源。
2、get和post的区别主要是由客户端和服务端造成的，网上说的大部分区别都是对于最初浏览器对get和post的定义。比如
  - 参数：最初浏览器对get/post的定义是get参数在url，post参数在body，但是现在通过ajax等发送的请求其实只要符合HTTP格式就可以。
  - 安全性：刚说的最初get参数拼在url，post参数在body，所以post相对安全一点，但是http是本身明文的，最终还是要靠https
  - get有长度限制：是浏览器对是url长度限制，并不是get的长度限制。post没有具体大小限制。
  - get能缓存：因为对get的定义就是获取资源，没有副作用幂等的，所以一般可以进行缓存，加速获取。
  - 编码：本质是url和body的编码区别，url的参数只能支持部分ASCII码，但是二进制和中文也可以通过编码后拼上去。body通过Content-Type来定义body的格式（application/x-www-form-urlencoded）和字符编码（UTF-8）。
  - 其他：get回退无害，参数会被保存在历史记录等等。

