let test = (function(i){
    return function () {
        alert(i *=2);
    }
})(2);
test(5); // '4'  

// 原因是alert转化出来的都要是字符串


