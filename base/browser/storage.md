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

### Trust Tokens
- Google 2020年新提出的，用于防范身份欺诈、鉴别人类与机器的 API 规范，Chrome 89 已经加入了 Trust Tokens。
- 具体有空可看看 https://web.dev/trust-tokens/