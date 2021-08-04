https://github.com/acdlite/react-fiber-architecture

 React 也使用一个名为 “fibers” 的内部对象来存放组件树的附加信息

|27 | [什么是 React Fiber?](#什么是-react-fiber) |

https://www.zhihu.com/question/278328905
https://zhuanlan.zhihu.com/p/37098539



- 为什么用React Fiber: React的Reconcilation阶段在v15的时候采用递归对比vdom树，递归无法中断，JS线程被长期占用，从而1.导致用户触发的事件得不到响应(JS引擎是单线程), 2.掉帧、页面卡顿。(JS引擎线程和GUI线程互斥)
- 目标：高优先级的进程或者短进程优先运行，不能让长进程长期霸占资源
- React如何处理：通过Fiber架构，让Reconcilation过程变成可中断，'适时'地让出控制权给浏览器去处理高优先级的其他任务，待浏览器空闲后再继续执行。
- Fiber实现原理：
  - 不卡顿，至少保持60hz的刷新频率，也就是1s至少绘制60帧，每帧能分到的时间片就是16ms




#  webworker