# Interview

* [Webpack Tree shaking 深入探究](https://juejin.im/post/6844903687412776974)

## 网络通信层

1. 什么叫标签语义化？

合理的标签干合适的事情，可读性

2. 都有哪些标签？都是什么意思？

行内标签 span

块级标签： div

3. 行内标签和块级标签的区别

4. opacity 兼容处理

5. filter还能做哪些事情

6. display: flex


## 学习的视频

刷完： [4天突击大厂常见前端面试题(2020版)](https://www.bilibili.com/video/BV1ek4y1r7GT?p=1)

## 面试题

[前端经典面试题 ( 60道前端面试题包含 JS、CSS、React、网络、浏览器、程序题等)](https://mp.weixin.qq.com/s/RBK318_QiurLqCyaVSFNYg)
[Vue面试题，中级](https://juejin.cn/post/6844903934314676231#heading-18)


generator怎么保存上下文的。
Proxy怎么实现的，用es5写一下。
this设计缺陷。
能不能主动用装饰器。
响应式编程优点。

## vue双向数据绑定

Vue.js 是采用数据劫持, 结合发布者-订阅者模式的方式，通过Object.defineProperty()来劫持各个属性的setter，getter，在数据变动时发布消息给订阅者，触发相应的监听回调。

第一步：需要 observe 的数据对象进行递归遍历，包括子属性对象的属性，都加上 setter和getter
这样的话，给这个对象的某个值赋值，就会触发setter，那么就能监听到了数据变化

第二步：compile解析模板指令，将模板中的变量替换成数据，然后初始化渲染页面视图，并将每个指令对应的节点绑定更新函数，添加监听数据的订阅者，一旦数据有变动，收到通知，更新视图

第三步：Watcher订阅者是 Observer 和 Compile 之间通信的桥梁，主要做的事情是:
1、在自身实例化时往属性订阅器(dep)里面添加自己
2、自身必须有一个update()方法
3、待属性变动dep.notice()通知时，能调用自身的update()方法，并触发Compile中绑定的回调，则功成身退。

第四步：MVVM作为数据绑定的入口，整合Observer、Compile和Watcher三者，通过Observer来监听自己的model数据变化，通过Compile来解析编译模板指令，最终利用Watcher搭起Observer和Compile之间的通信桥梁，达到数据变化 -> 视图更新；视图交互变化(input) -> 数据model变更的双向绑定效果。

Vue实现双向数据绑定是采用数据劫持和发布者-订阅者模式。 数据劫持是利用ES5的Object. defineProperty(obj,key,val)方法来劫持每个属性的getter和setter，在数据变动是发布消息给订阅者，从而触发相应的回调来更新视图

## 清除浮动的方法

1. 使用CSS中的clear:both;（放一个空的div，并设置上述css）,属性来清除元素的浮动
```html
<div class="container clearfix">

    <div class="wrap">aaa</div>

</div>
<style>
.clearfix:after{
    content:""; /*设置内容为空*/
    height:0; /*高度为0*/
    line-height:0; /*行高为0*/
    display:block; /*将文本转为块级元素*/
    visibility:hidden; /*将元素隐藏*/
    clear:both; /*清除浮动*/
}
.clearfix{
    zoom:1; /*为了兼容IE*/
}
</style>
```
2. 给父级元素设置overflow：hidden；或overflow：auto；本质是构建一个BFC

## 如何让一个盒子垂直水平居中

1. 利用定位（常用方法,推荐）

```html
<style>
    .parent {
        width: 500px;
        height: 500px;
        border: 1px solid #000;
        position: relative;
    }
    .child {
        width: 100px;
        height: 100px;
        border: 1px solid #999;
        position: absolute;
        top: 50%;
        left: 50%;
        margin-top: -50px;
        margin-left: -50px;
    }
</style>
```

2. margin: auto

```html
 <style>
    .parent {
        width: 500px;
        height: 500px;
        border: 1px solid #000;
        position: relative;
    }
    .child {
        width: 100px;
        height: 100px;
        border: 1px solid #999;
        position: absolute;
        margin: auto;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
    }
</style>
```

3. 利用display:table-cell

4. 利用display：flex;设置垂直水平都居中

5. 利用transform

```CSS
.child {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
}
```

## 重绘和回流

什么是重绘Repaint和重排 （回流 reflow）
重绘: 当元素的一部分属性发生改变，如外观、背景、颜色等不会引起布局变化，只需要浏览器根据元素的新属性重新绘制，使元素呈现新的外观叫做重绘。 

重排（回流）: 当render树中的一部分或者全部因为大小边距等问题发生改变而需要DOM树重新计算的过程

重绘不一定需要重排（比如颜色的改变），重排必然导致重绘（比如改变网页位置）

最小化重绘和回流的方法：

1、需要要对元素进行复杂的操作时，可以先隐藏(display:"none")，操作完成后再显示

2、需要创建多个DOM节点时，使用DocumentFragment创建完后一次性的加入document

缓存Layout属性值，如：var left = elem.offsetLeft; 这样，多次使用 left 只产生一次回流

3、尽量避免用table布局（table元素一旦触发回流就会导致table里所有的其它元素回流）

4、避免使用css表达式(expression)，因为每次调用都会重新计算值（包括加载页面）

5、尽量使用 css 属性简写，如：用 border 代替 border-width, border-style, border-color

6、批量修改元素样式：elem.className 和 elem.style.cssText 代替 elem.style.xxx

## localstroage、sessionstroage、cookie的区别

共同点：都是保存在浏览器端、且同源的

区别：
1、cookie数据始终在同源的http请求中携带（即使不需要），即cookie在浏览器和服务器间来回传递，而sessionStorage和localStorage不会自动把数据发送给服务器，仅在本地保存。cookie数据还有路径（path）的概念，可以限制cookie只属于某个路径下
2、存储大小限制也不同，cookie数据不能超过4K，同时因为每次http请求都会携带cookie、所以cookie只适合保存很小的数据，如会话标识。sessionStorage和localStorage虽然也有存储大小的限制，但比cookie大得多，可以达到5M或更大
3、数据有效期不同，sessionStorage：仅在当前浏览器窗口关闭之前有效；localStorage：始终有效，窗口或浏览器关闭也一直保存，因此用作持久数据；cookie：只在设置的cookie过期时间之前有效，即使窗口关闭或浏览器关闭
4、作用域不同，sessionStorage不在不同的浏览器窗口中共享，即使是同一个页面；localstorage在所有同源窗口中都是共享的；cookie也是在所有同源窗口中都是共享的
5、web Storage支持事件通知机制，可以将数据更新的通知发送给监听者
6、web Storage的api接口使用更方便

## ts中any和unknown有什么区别？

unknown 和 any 的主要区别是 unknown 类型会更加严格：在对 unknown 类型的值执行大多数操作之前，我们必须进行某种形式的检查。而在对 any 类型的值执行操作之前，我们不必进行任何检查

因为bar是一个未知类型(任何类型的数据都可以赋给 unknown 类型)，所以不能确定是否有msg属性。不能通过TS语法检测；而 unkown 类型的值也不能将值赋给 any 和 unkown 之外的类型变量

any 和 unknown 都是顶级类型，但是 unknown 更加严格，不像 any 那样不做类型检查，反而 unknown 因为未知性质，不允许访问属性，不允许赋值给其他有明确类型的变量。

```ts
let foo: any = 123;
console.log(foo.msg); // 符合TS的语法
let a_value1: unknown = foo;   // OK
let a_value2: any = foo;      // OK
let a_value3: string = foo;   // OK

let bar: unknown = 222; // OK 
console.log(bar.msg); // Error
let k_value1: unknown = bar;   // OK
let K_value2: any = bar;      // OK
let K_value3: string = bar;   // Error
```

## 使用箭头函数应注意什么？

1. this 指向父级
2. 不能使用arguments
3. 不能用作构造函数，new
4. 不用用作Generator函数

## 