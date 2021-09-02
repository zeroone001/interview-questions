## CSS 相关面试题



#### BFC 块级格式化上下文

[https://juejin.cn/post/6844903496970420237](https://juejin.cn/post/6844903496970420237)



BFC ,块级格式化上下文，他是一个独立的渲染区域，只有Block-level box参与， 它规定了内部的Block-level Box如何布局，并且与这个区域外部毫不相干。

BFC，简单理解，就是被容器所包裹，里面的元素在布局上不会影响外面的元素。

##### BFC的生成

* `overflow:hidden`
* `position: absolute; position: fixed`
* `display: inline-block; display: flex`
* `display: table-cell`



####  static和 relative的区别 

