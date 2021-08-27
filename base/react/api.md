

# Hooks
> https://juejin.cn/post/6982755396976902158


### ClassAPI
- PureComponent对比Component实现了state、props的浅层对比。
  - 陷阱：state里有个数组，直接往数组里面push，因为PureComponent是浅比较，这个数组的指针没变，不会触发更新。
  - 解决：新建一个对象/数组重新赋值。
- createRef用法：
  - constructor里this.inputRef = React.createRef();
  - ref = this.inputRef
  - this.inputRef.current获取

### FunctionComponent HOOKS API
- useState: 
  - 如果state基于之前state的值：传函数setCount(prevCount => prevCount - 1)
  - useState和class中setState的差别
    - useState 不会自动合并更新对象
    - useState 会对更新的state做Object.is做处理，相当于实现了类似shouldComponentUpdate；class的setState需要使用pureComponent才能实现类似的效果（PS：purecomponent是浅对比了）

- useEffect
  - 流程：
    - 每次unctionComponent执行的时候，浅层判断第二个参数是不是有变化
    - 如果deps变化，则useEffect对应FunctionComponent的fiber会被打上标记。
    - 标记的fiber会形成一条effectList链表
    - 在renderer中，遍历effectList会则依次执行该useEffect的destroy（即useEffect回调函数的返回值函数）与create（即useEffect回调函数）。
  - 时机：在浏览器完成布局与绘制之后延迟执行，但保证在新的渲染之前。
  - 类似：componentDidMount，componentDidUpdate 和 componentWillUnmount

- useLayoutEffect: 
  - 时机：DOM 变更之后**同步**调用 effect。在浏览器执行绘制之前，可以使用它来读取 DOM 布局并同步触发重渲染，避免闪屏。
  - 使用：缩放组件要求卡片缩小的同时，卡片内的元素位置会被重置到卡片内。
  - PS：useLayoutEffect 与 componentDidMount、componentDidUpdate 的调用时机是一样的

- useMemo
  - 减少高性能的计算，仅会在某个依赖项改变时才重新计算 memoized 值
  - 使用：如果state的值每次都要通过一个复杂计算得到，则可以使用useMemo。
    - 标签选择器，分为三种标签“收藏、加入购物车、购买”，每种标签下面会有3个默认标签，并且支持用户上传自定义标签。这个种类是由radio做的，每次切种类的时候需要重新判断是这个种类下的哪个标签被选中，每次都要遍历，所以用useMemo减少计算。
  - PS：useMemo并不是一定能优化性能，如果这个值就是要每次计算一遍，用useMemo反而会增加性能开销
- useCallback
  - 同useMemo区别：useCallback缓存传入函数，useMemo缓存计算数据的值。
  - 

- useCallback
- useContext
- useReducer
- useRef
- useImperativeHandle

### FunctionComponent OTHER API
- React.memo: 帮助函数组件实现类似PureComponent的功能，
  - 对比PureComponent，memo只浅层对比props，state的对比useState本身就做了。Purecomponent会浅层对比state和props


