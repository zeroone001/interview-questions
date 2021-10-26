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
* 

## 类型转化




```js
if (obj.a == null) {}
// 相当于
if (obj.a === null || obj.a === undefined) {}
```

truly 变量： `!!a === true`



## class



class的本质是函数，可见是语法糖



`typeof People === 'function'`

每个class都有显式原型，

每个实例都有隐式原型，指向class的显示原型



## 原型



隐式原型：` xialuo.__proto__`

等于

显式原型： `Student.prototype`



## 原型链



## 作用域



函数作用域

全局作用域

ES6块级作用域



## 自由变量



一个变量在当前作用域没有定义，但被使用了

向上级作用域，一层一层的依次寻找，直到找到为止



## 闭包 closure



* 函数作为参数被传递
* 函数作为返回值被返回

应该在定义时候的作用域，向上级寻找

```js
// 函数作为返回值
function createFun () {
    let a = 100;
    return function () {
        console.log(a) // 应该在定义时候的作用域，向上级寻找
    }
}
let fn = createFun();
let a = 200;
fn() // 100

// 函数作为参数

function print(fn) {
    let a = 100;
    fn()
}
let a = 200;
function fn () {
    console.log(a) // 应该在定义时候的作用域，向上级寻找
}
print(fn)
```

总结： 自由变量的查找，是在函数**定义**的地方，向上级查找，不是在**执行**的地方

