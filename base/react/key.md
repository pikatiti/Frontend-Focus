如果列表项目的顺序可能会变化，我们不建议使用索引来用作 key 值，因为这样做会导致性能变差，还可能引起组件状态的问题。可以看看 Robin Pokorny 的[深度解析使用索引作为 key 的负面影响](https://medium.com/@robinpokorny/index-as-a-key-is-an-anti-pattern-e0349aece318)这一篇文章

要是你有兴趣了解更多的话，这里有一篇文章[深入解析为什么 key 是必须](https://react.docschina.org/docs/reconciliation.html#recursing-on-children)的可以参考。





|18 | [什么是 "key" 属性，在元素数组中使用它们有什么好处?](#什么是-key-属性在元素数组中使用它们有什么好处) |
|268 | [keys 是否需要全局唯一?](#keys-是否需要全局唯一) |
|64 | [索引作为键的影响是什么?](#索引作为键的影响是什么) |
|267 | [安全地使用索引作为键的条件是什么?](#安全地使用索引作为键的条件是什么) |

# Key

- 元素的 key 只有放在就近的数组上下文中才有意义,即key应当放在最外层，只是在兄弟节点之间必须唯一
- key 会传递信息给 React ，但不会传递给你的组件。如果你的组件中需要使用 key 属性的值，请用其他属性名显式传递这个值。
- 如果你选择不指定显式的 key 值，那么 React 将默认使用索引用作为列表key
- key的作用
  - key是一种身份标识标识，react利用key来识别组件
  - key 帮助 React 识别那些元素被增删改了
  - 