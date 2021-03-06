##### 页面加载优化
- 背景：
  - 我们的页面加载分模块和卡片两个维度，一个模块由多个卡片组成。当时主要有两个问题。
  - 1、正常是后端分屏返回数据，前端一屏一屏加载。但是我们模块里的卡片数据是动态的，也就是这个卡片数组的长度是不确定的，需要通过另一个接口返回（如根据商品类型返回商品数据，模块数据里存储的只是类型，用户访问的时候会实时拉取此类型的商品。），后端只能做到按模块拆分数据返回给前端。但是一个模块里可能有999个卡片，远远超过一屏的数据。在这种情况下，即便只返回一个模块的数据，前端渲染也会卡死（主要里面有很多的图片）。
  - 2、我们做淘宝数据，有前端有两个数据源，淘宝数据和后端数据，前端需要根据一定的原则取淘宝数据或者后端数据，淘宝接口还有每次只能返回100个卡片数据

- 解决
  - 整体页面加载逻辑
    - 进入小程序，后端按照900px的高度获取一页数据，这一页数据是可能不准确的，因为没有具体的卡片数据。
    - 前端拿到一页数据之后进行前端分片，非卡片模块就直接渲染，卡片模块会有自己的一套渲染逻辑。
    - 滚动屏幕，距离底部100px的时候向后端请求下一屏数据
  - 解决1: 
    - 改变图片大小
    - 页面卡片渲染本质就是渲染products这个数据，本质就是products数据手动分页
    - 根据模块不同分了自动加载和触发加载两种。
    - 触发加载主要通过在dom节点里加一个探针，探针onAppear的时候就会从数据池里取下一页数据加到products里
    - 自动加载，父组件用waitLength来记录一页数据的长度，每个卡片渲染完成的didMount会触发一个回调让父组件的waitLength-1，当waitLength=0的时候会再触发一次onAppear，直至当前渲染的products和数据池里的products长度相同。
  - 解决2:
    - 模块加载的时候是可以知道这个模块里的所有卡片id，卡片模块是分页加载的，通过pageNo拿到本页的ids，然后将ids分片成10个为一组的二维数组，再5个为一组进行并发请求，成功返回就用就走一套数据拼接逻辑，失败就采用自己的后端数据。

##### 拖拽缩放组件meidian-rd
- 类似react-dnd这种拖拽组件，用这个meidian-rd包裹组件可以实现组件的放大缩小、限制范围内的移动等等，也透传了onDragStart、End等等的过程函数，方便组件外获取实时状态。
- 为什么不用市面上的：调研过，市面上流行的有的是根据parent来限制移动范围，有的是用width、heigth和xy限制移动范围，我们的业务场景主要还是通过限制右上角这个点的可移动范围top、left、bottom、right这种形式会更加贴合一点。另外我们还有一个比较特殊的功能，父元素里面有很多的子元素，缩小父元素边界的时候，超出边界的子元素的位置也需要被重新移动到最新的父元素边界内。
- 参数：style/class，dragable/resizeable，拖拽方向，children，bounds，onDragStart等等钩子函数
- 难点：
  - 主要是计算比较绕，特别是onResize分等比和非等比，非等比的时候要注意边界到底是限制宽还是限制高
  - 缩小父元素，子元素改变的问题：在meidian-rd对bounds做useLayoutEffect监控，如果bounds改变就去该元素的位置。其中还有一个“超出省略”offsetHeight获取不准确的问题，setTimeout 0 解决。


##### 加载优化
- 开启gzip：compression-webpack-plugin
- 项目上cdn
- 去掉dll把echarts、g2等包拆分，external
- 升级了react17
- 用iconfont
- 用了React lazy
- 上h2
- 图片压缩
- 加上骨架屏、loading效果
