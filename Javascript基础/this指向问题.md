# this指向问题

函数的this是在调用的时候绑定的，完全取决于函数的调用位置

## 全局上下文

this都是指向顶层对象（浏览器中是window）

## 函数上下文

```js
// 严格模式
'use strict'
var name = 'window';
var doSth = function(){
    console.log(this);
}
doSth(); // undefined
```

在严格模式下是undefined， 非严格模式下，是window



### 参考资料

[面试官问：JS的this指向](https://juejin.cn/post/6844903746984476686)

