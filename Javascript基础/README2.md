# JS 基础



## 作用域和闭包



 ### this



```
function fn () {
	console.log(this);
}
const fn1 = fn.call({a: 1}) // {a: 1}
fn1() // {a: 1}

const fn2 = fn.bind({b: 1})
fn2(); // {b: 1}
```



## 手写bind 函数



```js
Function.prototype.bind = function () {
    // 参数转化为数组
    let args = Array.prototype.slice.call(arguments);
    
    // 数组的第一个参数，作为要绑定的this
    const p = args.shift();
    // 当前函数
    const that = this;
    return function () {
        return that.apply(p, args);
    }
}
```



## 手写apply



```js
Function.prototype.apply = function (context) {
    if (context == null) {
        context = window;
    }
    context.fn = this;
    const args = [...arguments].slice(1);
    let result;
    if (args[0]) {
        result = context.fn(...args[0]);
    } else {
        result = context.fn();
    }
    delete context.fn
    return result;
}
```



## 手写call



```js
Function.prototype.call = function (context) {
    let args = [...arguments].slice(1);
    context.fn = this;
    const result = context.fn(...args);
    delete context.fn;
    return result;
}
```



## 异步



```js
// 1,3,5,4,2
console.log(1);

setTimeout(() => {
    console.log(2);
}, 1000)

console.log(3);

setTimeout(() => {
    console.log(4);
}, 0)
console.log(5);
```

## DOM API 

```js
// 创建文档片段，目的是为了减少操作DOM的次数
const frag = document.createDocumentFragment();

```

## 事件

* 事件绑定
* 事件冒泡
* 事件代理

## 手写一个ajax

XMLHttpRequest

```js
const xhr = new XMLHttpRequest();
// true  指的是异步的请求 
xhr.open('GET', '/v1/url/id', true);
xhr.onreadystatechange = function () {
    if (xhr.readyState === 4) {
        if (xhr.state === 200) {
            
        }
    }
}
xhr.send(null);
```

## 跨域

* jsonp
* CORS 设置 http header

## cookie

* 存储大小，最大4KB
* http请求的时候需要发送到服务器端，增加了请求的数据量

## localStorage & sessionStorage

* HTML5专门为了存储而设计的，最大可存储5M，而且是针对域名来说的
* API简单

### 区别

* localStorage 数据会永久存储，除非代码或手动删除
* sessionStorage 数据只存在于当前会话，浏览器关闭则清空


