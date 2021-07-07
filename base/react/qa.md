### Error boundaries
- Error boundaries可以捕获并打印发生在其子组件树任何位置的 JS 错误，并渲染备用 UI，但是无法捕获以下场景中产生的错误：
  - 事件处理 —— 事件处理器不会在渲染期间触发，需要在事件处理函数内部太try/catch
  - 异步代码（例如 setTimeout 或 requestAnimationFrame 回调函数）
  - 服务端渲染
  - 它自身抛出来的错误（并非它的子组件）

- 若 class 组件中定义了 getDerivedStateFromError() 或 componentDidCatch() 中的任意一个（或两个）时，那么它就变成一个错误边界。当抛出错误后，请使用 static getDerivedStateFromError() 渲染备用 UI ，使用 componentDidCatch() 打印错误信息。

### React.lazy 原理
- 使用[动态 import()](base/project/module.md) 语法，webpack解析到该语法时，会自动进行代码分割。代码分离到不同的 bundle 中，运行时可以按需加载或并行加载这些文件。
- 一般是基于路由进行代码分割。
- React.lazy函数能让你像渲染常规组件一样处理动态引入(的组件)，配合```Suspense```和```错误边界Error boundaries```一起使用

```js
import React, { Suspense } from 'react';
import MyErrorBoundary from './MyErrorBoundary';

const OtherComponent = React.lazy(() => import('./OtherComponent'));
const AnotherComponent = React.lazy(() => import('./AnotherComponent'));

const MyComponent = () => (
  <div>
    <MyErrorBoundary>
      <Suspense fallback={<div>Loading...</div>}>
        <section>
          <OtherComponent />
          <AnotherComponent />
        </section>
      </Suspense>
    </MyErrorBoundary>
  </div>
);
```


### 元素和组件的区别
- React 元素是不可变对象。元素描述了你在屏幕上想看到的内容。一旦被创建，你就无法更改它的子元素或者属性。一个元素就像电影的单帧：它代表了某个特定时刻的 UI。更新 UI 唯一的方式是创建一个全新的元素，并将其传入 ReactDOM.render()。
- React 组件分为函数组件和类组件～
- 可以理解成，元素就是类组件render里的部分，或者是函数组件return的部分，或者定义的单个jsx变量如```let element = <div>111</div>```,属性也可以是是用户自定义的组件。

### 书写规范
- 组件名必须大写，小写字母开头的组件视为原生 DOM 标签
- 事件的命名采用小驼峰式
- React 组件都必须像纯函数一样保护它们的 props 不被更改。
- 不要直接修改 State
- 目录嵌套控制在最多三到四个层级内

### 其他小问题
> https://github.com/semlinker/reactjs-interview-questions

- 什么是 JSX?
- 什么是 Pure Components?
- refs 有什么用? —— 获取类实例，获取dom，不能在函数组件使用ref，因为它没有实例。
- 什么是 forward refs? —— HOC、函数组件、类组件转发refs用
- callback refs 和 findDOMNode() 哪一个是首选选项?
- 什么是状态提升
- 我可以在 React 应用程序中可以使用 web components 么?
- 是否可以在不调用 setState 方法的情况下，强制组件重新渲染?
- 如何使用动态属性名设置 state ? —— es6 新特性 计算属性
- 在 React 中什么是严格模式及作用
- 如何有条件地应用样式类? —— classnames 或 自己拼字符串
- 构造函数的主要目的是什么 —— 绑定this
- 什么时候组件的 props 属性默认为 true
- 如何在 JSX 回调中绑定方法或事件处理程序，及如何穿参 —— 注意public class fields
- 什么是 Portal —— 子节点渲染到父组件以外的 DOM 节点
- 为什么不需要使用继承
- 在 HOCs 中 forward ref 的目的是什么 —— ref只传给它的包裹的组件，需要再转发
- 什么是 Keyed Fragments —— key 是唯一可以传递给 Fragment 的属性
- displayName 类属性的用途是什么? —— devTools显示名称
- 为什么组件名称应该以大写字母开头
- 在 React 中如何使用 innerHTML? —— dangerouslySetInnerHTML 属性
- 在定义类组件时，什么是必须的方法?
- 在 React Intl 中有哪两种格式化方式 —— <FormattedMessage/>组件，formatMessage API
- 如何在页面加载时聚焦一个输入元素
- 在渲染方法中使用箭头函数好么
- 如何防止函数被多次调用? —— 防抖、截流、RequestAnimationFrame
- super() 和 super(props) 有什么区别? —— 使用前者就拿不到props了
- HTML 和 React 事件处理有什么区别
  - react合成事件SyntheticEvent是对原生事件的跨浏览器包装
  - 一个是onclick， 一个是onClick
  - 阻止默认行为：前者reutrn false， 后者需要明确地调用 preventDefault() 
- react-dom 包的用途是什么? —— 提供和Dom有关的方法，如ReactDom.render
- JSX 如何防止注入攻击 —— 会在渲染 JSX 中嵌入的任何值之前对其进行转义，重点转译```<>&```
- 如何更新已渲染的元素 —— 重新render，元素不能被更改
- 我可以导入一个 SVG 文件作为 React 组件么 —— yes
- 什么是渲染属性 —— renderprops
- 对于渲染属性来说是否必须将 prop 属性命名为 render? —— 不用
- 如何实现 Server Side Rendering 或 SSR? —— ReactDOMServer
- React16哪些生命周期方法将被弃用 —— ...WillMount、...WillReceiveProps、...WillUpdate
- 如何防止组件渲染 —— return null
- registerServiceWorker用途 —— 缓存资源和其他文件，当用户离线或弱网络时，仍可在屏幕上看到结果
- React Mixins 是什么 —— 功能复用，进化成HOC了
- 如何实现默认页面或 404 页面?
- 如何设置非受控组件的默认值 —— defaultValue/defaultChecked
- getDerivedStateFromProps —— 让组件在 props 变化时更新 state
- getSnapshotBeforeUpdate —— 在发生更改之前从 DOM 中捕获一些信息给...DidUpdate
- 如何使用 setState 防止不必要的更新?
  ```js
  // 返回null阻止更新
  getUserProfile = user => {
    const latestAddress = user.address;
      this.setState(state => {
        if (state.address === latestAddress) {
          return null;
        } else {
          return { title: latestAddress };
        }
      });
  };
  ```
- 受控组件和非受控组件
- 有状态组件无状态组件
- React 是“自上而下”“单向”的数据流
- 事件绑定this丢失问题，可以使用箭头函数，最好用public class fields语法
- 什么是上下文（Context）—— 避免层层传递一些属性，
  ```js
  const ThemeContext = React.createContext('light');
  <ThemeContext.Provider value="dark">
    <Toolbar />
  </ThemeContext.Provider>
  ```
- 如果在初始状态中使用 props 属性会发生什么? —— 赋值失败
- React memo 是什么 —— React.memo包裹函数组件实现类似PureComponent的作用
