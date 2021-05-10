# Sleep
> [js实现sleep功能的几种方式](https://blog.csdn.net/Polaris_tl/article/details/99435320?utm_medium=distribute.pc_relevant.none-task-blog-baidujs_baidulandingword-0&spm=1001.2101.3001.4242)

```javascript
// 方式一
const sleep = time => {
  return new Promise(resolve => setTimeout(resolve,time))
}

sleep(3000).then(()=>{
  console.log(1)
})

async output() {
  console.log(1)
  await this.sleep(3000)
  console.log(3)
},


// 方式二
const sleep = time => {
  const startTime = Date.now();
  while(Date.now() - startTime <= time);
},

sleep(3000)
```



