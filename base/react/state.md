# SetState
- setState本身不是异步的，只是React的机制导致它可能异步。出于性能考虑，React 可能会把多个setState调用合并成一个调用。如果要依赖顺序，则通过回调函数。
- 异步：React合成事件(官网)和生命周期函数(网上说的，没验证过)
- 同步：其他
- 但是之后React会批量更新更多场景

- setState原理：