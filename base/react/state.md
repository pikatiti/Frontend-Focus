# SetState

### setState为什么是异步的
- 出于性能考虑，React 可能会把多个 setState() 调用合并成一个调用。如果要依赖props 和 state的值来更新，则传一个回调函数给setState

### setState什么时候同步什么时候异步
- 在事件处理函数内部的 setState 是异步的。
- 
- 在以后的版本当中，React 会在更多的情况下静默地使用 state 的批更新机制。


https://stackoverflow.com/questions/48563650/does-react-keep-the-order-for-state-updates/48610973#48610973

为什么不能直接更新状态——不会渲染=-=
setState 原理