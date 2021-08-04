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

