|35 | [什么是高阶组件（HOC）?](#什么是高阶组件hoc) |
|216 | [在 React 中什么是渲染劫持?](#在-react-中什么是渲染劫持) |
|217 | [什么是 HOC 工厂实现?](#什么是-hoc-工厂实现) |
|254 | [HOC 有哪些限制?](#hoc-有哪些限制) |
|36 | [如何为高阶组件创建属性代理?](#如何为高阶组件创建属性代理) |

### HOC
- 高阶组件是参数为组件，返回值为新组件的函数。
- 组件是将 props 转换为 UI，而高阶组件是将组件转换为另一个组件。
- HOC 不会修改传入的组件，HOC 是纯函数，没有副作用

装饰器