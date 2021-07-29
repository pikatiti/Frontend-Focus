# 常见前端网络攻击
> [浏览器系列之 Cookie 和 SameSite 属性](https://github.com/mqyqingfeng/Blog/issues/157)
> [前端安全系列（一）：如何防止XSS攻击？](https://tech.meituan.com/2018/09/27/fe-security.html)
> [前端安全系列（二）：如何防止CSRF攻击？](https://tech.meituan.com/2018/10/11/fe-security-csrf.html)
### 一、XSS —— 跨站脚本攻击
##### 1、是什么
XSS 攻击是页面被注入了恶意的代码，url 或者 表单等注入等。就是把不可信的数据当作代码执行了。
##### 2、怎么解决
- 后端存之前转义
- 前端转义: 主要是```& < > ```
- 尽量避免 v-html/dangerouslySetInnerHTML/innerHTML，href、location等不拼接不可信字符串
- HTTP-only Cookie
- CSP

### 二、CSRF —— 跨站请求伪造
#### 1. 是什么
- 小明登录A后，被诱导访问B，B冒用小明在A网站的登录凭证(Cookie)后自动发起一些get/post请求，即B冒用A做一些操作。
- 注意：整个过程攻击者并不能获取到受害者的登录凭证，仅仅是“冒用”。
- CSRF通常是跨域的，因为外域通常更容易被攻击者掌控。但是如果本域下有容易被利用的功能，比如可以发图和链接的论坛和评论区，攻击可以直接在本域下进行，而且这种攻击更加危险。
- CSRF总结: 通常发生在第三方, 攻击者不能获取到Cookie等信息
#### 2. 如何解决
- 通常发生在第三方: 阻止不明外域的访问 —— 同源检测、Samesite Cookie
  - 同源检测：验证 HTTP Referer(协议+域名+查询参数, 不包含锚点信息) 或者 Origin(协议和域名)
  - Samesite Cookie
- 攻击者不能获取到Cookie: 提交时要求附加本域才能获取的信息 —— CSRF Token
  - 主要Token本身一般不放在Cookie里
- 其他
  - 严格管理所有的上传接口，防止任何预期之外的上传内容（例如HTML）
  - 对于用户上传的图片，进行转存或者校验。不要直接使用用户填写的图片链接。
  - 当前用户打开其他用户填写的链接时，需告知风险

### 三、SQL注入
##### 1. 是什么
原sql
```sql
const sql = `select * from user where username='${username}' and password='${password}'`
```
前端输入
```javascript
username-Input: xxx' or '1=1
password-Input: xxx or '1=1
```
发生SQL注入式攻击，现sql为
```sql
select * from user where username='xxx' or '1=1' and password='xxx' or '1=1'
```
#####  2. 如何解决
- 前端做输入校验，如：不允许输入特殊字符
- 后端对关键字符做转换，如：mysql.escape(xxxx)

### 四、React如何防止XSS
React DOM 在渲染所有输入内容之前，默认会进行转义。它可以确保在你的应用中，永远不会注入那些并非自己明确编写的内容。所有的内容在渲染之前都被转换成了字符串。这样可以有效地防止 XSS（cross-site-scripting, 跨站脚本）攻击。除非使用了dangerouslySetInnerHTML
```js
// 直接使用是安全的：
const title = response.potentiallyMaliciousInput;
const element = <h1>{title}</h1>;
```
