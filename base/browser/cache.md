# 浏览器缓存
> https://github.com/youngwind/blog/issues/113

- 强缓存: expires(1.0的已过时)，cache-control，expires用的是服务器时间不准确，所以淘汰了
- 协商缓存: Last-Modified/If-Modified-Since 和 ETag/If-None-Match
  - Etag是对资源的一种唯一标识，而Last-Modified是该资源文件最后一次更改时间。
  - Etag是上一次请求Response header里的值。下一次请求会将该Etag放到request header的If-None-Match里，服务器收到If-None-Match的值后，会拿来和现在资源的Etag值做比较，如果相同，则表示资源文件没有发生改变，命中协商缓存。
  - Last-Modified上一次请求Response header里的值，下一次请求会将它放在request header的If-Modified-Since里，服务器在接收到后也会做比对，如果相同则命中协商缓存。
  - 优先级：Etag > Last-Modified，性能：Etag < Last-Modified，精确度：Etag > Last-Modified

- 过程
  - 第一次加载资源，服务器返回200，浏览器缓存资源及其请求的返回时间
  - 下一次加载资源，先比较和上一次请求该资源的时间差，没有超过cache-control设置的max-age，则命中“强缓存“，不发请求直接从本地缓存读取该文件，如果过期，则向服务器发送header带有If-None-Match和If-Modified-Since的请求(协商缓存)
  - 服务器收到请求后，优先对比Etag的值判断被请求的文件有没有做修改，Etag值一致则没有修改，命中协商缓存，返回304；如果不一致则有改动，直接返回新的资源文件带上新的Etag值并返回200；
  - 如果服务器收到的请求没有Etag值，则将If-Modified-Since和被请求文件的最后修改时间做比对，一致则命中协商缓存，返回304；不一致则返回新的last-modified和文件并返回200；

- 其他
  - 缓存位置：Service Worker、Memory Cache、Disk Cache、Push Cache
  - 用户行为：F5刷新 —— 跳过强缓存判断，协商缓存；ctrl+F5刷新 —— 跳过强缓存和协商缓存，直接从服务器拉取资源。

- 如何不缓存
  - 链接后加时间戳、摘要、版本号等
  - Post请求
  - cache-control
    - no-cache/max-age=0 本地不缓存，但是不限制服务器缓存，即直接走协商缓存。
    - no-store 服务器和本地都不缓存
    - 通过http的meta设置
  