# React生命周期

![React生命周期](../../media/lifecycles.png)

- 当渲染过程，生命周期，或子组件的构造函数中抛出错误时，会调用如下方法：
  - static getDerivedStateFromError()
  - componentDidCatch()

- getDerivedStateFromProps(nextProps, prevState)：让组件在 props 变化时更新 state, 它应返回一个对象来更新 state
  - staic使得这个方法不属于任何一个实例(构造函数对象的一个方法)，所以实例无法用this.上的任何方法，即不能用ref，也不能去改state。
  - 背景是很多人在WillReceiveProps里去改变dom，原来同步模式没问题，但是在在Fiber里，一次更新中可能被调用多次。现在这样，相当于强迫函数强迫变成一个纯函数，没有副作用。

- React16哪些生命周期方法将被废弃 —— ...WillMount、...WillReceiveProps、...WillUpdate
  - 为什么废弃：因为改成Fiber后，一次更新中可能被调用多次，主要为了规范大家的写法。
  - 副作用：一个 function 做了和本身运算返回值无关的事

- 废弃迁移：
  - WillMount迁移至DidMount，获取数据一直是要放在DidMount
  - getDerivedStateFromProps 替代 WillReceiveProps，原先是通过对比传入的props和当前的props来判断要不要setState，现在通过 getDerivedStateFromProps(nextProps, prevState)，返回null代表不更新，返回obj则更新state。
  - WillUpdate迁移至DidUpdate

- getSnapshotBeforeUpdate —— 在发生更改之前从 DOM 中捕获一些信息给...DidUpdate

- conponentDidMount：render之后执行，在其中直接调用 setState()。它将触发额外渲染re-render，render --> re-render --> 页面绘制到浏览器，所以这个re-render是用户无感的。