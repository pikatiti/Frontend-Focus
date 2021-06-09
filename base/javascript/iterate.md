# 循环遍历
### 常见Array遍历
|方法|返回|
|--|--|
|map|新数组|
|filter|新数组|
|forEach|undefined|
|reduce|取决于传入函数|
|some|有一个元素满足返回true|
|every|所有元素都满足返回true|
|find|存在——>该元素，不存在——>undefined|
|findIndex|存在——>该元素索引，不存在——>-1|

<font color=red>以上不能中断指代通过return或break跳出循环，通过throw error以上均可跳出循环</font>



- some()，every()
### Object遍历

### 通用遍历
while、do...while、for、for...in...、for...of
### 常见问题
- for...in... 和 for...of... 的区别