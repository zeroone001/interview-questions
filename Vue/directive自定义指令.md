# directive 自定义指令

## 注册一个全局的指令

```js
// 注册一个全局自定义指令 `v-focus`
Vue.directive('focus', {
  // 当被绑定的元素插入到 DOM 中时……
  inserted: function (el) {
    // 聚焦元素
    el.focus()
  }
})
```



## 注册一个局部的指令

```js
directives: {
  focus: {
    // 指令的定义
    inserted: function (el) {
      el.focus()
    }
  }
}
```

## 钩子函数

一共五个，分别是bind, inserted, update, componentUpdated, unbind

跟Vue3的钩子函数是不一样的

```js
Vue.directive('fo', {
  /* 只调用一次，指令第一次绑定到元素时调用。在这里可以进行一次性的初始化设置 */
  bind: (el, binding, vnode) => {

  },
  /* 被绑定元素插入父节点时调用 (仅保证父节点存在，但不一定已被插入文档中) */
  inserted: (el) => {
    console.log('el', el);
    el.style.color = 'red';
  },
  /* 所在组件的 VNode 更新时调用，但是可能发生在其子 VNode 更新之前 */
  update: () => {

  },
  /* 指令所在组件的 VNode 及其子 VNode 全部更新后调用 */
  componentUpdated: () => {

  },
  /* 只调用一次，指令与元素解绑时调用 */
  unbind: () => {

  }
});
```

* `el`：指令所绑定的元素，可以用来直接操作 DOM。
* binding ：一个对象，包含以下 property：
  * `name`：指令名，不包括 `v-` 前缀。
  * `value`：指令的绑定值，例如：`v-my-directive="1 + 1"` 中，绑定值为 `2`。
  * `oldValue`：指令绑定的前一个值，仅在 `update` 和 `componentUpdated` 钩子中可用。无论值是否改变都可用。
  * `expression`：字符串形式的指令表达式。例如 `v-my-directive="1 + 1"` 中，表达式为 `"1 + 1"`。
  * `arg`：传给指令的参数，可选。例如 `v-my-directive:foo` 中，参数为 `"foo"`。
  * `modifiers`：一个包含修饰符的对象。例如：`v-my-directive.foo.bar` 中，修饰符对象为 `{ foo: true, bar: true }`。
* `vnode`：Vue 编译生成的虚拟节点
* `oldVnode`：上一个虚拟节点，仅在 `update` 和 `componentUpdated` 钩子中可用。

`v-fo:arg1="foValue"` 这里特别注意一下，arg 也就是指令参数，通过`binding.arg === 'arg1'`

## 动态指令参数

```html
 <p v-fo:[direction]="200">I am pinned onto the page at 200px to the left.</p>
```

```js
Vue.directive('fo', {
  bind: function (el, binding, vnode) {
    el.style.position = 'fixed'
    var s = (binding.arg == 'left' ? 'left' : 'top')
    el.style[s] = binding.value + 'px'
  }
})

new Vue({
  el: '#dynamicexample',
  data: function () {
    return {
      direction: 'left'
    }
  }
})
```

