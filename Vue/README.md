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



## Vue中能监听到数组变化的方法有哪些

Vue源码里其实把这几个方法给重写了

```
push()
pop()
shift()
unshift()
sort()
reverse()
```

## 自定义指令的生命周期（钩子函数）有哪些

```js
bind
inserted
update
componentUpdated
unbind
```

## Vue 怎么定义全局方法

有三种

1. 全局mixin

```vue
import mixinObj from './mixinObj.js';
Vue.mixin(mixinObj);
```

2. Plugins 的方式

```js
// plugins.js
const install = (Vue) => {
	Vue.prototype.demoFun = function () {
        console.log('我已经在Vue原型链上')
    }
}
export default {
    install
}
// main.js
import plugins from './plugins.js'
Vue.use(plugins)
```

3. `this.$root.$on`

   ```js
   this.$root.$on('demo',function(){
       console.log('test');
   })
   this.$root.$emit('demo')；
   this.$root.$off('demo')；
   ```

## 自定义组件上使用v-model

[官方文档](https://cn.vuejs.org/v2/guide/components-custom-events.html#%E8%87%AA%E5%AE%9A%E4%B9%89%E7%BB%84%E4%BB%B6%E7%9A%84-v-model)

```html
<!-- parent -->
<template>
<child v-model="value"></child>
</template>

<!-- child -->
<template>
<div>
 {{ value }}   
 </div>
</template>
<script>
    export default {
        props: {
            value: Number
        },
        model: {
            prop: 'value',
            event: 'update'
        },
        methods: {
            clickFun (val) {
                this.$emit('update', val)
            }
        }
    }
</script>
```

## 在Vue项目中如何引入第三方库（比如jQuery）？有哪些方法可以做到？

1. externals 方法

   ```html
   <script
     src="https://code.jquery.com/jquery-3.1.0.js"
     integrity="sha256-slogkvB1K3VOkzAI8QITxV3VzpOnkeNVsKvtkYLMjfk="
     crossorigin="anonymous"
   ></script>
   ```

```javascript
module.exports = {
  //...
  externals: {
    jquery: 'jQuery',
  },
};
```

2. Pluginscd

```js
plugins: [
         new webpack.ProvidePlugin({
             $:"jquery",
             jQuery:"jquery",
             "windows.jQuery":"jquery"
         })
     ]

```

