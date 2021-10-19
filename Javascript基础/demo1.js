
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
