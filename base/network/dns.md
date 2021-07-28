# DNS
### 什么是DNS
DNS(Domain Name System)即“域名系统”，主要实现域名和IP的映射，如我们可以通过14.215.177.39访问百度，也可以通过https://www.baidu.com 访问百度，具体可以理解为下图

![DNS工作图](../../media/dns1.png)

### 相关概念
真正的网址应当是https://www.baidu.com. ,只不过.大家统一有，所以省略了
|  名称类型   | 说明  | 示例  | 备注 |
|  ----  | ----  |  ----  | ----  |
|  根域名  | ----  | 单个符号. | / |
|  顶级域名TLD  | 单元格 | .com. | 也叫一级域名 |
|  二级域名  | 单元格 | baidu.com. | / |
|  三级域名  | 单元格 | www.baidu.com. | www是主机名，通常最左侧的是主机名 |
- Public Suffix(公共后缀) === eTLD(有效顶级域名)，github.io、com.cn这种都属于eTLD，[完整的eTLD列表](https://publicsuffix.org/list/public_suffix_list.dat)，具体解释详见“浏览器存储”章节，可用于跨站划分。

### 解析过程 
- 访问https://www.baidu.com/
- 先访问浏览器和本机域名缓存及hosts文件，有命中就直接返回，没有命中就访问本地域名服务器LDNS
- LDNS命中就直接返回，未命中，LDNS访问根域名服务器
- 根域名服务器返回给LDNS一个所查地址的顶级域名服务器(.com)ip
- 此时LDNS再发送请求给这个顶级域名服务器
- 顶级域名服务器返回这个域名对应的服务器下一级DNS服务器地址(baidu.com)，以此类推，直至找到该地址对应的ip
- 中间各个机器都会有缓存～