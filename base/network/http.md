# http-v1、v2、v3

##### http1.0
- 短连接，每次请求都需要与服务器建立一个TCP连接，服务器处理完成后立即断开TCP连接
- 队头阻塞，HTTP1.0规定下一个请求必须在前一个请求响应到达之后才能发送。

##### http1.1
- 长连接：增加了Connection字段，设置Keep-Alive可以保持HTTP连接不断开，可以在请求头中携带Connection: close来告知服务器关闭长连接。连接在空闲时段时间后会被关闭。也可用Keep-Alive头来指定一个最小的连接保持时间。
- 请求管道化pipelining
  - 在同一条长连接上发出连续的请求，而不用等待回答返回。
  - 请求能够“并行”传输。但只是把先进先出队列从客户端（请求队列）迁移到服务端（响应队列），并不是真正的并行。
  - 流水线有很多限制，现代浏览器默认没有启用这个特性。
- 域名分片
  - HTTP1.x请求是有序的，即便开启了管道化响应也是有序的。
  - HTTP2不需要了
- 加入了缓存处理字段如cache-control

##### http2.0
- 二进制分帧: 在应用层和传输层之间增加一个二进制分帧层
- 多路复用:
- 头部压缩
- 服务器推送，Webserver是基于HTTP1.1的协议，可以简单理解为创建了一条TCP连接，和http2.0的服务器推送并不一样。具体如下，主要是http2_push
  ```conf
    # 如果用户请求根路径/，就推送style.css和example.png
    location / {
      root   /usr/share/nginx/html;
      index  index.html index.htm;
      http2_push /style.css;
      http2_push /example.png;
    }
  ```
- 精灵图（Spriting）、资源内联（inlining）、域名分片（Sharding）（https://time.geekbang.org/column/article/116260）

##### http3
https://github.com/amandakelake/blog/issues/35

SPDY