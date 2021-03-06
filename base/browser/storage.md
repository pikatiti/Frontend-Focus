# 浏览器缓存
### 浏览器存储类型
Local Storage、Session Storage、IndexedDB、Web SQL、Cookies、Trust Tokens
### Cookie
#### 存在意义
HTTP是无状态协议，部分网络请求需要知道用户上一次做了什么。如付款时需要知道用户是否登录。
#### 设置
- 客户端设置
  - 通过js设置 —— document.cookie
- 服务端设置
  - 客户端请求服务端，服务端返回一个包含Set-Cookie字段响应头，客户端将Set-Cookie的内容存储到Cookie中
- 注意的几点
  - 每次请求都会带上Cookie
  - Cookie的功能本质上是客户端即浏览器实现的
  - Cookie中如果设置了HttpOnly属性，那么通过js脚本将无法读取到cookie信息

#### 属性
- Secure属性: 只有https时候传输Cookie
- SameSite: Cookie 在跨站请求时不会被发送，从而可以阻止CSRF
  - Strict 仅允许同站携带Cookie
  - Lax 允许部分请求携带 Cookie (链接，预加载，get表单)
  - None 无论是否跨站都会发送 Cookie
  - 原来默认是None现在默认Lax
  - 解决: SameSite=none 属性，同时加上 Secure 属性 (HTTP 接口不支持 SameSite=none)
  - 之前默认是 None 的，Chrome80 后默认是 Lax。
- 跨域和跨站:
  - 同站(same-site)/跨站(cross-site) 和 第一方(first-party)/第三方(third-party) 概念等同
  - 不同源即跨域，同源指 协议 + 域名 + 端口相同
  - 同站指两个 URL 的 eTLD(效顶级域名)+1 相同即可，不需要考虑协议和端口
  - css实现一个圆？如果border-radius设置100%会怎么样？ 实现一个半圆呢？


### Cookie、SessionStorage、LocalStorage对比
<table>
    <tr>
        <th>特性</th>
        <th>Cookie</th>
        <th>sessionStorage</th>
        <th>localStorage</th>
    </tr>
    <tr>
        <td>生命期</td>
        <td>根据Expires/Max-Age。JS设置Cookie如不指定过期时间，默认Session(浏览器被“完全”关闭，macos需要command+Q)</td>
        <td>当前Tab关闭</td>
        <td>保存后永久存储，除非手动清除</td>
    </tr>
    <tr>
        <td>存储量限制</td>
        <td>4k左右</td>
        <td colspan="2">5M左右</td>
    </tr>
    <tr>
        <td>服务端通信</td>
        <td>每请求都会带上cookie，主要用于服务端获取</td>
        <td colspan="2">不传输，只能在客户端获取</td>
    </tr>
</table>

### IndexDB 和 Web SQL
- 类似localStorage存储在本地。“The only limits on the size of the IndexedDB database will be the user's disk space and operating system.”
- localStorage有5MB的存储限制，不提供搜索功能，不能建立索引,而IndexDB没有存储限制，提供查找接口，还能建立索引。就是一个数据库～
- IndexedDB 和 WebSQL都是存储的解决方案，WebSQL从2010开始逐步废弃。
