## 闭包



## 堆栈


## 深浅克隆 demo4.js

对象最好不要超过7层

浅克隆就是只克隆了第一层






### 堆栈内存和闭包作用域 -> demo1

函数堆对象 + 上下文作用域 = 闭包

闭包： 私有化变量



* 堆： 存储引用类型值的空间
* 栈： 存储基本类型的值和指定代码的环境


## symbol



## valueOf


## 一道阿里的函数的题录 demo5.js
、



## 同步异步

异步： async await setTimeout Promise

事件队列: （先执行微任务，再执行宏任务）
1. 微任务： await resolve() 【哪个在前面，先执行哪个，队列】
2. 宏任务： setTimeout 事件绑定 ajax


PS : new Promise 的时候，会立即执行里面的函数

栈



## 箭头函数

不能被new， 没有原型， 没有构造函数

## 柯里化

下面就是函数柯里化

```js
const curried = (a) => {
    return (b) => {
        return a + b; 
    }
}
const addTen = curried(5);

addTen(5); // 10
```

## 手写深拷贝

```js
function deepClone(obj = {}) {
    if (typeof obj !== 'object' || obj === null) {
        return obj;
    }
    let result;
 
    if (obj instanceof Array) {
        result = [];
    } else {
        result = {}
    }

    for (let key in obj) {
        if (obj.hasOwnProperty(key)) {
            result[key] = deepClone(obj[key]);
        }
    }
    return result;
}
```


## 基础类型

基础类型， 直接存在栈里； 引用类型是存放内存地址在栈里 

引用类型的实际的值，  存在堆里面

## 引用类型

对象，数组，null, 特殊引用类型，函数function 


## typeof 运算符

* 可以识别出所有的值类型
* 判断函数
* 判断是否是引用类型


## 类型转化


```js
if (obj.a == null) {}
// 相当于
if (obj.a === null || obj.a === undefined) {}
```

truly 变量： `!!a === true`