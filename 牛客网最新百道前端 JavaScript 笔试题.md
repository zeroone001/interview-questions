# 牛客网最新百道前端 JavaScript 笔试题

[https://mp.weixin.qq.com/s/YfqmSDUSGSCW7V_5ReXujw](https://mp.weixin.qq.com/s/YfqmSDUSGSCW7V_5ReXujw)



DCADC

1. ```
   以下不属于 typeof 运算符返回值的是？
   ```

```
A. "string"
B. "function"
C. "object"
D. "null"
```

1. ```
   执行以下代码，错误的输出结果是
   ```

```
A. 输入：typeof {"x":1} 输出："object" 
B. 输入：typeof 1 输出："number" 
C. 输入：typeof [{x:1}] 输出："array" 
D. 输入：typeof NaN 输出："number"
复制代码
```

1. ```
   可以用typeof来判断的基本类型有
   ```

```
A. undefined
B. null
C. array
D. object
```

1. ```
   以下不属于JavaScript基本数据类型的是：
   ```

```
A. Boolean
B. undefined
C. Symbol
D. Array
```

1. ```
   以下关于JavaScript中数据类型的说法错误的是\(\)
   ```

```
A. 数据类型分为基本数据类型和引用数据类型
B. JavaScript一共有8种数据类型
C. Object是引用数据类型，且只存储于堆(heap)中
D. BigInt是可以表示任意精度整数的基本数据类型，存储于栈(stack)中
```



CADADCD

1. ```
   请选择结果为ture的表达式？
   ```

```
A. null instanceof Object
B. null === undefined
C. null == undefined
D. NaN == NaN
```



1. ```
   下列代码结果为 true 的是？
   ```

```
A. Symbol.for('a') === Symbol.for('a')
B. Symbol('a') === Symbol('a')
C. NaN === NaN
D. {} === {}
```

1. ```
   根据如下变量，下列表达式中返回值为true的是
   ```

```
var a = 1;
var b = [];
var c = '';
var d = true;
复制代码
A. (a || b) === true
B. (b && c) === true
C. (c && d) === true
D. (d || a) === true
```

1. ```
   1==true的返回值是true，这句话是否正确？
   ```

```
A. T
B. F
```

1. ```
   下面代码输出为true的是\?
   ```

```
A. console.log([] === []);
B. console.log(undefined == 0);
C. console.log(undefined == false);
D. console.log(false == '');
```

1. ```
   下面代码输出为true的是\?
   ```

```
A. console.log([] === []);
B. console.log(undefined == 0);
C. console.log(undefined == false);
D. console.log(false == '');
```



A BC


B 

B A A B B C B 



## 去重操作

```js
const a = Array.from(new Set(nums));

const a = arr.filter((item, i) => {
   return arr.indexOf(item) === i;
});

const newNums = nums.reduce((acc, n, i) => {
    return [].concat(acc, nums.indexOf(n) === i ? n : []
)
})
```












