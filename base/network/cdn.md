# CDN

- 将图片、视频、附件等对流量消耗大且不经常改变的静态资源部署到互联网网络的多个位置(CDN节点)，而核心系统只部署在一个位置(源站)。这就构成内容分发网络CDN。
- 如下图，原本获取图片等内容要请求到“源站”，现在可以直接从CDN节点获取

![CDN](../../media/cdn.jpg)

- 优点：供用户就近获取，提升访问速度，降低源站压力，降低网络拥堵。