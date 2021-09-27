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