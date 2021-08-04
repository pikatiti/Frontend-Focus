# Virtual DOM & Diff 
Virtual DOM 是一种编程概念。在这个概念里， UI 以一种理想化的，或者说“虚拟的”表现形式被保存于内存中，并通过如 ReactDOM 等类库使之与“真实的” DOM 同步。这一过程叫做协调。
这种方式赋予了 React 声明式的 API：您告诉 React 希望让 UI 是什么状态，React 就确保 DOM 匹配该状态。这使您可以从属性操作、事件处理和手动 DOM 更新这些在构建应用程序时必要的操作中解放出来。
如何使用 React Hooks 获取数据
|298 | [Real DOM 和 Virtual DOM 有什么区别?](#real-dom-和-virtual-dom-有什么区别) |
|24 | [什么是 Virtual DOM?](#什么是-virtual-dom) |
|25 | [Virtual DOM 如何工作?](#virtual-dom-如何工作) |
|26 | [Shadow DOM 和 Virtual DOM 之间有什么区别?](#shadow-dom-和-virtual-dom-之间有什么区别) |

- vdom为什么能提高性能
  - gui线程和js线程是互斥的，所以频繁操作dom，线程切换有消耗，dom操作后的重绘重排也很消耗性能
  - vdom会做批量更新减少重绘重排
  - 通过diff减少更新的dom范围

- diff
  - 递归，只作同层比较
  - 对比不同类型：直接销毁重建
  - 对比同类型：仅比对及更新有改变的属性

- key
  - 类似身份标示，减少没必要的diff算法对比

- hoc
  - 接受一个 React 组件作为参数，然后返回一个新的 React 组件。本质还是装饰器

