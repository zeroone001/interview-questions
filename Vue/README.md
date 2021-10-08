# Vue 中级



## Vue组件里的定时器要怎么销毁？

目的是为了防止内存泄漏

1. 如果页面有多个定时器，那么可以在data里面创建一个对象，存放 timer, 给每个定时器取一个名字，一一映射在对象timer里面。

2. ```js
   export default {
       beforeDestroy () {
           for(let key in this.timer) {
               clearInterval(key);
           }
       }
   }
   ```

   2. 如果只是单个定时器

   ```js
   export default {
       mounted () {
          const timer = setInterval(() =>{}, 500);
           this.$once('hook:beforeDestroy', () => {
              clearInterval(timer);
           }) 	
       }
   }
   ```

   

