###### 手写二进制转 Base64
```javascript
// 字符转base64
let data1 = window.btoa('this is an egg');

let data2 = window.atob(data1); 
// 字符转二进制
function charToBinary(text) {
  var code = "";
  for (let i of text) {
    // 字符编码
    let number = i.charCodeAt().toString(2);
    // 1 bytes = 8bit，将 number 不足8位的0补上
    for (let a = 0; a <= 8 - number.length; a++) {
       number = 0 + number;
    }
    code += number;
  }
  return code;
}
```