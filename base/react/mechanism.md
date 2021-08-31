# React 原理
> https://juejin.cn/post/6844904200824946696

- diff
  - 调用render() 方法，会创建一颗树，下一次 state / props 更新时，render() 会创建另一颗树。React 需要基于这两棵树之间的差别来判断如何高效的更新 UI，减少dom更新的范围。这个树的比对过程用的就是diff。
  - 对比过程
    - 对比不同类型的元素：拆卸原有的树并且建立起新的树（a --> img, Counter --> Article, Article --> div）
    - 对比同类型元素：
      - 普通dom元素：保留 DOM 节点，只对比更新改变的属性
      - 组件元素：类组件实例会保持不变，只更新props
    - 对比子元素的递归：利用key做了优化，

- key优化了啥
  - 

- react16架构分层
  - Scheduler(调度器): 调度任务的优先级，高优任务优先进入Reconciler
  - Reconciler(协调器): 负责找出变化的组件 —— diff
  - Renderer(渲染器): 负责将变化的组件渲染到页面上 —— 实现appendChild、insertBefore等DOM操作。


- react 事件机制：react自己实现了一套事件系统，即合成事件
  - 作用： 抹平浏览器差异、方便做优化
  - JS事件机制：点击一个div，“捕获阶段”“目标元素阶段”“冒泡阶段”
    ![js事件机制](../../media/js-event.png)
  - 原理：
    - 基于浏览器的事件机制来实现的，通过冒泡机制冒泡到最顶层元素，然后再由 dispatchEvent 统一去处理
    - 阻止 React 事件冒泡的行为只能用于 React 合成事件系统中，且没办法阻止原生事件的冒泡
  event.target代表的是触发事件的元素，而event.currentTarget代表的是那个绑定了事件处理函数的元


就CSS3动画卡顿性能优化解决方案 这块，感觉可以更加的深入谈一谈，用translate这些，调用GPU来渲染，会生成一个新的复合图层，跟原先文档流的复合图层分离开，所以重绘的时候，不会影响到原先文档流的复合图层，从而更快绘制