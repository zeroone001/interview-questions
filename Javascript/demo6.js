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