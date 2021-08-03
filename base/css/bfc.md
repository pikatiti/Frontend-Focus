# BFC

- BFC是什么
  - 规定了内部的“块级”盒子如何布局，并且与这个区域外部毫不相干。
  - 内部的盒子会在垂直方向，一个接一个地放置，同一个 BFC 的两个相邻盒子的 margin 会发生重叠；
  - 计算 BFC 的高度时，浮动元素也参与计算。
  - BFC是个独立容器，容器内部不会影响外部，外部同理

- 如何产生BFC
  - 根元素html
  - position为absolute/fixed
  - inline-block/flex/grid
  - overflow 不为 visible

- BFC 解决什么问题
  - 防止垂直 margin 合并：让元素处于不同的 BFC 内。
  - 清除内部浮动，让父元素高度恢复正常：计算 BFC 的高度时，浮动元素也参与计算 —— 使父元素形成 BFC 即可。