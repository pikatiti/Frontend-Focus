# SetState
- setState本身不是异步的，只是React的机制导致它可能异步。出于性能考虑，React 可能会把多个setState调用合并成一个调用。如果要依赖顺序，则通过回调函数。
- 异步：React合成事件(官网)和生命周期函数(网上说的，没验证过)
- 同步：其他
- 但是之后React会批量更新更多场景

- setState原理：既能同步执行又能异步执行
  - isBatchingUpdates来标识是否批量更新，用一个队列来保存setState的数据(state, 当前component)，然后在一段时间后，清空这个队列并渲染组件。
  - 延迟执行：js的事件队列机制。