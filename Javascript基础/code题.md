# code 

## 1

```js

const length = 100;
function fn (a) {
    return this.length + 1;
}
const obj = {
    length: 12,
    test1: function() {
        return fn()
    }
}
/* 返回1， 原因是 window.length === 0 下面代码的执行环境是window */
obj.test2 = fn;
console.log('1->', obj.test2()); // 12 + 1 = 13
console.log('2->', fn()); // 1
obj.test1(); // 1
```

## 2

```js
let obj = {
    a: 100,
    b: [10, 20, 30],
    c: {
        x: 10
    },
    d: /^\d+$/
};

let obj2 = {
    ...obj
};

obj2.a = 213312;
console.log(obj2, obj);
```

## 3 

```js
let test = (function(i){
    return function () {
        alert(i *=2);
    }
})(2);
test(5); // '4'  

// 原因是alert转化出来的都要是字符串

```

## 4

```js
// 深浅克隆 demo4.js

let obj = {
    a: 100,
    b: [10, 20, 30],
    c: {
        x: 10
    },
    d: /^\d+$/
};

let obj2 = {};

// 方法一
for (let key in obj) {
    if (!obj.hasOwnProperty(key)) {
        break;
    }
    obj2[key] = obj[key];
}

// 方法2

let obj3 = {
    ...obj
};


// 深克隆

let obj4 = JSON.parse(JSON.stringify(obj));

// 方案2 使用lodash

import _ from 'lodash'
var obj = {id:1,name:{a:'xx'},fn:function(){}};
var obj2 = _.cloneDeep(obj);
obj2.name.a = 'obj2';
console.log(obj,obj2)

// 方案三 使用递归
// 这个方案就是比较麻烦

function deepClone (obj) {
    if (obj === null) return null;
    if (typeof obj !== 'object') return obj;

    // 正则
    if(obj instanceof RegExp) {
        return new RegExp(obj);
    }
    // 日期

    if (obj instanceof Date) {
        return new Date(obj);
    }
    // 不直接创建空对象的目的： 克隆的结果和之前保持一个类
    let newObj = new obj.constructor;
    for (let key in obj) {
        if (obj.hasOwnProperty(key)) {
            newObj[key] = deepClone(obj[key])
        }
    }
    return newObj;
}


```

## 5

```js
/*
    var 会令变量提升，声明
    function，会提升并且定义
*/

function Foo () {
    getName = function () {
        console.log(1);
    }
    return this;
}
Foo.getName = function () {
    console.log(2);
} 

Foo.prototype.getName = function () {
    console.log(3);
} 
// 定义在后面，所以覆盖5
var getName = function () {
    console.log(4);
}
// 提升到前面
function getName () {
    console.log(5);
}

Foo.getName(); // 2

getName(); // 4

Foo().getName() // 1 ?

getName(); // 1

new Foo.getName() // 2

new Foo().getName() // 3

new new Foo().getName() // 3
```

## 6

```js
var a = ?;
if (a == 1 && a == 2 && a == 3) {
    console.log(1);
}

var a = {
    i: 0,
    toString () {
        return ++this.i;
    }
};

// 数据劫持
var a = 0; // 这里不能用let 因为放不到window上

Object.defineProperty(window, 'a', {
    get () {
        return ++a;
    },
    set () {

    }
});

var a = [1,2,3]
a.toString = a.shift;

/* 
    方案1： 数据劫持
    方案二： toString
    方案三： 数组，shift
*/

/*
    == 的规则
    对象==字符串， 对象.toString 变为字符串

    null == undefined

    NaN == NaN 不相等

    剩下的都转化为数字， '1' == true

*/
```

## 3 

```js

```

## 3 

```js

```

## 3 

```js

```

## 3 

```js

```

## 3 

```js

```