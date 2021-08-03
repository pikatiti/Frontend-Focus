# 盒模型

CSS 元素盒子组成：内容（content）、内边距（padding）、边框（border）、外边距（margin）。
标准盒模型：（box-sizing: content-box）width/height = content 的 width/height
IE 盒模型：（box-sizing: border-box）width/height = 内容 + 内边距 + 边框 的 width/height
现代浏览器基本默认使用标准盒模型，IE6 才默认使用 IE 盒模型。