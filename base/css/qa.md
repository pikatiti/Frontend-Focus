- 定位
  - static：普通定位
  - absolute：脱离文档流，相对于最近的非 static 定位
  - fixed：脱离文档流，相对于浏览器定位
  - relative：不脱离，相对正常位置
  - sticky：目标区域内relative，滚动超出目标区域时fixed
- diaplay:
  - inline: 不会独占一行; width/height无效，宽高取决于内容; margin仅左右有效; padding生效，但是上下padding不会占据空间。
  - block: 独占一行, width/height/margin/padding正常生效
  - inline-block: 不独占一行, width/height/margin/padding正常生效
- 如何开启硬件加速，原理是啥？
  - 用css transfrom3d等等3D绘制，原理就是使用了GPU
- 实现动画的几种方式
- css、js实现动画区别？
  - css写法更方便一些、可以开启GPU，js更好控制动画暂停重播等等
  - css用GUI引擎/GPU引擎，js是js引擎
- css优先级
  - 分四个等级，行内样式1000，id选择器0100，类选择器、伪类选择器和属性选择器0010，元素选择器和伪元素选择器0001
  - 可以叠加不会进位
  - ，——和；‘ ’—— xx下的所有yy，包括孙子；‘>’子元素， + ——相邻兄弟
- css解析顺序：从右往左，先遍历找出最右的节点——减少回溯
- css模块化原理：把类名变成一个hash值，即在类名后面加一串hash
- post-css主要用来处理浏览器兼容问题
- 如何减少重排：集中修改样式、读写分离、GPU加速、
- 777 权限： 4读权限，2写权限，1运行权限
- css动画：keyframe、transform: translate(0, -50%);、transition过渡
- margin 百分比是基于父元素




Promise.allsettled、Promise.all手写

- 深拷贝循环引用
- 数组扁平化
- 二分查找、层序遍历、写个LRU

- 大数相加，大数相✖️
- 伪类、伪元素\css3新增了哪些属性
- 爬楼梯
- 自己与别人相比有什么优势？
- 求数组的交集并且不要有重复的数据
- 冒泡排序
- 什么是原型
- JS 继承，组合继承是什么，它和原型继承相比解决了什么问题
- 详细的渲染过程
- css-loader，style-loader file-loader url-loader
- 最大并发控制？Promise 如何实现
- hooks闭包问题、diff
- a + b  curry
- 讲一下 js 事件流？事件捕获和事件冒泡有什么应用场景
- 为什么会有 Vue 、React？能带来什么好处
- 自我介绍
- 数组一些操作如splice
- webpack 打包后的文件是怎么样的
- 实现reduce
- mobx和redux区别
- redux流程
- css 中的 left、top 这些和 transform 属性有什么区别
- 6.4不考虑缓存和修改协议的情况下，可以通过哪些方式来最快地渲染页面呢，就是我们常说的关键渲染路径
- 减少重排重绘
- 页面渲染优化方法