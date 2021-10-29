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
* API很难用

## localStorage & sessionStorage

* HTML5专门为了存储而设计的，最大可存储5M，而且是针对域名来说的
* API简单

### 区别

* localStorage 数据会永久存储，除非代码或手动删除
* sessionStorage 数据只存在于当前会话，浏览器关闭则清空


## 隐式类型转换

if , 逻辑运算， ==， +号

## 手写深度比较， isEqual

主要是用了递归

```js
function isObject(params) {
    return typeof params === 'object' && params !== null;
}
function isEqual(obj1, obj2) {
    if (!isObject(obj1) || !isObject(obj2)) {
        return obj1 === obj2;
    }

    if (obj1 === obj2) {
        return true
    }

    const len1 = Object.keys(obj1);
    const len2 = Object.keys(obj2);
    if (len1 !== len2) return false;

    for (let key in obj1) {
        const res = isEqual(obj1[key], obj2[key]);
        if (!res) return false;
    }
    return true;
}
```

## 函数声明，函数表达式

* 函数声明，会预加载
* 函数表达式

## Object 

* new Object()  创建一个对象，也就是 {}, 自带prototype
* Object.create() 必须传入一个参数

```js
// 创建一个空对象，然后把原型指向传入的参数
Object.create(null) // 这样就没有原型了
Object.create({aaa: 1}) // 指定一个原型 {aaa: 1}
```

## this 场景题

函数 this 的值，在执行的时候，才知道

```js
const user = {
    name: 'lys',
    sum: () => {
        console.log(this.name); // undefined
    },
    getName: function (params) {
        console.log(this.name); // lys
    }
}
const fun = user.sum;
console.log(user.sum()); // undefined
fun(); // undefined
```

## 作用域

```js
// 返回4个4， 因为index的作用域在外层
let index;
for (index = 0; index < 4; index++) {
    setTimeout(() => {
        console.log(index);
    }, 0);
}
```

## 手写trim

```js
String.prototype.trim = function (params) {
    return this.replace(/^\s+/, '').replace(/\s+$/, '');
};
```

## 捕获JS中的异常

```js
window.onerror = function () {

}
```

## 什么是JSON

* JSON是一种数据格式，本质上是一段字符串
* JSON格式和JS对象结构一致，对JS语言更友好


## 获取当前页面URL

* location.search
* URLSearchParams, 新API 兼容性不太好 这个很简单

substr(start, length)
substring(start, end)
slice(start, end)

```js
function query(name) {
    const search = location.search.substr(1);
    // * 是0个或多个 >=0
    const reg = new RegExp(`(^|&)${name}=([^&]*)(&|$)`, 'i'); 

    const res = search.match(reg);
    if (res == null) {return null}
    return res[2];
}
```

## 将URL参数解析为JS对象



## 手写flatern 考虑多层级

也就是拍平

```js
// 只能拍平一层
Array.prototype.concat.apply([], arr);

function flat(arr) {
    // 判断各个元素里面是否有数组
    const isDeep = arr.some((item) => item instanceof Array);
    // 递归的暂停条件
    if (!isDeep) {
        return arr;
    }

    const res = Array.prototype.concat.apply([], arr);

    return flat(res); // 递归
}
```

## 数组去重


1. forEach 循环，然后使用indexOf，或者includes来判断新数组，是否有这个item
2. Set方式

```js
function unique(arr) {
    const set = new Set(arr);
    return [...set];
}
```









