# 剑指 Offer 09. 用两个栈实现队列
> https://leetcode-cn.com/problems/yong-liang-ge-zhan-shi-xian-dui-lie-lcof/
### 一、测试用例
```
["CQueue","appendTail","deleteHead","deleteHead","deleteHead"]
[[],[3],[],[],[]]
["CQueue","deleteHead","appendTail","appendTail","deleteHead","deleteHead"]
[[],[],[5],[2],[],[]]
```
### 二、理解
栈只能后进先出，即只能使用数组的pop和push，而deletHead需要shift，简单理解就是用 两个栈 + pop和push 队列的push和shift
### 三、实现
```javascript
var CQueue = function() {
    this.stackA = []
    this.stackB = []
};

/** 
 * @param {number} value
 * @return {void}
 */
CQueue.prototype.appendTail = function(value) {
    this.stackA.push(value)
};

/**
 * @return {number}
 */
CQueue.prototype.deleteHead = function() {
    if(this.stackB.length)  return this.stackB.pop()
    if(!this.stackA.length) return -1
    while(this.stackA.length) {
        this.stackB.push(this.stackA.pop())
    }
    return this.stackB.pop();
};

/**
 * Your CQueue object will be instantiated and called as such:
 * var obj = new CQueue()
 * obj.appendTail(value)
 * var param_2 = obj.deleteHead()
 */
```
#### 四、类似题
- [232. 用栈实现队列](https://leetcode-cn.com/problems/implement-queue-using-stacks/)
- [面试题 03.04. 化栈为队](https://leetcode-cn.com/problems/implement-queue-using-stacks-lcci/)
