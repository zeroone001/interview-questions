## CSS 相关面试题



#### BFC 块级格式化上下文

[https://juejin.cn/post/6844903496970420237](https://juejin.cn/post/6844903496970420237)



BFC ,块级格式化上下文，他是一个独立的渲染区域，只有Block-level box参与， 它规定了内部的Block-level Box如何布局，并且与这个区域外部毫不相干。

BFC，简单理解，就是被容器所包裹，里面的元素在布局上不会影响外面的元素。

##### BFC的生成

* `overflow: hidden`
* `position: absolute; position: fixed`
* `display: inline-block; display: flex`
* `display: table-cell`

##### BFC 的常见应用

1. 文档流块元素，margin边距折叠问题

```html
 <style>
    * {
        margin: 0;
        padding: 0;
    }
    .demo div {
        width: 40px;
        height: 40px;
    }
    .demo1 {
        margin: 10px 0;
        background: pink;
    }
    .demo2 {
        margin: 20px 0;
        background: blue;
    }
</style>
<div class="demo">
    <div class="demo1"></div>
    <div class="demo2"></div>
</div>

```



使用BFC解决上面问题,利用了

```html
<style>
    * {
        margin: 0;
        padding: 0;
    }
    .demo {
        overflow: hidden;
    }
    .demo div {
        width: 40px;
        height: 40px;
    }
    .demo1 {
        margin: 10px 0;
        background: pink;
    }
    .demo2 {
        margin: 20px 0;
        background: blue;
    }
</style>

<div class="demo">
    <div class="demo1"></div>
</div>
<div class="demo">
    <div class="demo2"></div>
</div>

```



2. 清除浮动

```html
<style>
    * {
        margin: 0;
        padding: 0;
    }
    .demo {
        border: 1px solid pink;
    }
    .demo p {
        float: left;
        width: 100px;
        height: 100px;
        background: blue;
    }
</style>

<div class="demo">
    <p></p>
</div>


<!- 解决方案 ->
<style>
  .demo {
    overflow: hidden;
  }
</style>
```

3. 阻止普通文档流元素，被浮动元素覆盖

```html
<style>
    * {
        margin: 0;
        padding: 0;
    }
    .demo1 {
        width: 100px;
        height: 100px;
        float: left;
        background: pink
    }
    .demo2 {
        width: 200px;
        height: 200px;
        background: blue;
    }
</style>

<div class="demo">
    <div class="demo1">我是一个左侧浮动元素</div>
    <div class="demo2">我是一个没有设置浮动, 也没有触发BFC的元素</div>
</div>
```

解决方案，给demo2加BFC，

```html
<style>
  .demo2 {
    overflow: hidden;
  }
</style>
```

4. 自适应两栏布局

```html
<style>
* {
    margin: 0;
    padding: 0;
}
.container {
}
.float {
    width: 200px;
    height: 100px;
    float: left;
    background: red;
    opacity: 0.3;
}

.main {
    background: green;
    height: 100px;
    overflow: hidden;
}
</style>

<div class="container">
    <div class="float">
        浮动元素
    </div>
    <div class="main">
        自适应
    </div>
</div>

```



####  static和 relative的区别 

static是默认值，没有定位，出现在正常的流中

relative 脱离正常的文本流，但是原来在文本流中的位置依然存在