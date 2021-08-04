### 垃圾回收机制

- 为什么垃圾回收：
  - v8被限制了内存的使用（64位约1.4G ， 32位约0.7G）
  - JS运行的时候栈内存是自动分配和回收的，堆内存由JS引擎(V8)手动进行释放

- 过程
  - 分为新生代 —— Scavenge、老生代 —— Mark-Sweep & Mark-Compact
  - Scavenge
    - 新生代堆比较小，分为两部分: from-space to-space
    - 标记活动对象和非活动对象 —— 可达性
    - 把活动对象从from-space移动到to-space
    - 释放to-space，互换form-space和to-space
  - Mark-Sweep & Mark-Compact
    - 新生代空间中的对象满足一定条件(多次回收未被清理)，就会晋升到老生代
    - Mark-Sweep对老生代进行标记，标记后清除未被标记的对象(非活动对象)
    - Mark-Sweep后会有很多内存碎片，Mark-Compact将所有的活动对象往一端移动，移动完成后，直接清理掉边界外的内存。
