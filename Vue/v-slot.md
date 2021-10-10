# v-slot 插槽

```html
<!-- parent -->

<hello-world>
	<template v-slot:header="{ user }">
    	这是子组件的数据---> {{ user.firstName }}
    </template>
    <template #footer>
    	这是父组件的数据 ----> {{ parent.name }}
    </template>
</hello-world>
```

```html
<!-- child -->
<template>
	<div>
        下面是插槽里面的数据
        <slot name="header"></slot>
        <slot name="footer">
        	这是后备内容
        </slot>
    </div>
</template>
```

1. 具名插槽的缩写 `#footer` === `v-slot:footer`
2. 动态插槽名 `<template v-slot:[dynamicSlotName]>`
3. 解构插槽prop + 作用域插槽 `v-slot:header="{ user }"`
4. 具名插槽 `v-slot:header`
5. 后备内容`<slot name="footer">这是后备内容</slot>`