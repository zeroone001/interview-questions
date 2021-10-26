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

