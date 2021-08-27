# hooks原理

### 前提
- hooks的作用：主要用于解决函数组件没有state，生命周期等问题。
- 以useState为例，使用useState ——> ReactCurrentDispatcher.current.useState
- 渲染一个函数组件会调用renderWithHooks
- current tree 和 workInProgress tree
  - 首次渲染会产生一个current树，更新的时候会遍历current tree的每个Fiber节点，复制生成WIP tree之后所有的work都在WIP上发生。
  - WIP将在commit中提交成为current

- renderWithHooks
  - 设置 ReactCurrentDispatcher.current，根据current tree来判断是HooksDispatcherOnMount对象还是HooksDispatcherOnUpdate对象
  - 执行 组件函数
  - 把ReactCurrentDispatcher.current指向ContextOnlyDispatcher，ContextOnlyDispatcher调用useState会报错，从而实现只能在函数组件内部内调用hooks

- HooksDispatcherOnMount 里有mountState、mountEffect、mountXXX等属性
- HooksDispatcherOnUpdate 里有updateState、updateEffect、updateXXX等属性

- useState： mountState、 updateState
- mountState： 
  - mountWIPHook()
    - 创建一个hook对象
    - 把该hook对象挂在WIP树的memoizedState上
    - 为啥hooks不能放到判断语句：会导致当前WIP树memoizedState上的链表和current树上的memoizedState链表不一样。
  - 设置初始值到该hook对象memoizedState，如果是函数会执行函数拿到初始值
  - 创建一个queue
  - 利用dispatchAction创建一个dispatch
    - 其实就是我们传入的setState，只不过我们传的是第三个参数
    - 创建一个update信息，加入到刚刚的queue.pending里（加入到更新队列）
    - 判断是否正在渲染阶段，是的话就改变优先级，否则计算出最新的state和当前State浅比较，相同就退出，说明不用更新。
    - 掉用scheduleUpdateOnFiber渲染函数
  - 返回一个 [memoizedState, dispatch]
- updateState：
  - 