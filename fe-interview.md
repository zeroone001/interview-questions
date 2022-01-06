1. 举例说明常用的BOM属性和方法有哪些?
> BOM 浏览器对象模型

```javascript
window.history
window.location
screen
location
```

2. 举例说明常用的cursor取值有哪些？

```css
.css {
    cursor: pointer;
    cursor: not-allowed;
    cursor: help;
    cursor: none;
    cursor: move;
}
```

3. 如何判断当前脚本运行在浏览器还是node环境中？

`typeof window === 'object'`

4. 写一个方法，传入数字x，从一个一维数组里找到两个数字符合“n1 + n2 ＝ x”?

```javascript

```

5. 写一个方法检测页面中的所有标签是否正确闭合
```javascript
(function () {
let dom_str = document.querySelector('body').outerHTML;
let stack = [];
for (let i in dom_str) {
    const v = dom_str[i];
    if (v === '<') {
        stack.push(v);
    } else if (v === '>') {
        let peak = stack.pop();
        if (peak !== '<') return false;
    }
}
if (stack.length > 0) return false;
return true;
})();
```