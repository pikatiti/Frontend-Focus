  - hooks 优缺点
  - hooks 实现原理
  React 怎么知道 useState 对应的是哪个组件

# Hook

### 分散知识点
- React 16.8.0 是第一个支持 Hook 的版本
- 没有计划从 React 中移除 class
- 什么是Hook —— Hook 是一个特殊的函数，它使得在函数组件里可以使用state 或者 生命周期等class特性
- 使用规则
  - 只能在函数最外层调用 Hook。不要在循环、条件判断或者子函数中调用。
  - 只能在 React 的函数组件或者就是自定义的 Hook 中调用 Hook。不要在其他 JavaScript 函数中调用。
- 为什么使用hooks
  - 解决class 中生命周期函数经常包含不相关的逻辑，但又把相关逻辑分离到了几个不同方法中的问题
### 内置Hook对比
#### useEffect
- 类似componentDidMount，componentDidUpdate 和 componentWillUnmount三个的组合，用于执行副作用操作。
- 告诉 React 组件需要在渲染后执行某些操作
- 默认情况下，它在第一次渲染之后和每次更新之后都会执行。React 保证了每次运行 effect 的同时，DOM 都已经更新完毕。
- 使用 useEffect 调度的 effect 不会阻塞浏览器更新屏幕