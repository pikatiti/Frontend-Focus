  - hooks 优缺点
  - hooks 实现原理
  React 怎么知道 useState 对应的是哪个组件

### 内置Hook对比
#### useEffect
- 类似componentDidMount，componentDidUpdate 和 componentWillUnmount三个的组合，用于执行副作用操作。
- 告诉 React 组件需要在渲染后执行某些操作
- 默认情况下，它在第一次渲染之后和每次更新之后都会执行。React 保证了每次运行 effect 的同时，DOM 都已经更新完毕。
- 使用 useEffect 调度的 effect 不会阻塞浏览器更新屏幕


- useState、useEffect
- useReducer：state 逻辑较复杂，深层state
- useRef：获取ref
- useLayoutEffect：useEffect在组件渲染到屏幕之后执行，layout会在所有的 DOM 变更之后同步调用，浏览器绘制之前执行
- useImperativeHandle：把自己的ref暴露给父组件，函数组件没有ref，因为没有是实例


- 支持Hooks的React版本: > 16.8.0, 要运行Hooks，react和react-dom都要升级到16.8.0
- 什么是Hooks: 使函数组件能使用state、生命周期等类的特性
- 为什么用Hooks: this问题、更好拆分小组件、是趋势
- 规则:
  - 只能在函数最外层调用 Hook。不要在循环、条件判断或者子函数中调用。
  - 只能在 React 的函数组件或者就是自定义的 Hook 中调用 Hook。不要在其他 JavaScript 函数中调用。