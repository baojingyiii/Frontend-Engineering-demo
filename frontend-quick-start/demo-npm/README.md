一、node
1.下载node.js
2.配置国内镜像源
3.npm install -g XXX  //-g:全局安装，所有项目都安装
4.npm run XXX  //XXX是package.json里面的scripts含有的命令

二、vite:快速创建前端项目脚手架（也就是指一个项目的结构）
npm create vite:创建一个脚手架
npm install：安装依赖
npm run dev：项目启动
npm run build:项目打包->生成dist文件
npm run preview:预览打包后的项目

dist下的文件是前端项目，node下的文件是后端项目
前后分离：dist下的内容复制到服务器的web目录
前后不分离：dist下的内容复制到src/main/resources/static/

项目结构:
public:静态资源文件夹  //http://localhost:5173/haha.js 可以直接被访问
src:源代码文件夹
src/assets:静态资源文件夹
src/components:组件文件夹
App.vue: 应用根组件(入口文件)
src/router:路由文件夹
src/store:状态管理文件夹
src/views:页面文件夹
src/main.js:入口文件
src/App.vue:根组件
vite.config.js:vite脚手架配置文件

三、vue3
SFC:Single File Component单文件组件
页面由一个一个组件组成，单个组件是一个.vue文件，有以下三个结构组成
```
<script setup>
//编写脚本  （JavaScript/TypeScript代码）
</script>

<template>
//编写页面模板  （HTML结构）
</template>

<style scoped>
 //编写样式  （CSS）
</style>
```

src/components:组件文件夹
App.vue: 应用根组件(入口文件)
```
<script setup>

import Haha from "./components/haha.vue";  //（1）导入

</script>

<template>

  <haha/>  //（2）导入component/haha.vue
  
</template>
```

1.插值

2.指令
事件绑定：v-on
条件判断：v-if
循环：v-for
属性绑定：v-bind
3.响应式数据
ref():
（1）导入响应式数据的函数：import {ref} from "vue";（2）ref包裹值：let success = ref(false);（3）通过value取到真正的值：success.value = true;
reactive():
(1)导入：import {reactive, ref} from "vue";(2)reactive包装:let car = reactive({brand: "奔驰", price: 500000 })
4.表单绑定:
（1）定义变量：const formData=reactive({})（2）表单项中使用v-model=""进行绑定
5.计算属性：computed
6.监听属性：watch/watchEffect
7.vue组件生命周期：四个阶段：创建、挂载、更新、销毁，每个阶段都有两个钩子（就是创建前和创建完成）
created()/mounted()/updated()/destroyed()
8.组件传值：父传子：（1）父组件：引用子组件<son/>（2）子组件通过defineProps传承父组件的东西
子传父：
```
1. 子组件 defineEmits 声明能触发的事件
2. emit('事件名') 触发事件（广播）
3. 父组件 @事件名="处理函数" 监听事件
4. 父组件执行对应的处理函数
```
示例：
```vue
#son.vue
<script setup>

let props = defineProps(['money']);
let emits = defineEmits(['buy']);
function remain(){
  emits('buy',100)
}
</script>

<template>
  <h2>son component</h2>
  <h2>钱包余额：{{props.money}}</h2>
  <button @click="remain">触发</button>
</template>

<style scoped>

</style>
```

```vue
#father.vue
<script setup>
import Son from "./son.vue";
import {ref} from "vue";

let money =ref(200)

function moneyRemain(newMoney){
  money.value= newMoney
}

</script>

<template>
  <h1>father component</h1>
  <son :money="money" @buy="moneyRemain"/>

</template>

<style scoped>

</style>
```



```
模板字符串（ES6新特性）:
const name = "张三"
const age = 25
// 反引号包裹，${} 插入变量
const message = `我叫${name}，今年${age}岁`
console.log(message)
```


