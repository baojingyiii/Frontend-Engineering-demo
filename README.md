# Frontend-Engineering-demo

## 📋 项目简介
前端工程化:ES6 node vite vue3 vue-router pinia axios ant-design-vue

## 🛠️ 技术栈

![Vue.js](https://img.shields.io/badge/Vue.js-35495E?style=for-the-badge&logo=vuedotjs&logoColor=4FC08D)
![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![Pinia](https://img.shields.io/badge/Pinia-FFD859?style=for-the-badge&logo=pinia&logoColor=000)
![Ant Design](https://img.shields.io/badge/Ant%20Design-0170FE?style=for-the-badge&logo=antdesign&logoColor=white)
![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)

## 📁 项目结构
```text
frontend-quick-start/
├── demo-modules/
|   └── modules/
|   |   └── user.js
|   ├── index.html
|   ├── main.js
├── demo-npm/
├── demo-vite/
├── demo-vue/
├── demo-vue3/
│   ├── src/
│   │   ├── assets/
│   │   ├── components/
│   │   │   ├── Core.vue
│   │   │   ├── father.vue
│   │   │   ├── Form.vue
│   │   │   ├── haha.vue
│   │   │   ├── hehe.vue
│   │   │   ├── Life.vue
│   │   │   └── son.vue
│   │   ├── App.vue
│   │   └── main.js
└── ES6/
    ├── index.html
    └── index.js
```

## 前端工程化

### 一、ES6新特性
```html
...
    <script src="index.js"></script>  //导入js
...
```

```js
# ES6/index.js

//补充
// （1）反引号包裹，${} 插入变量
const name = "张三"
const age = 25
// 反引号包裹，${} 插入变量
const message = `我叫${name}，今年${age}岁`
console.log(message)
// （2）push:往数组末尾添加新元素
// 假设有一个数组
const arr = [1, 2, 3]
// push 在数组末尾添加新元素
arr.push(4)   // arr 变成 [1, 2, 3, 4]
// console.log(arr)
arr.push(5, 6) // arr 变成 [1, 2, 3, 4, 5, 6]
// console.log(arr)

// 1 var问题
// 1.1越域

// 1.2 重复声明
// var 可以声明多次
// let 只能声明一次

// 1.3 变量提升
// var 会变量提升
// let 不存在变量提升

// 2.const

// 3.解构
// 3.1数组解构
// 3.2对象解构

// 4.链判断

//5.参数默认值

//6.箭头函数

// 7.promise :异步对象-- > 不阻塞后续代码
// promise三种状态：pending待定, fulfilled已兑现 -> promise.then  , rejected已拒绝 -> promise.catch

// 8.Async关键字：封装成异步函数promise
//变成异步的方法：1.封装异步: new Promise()   2.async

// 9.await : 因为异步函数需要then才能拿到结果，而await简化了步骤，加上await后可以直接用写同步代码的方式

// 10.模块化：所有的模块都放在一个文件夹下，然后通过import引入（解决了原本只能放在一个js文件下面）
// 方法：1.XXX.js  2.XXX.js需要暴露功能  3.在main.js中import {functionName} from "./XXX.js"
// 4.在index.html中添加类型：模块化：<script src="main.js" type="module"></script>
```

#### 模块化
所有的模块都放在一个文件夹modules下，解决了原本只能放在一个js文件中

```html
# demo/index.html
...
    <script src="main.js" type="module"></script>  //(1).引用main.js，type类型修改为module
...
```

```js
# demo/main.js

import {user,isAdult} from './modules/user.js'  //(2).导入相关的模块中的功能
alert("当前用户："+ user.username);
isAdult(user.age)
```

```js
# demo/modules/user.js

const user = {
    username: "张三",
    age: 18
}

const isAdult = (age) => {
    if (age < 18) {
        console.log("用户未成年")
    }else{
        console.log("用户已成年")
    }
}

export {user, isAdult}  //(3).暴露功能
```
> 以上是一个模块化的小示例

<hr>

### 二、node
```bash
1.下载node.js
2.配置国内镜像源
3.npm install -g XXX  //-g:全局安装，所有项目都安装
4.npm run XXX  //XXX是package.json里面的scripts含有的命令
```

### 三、vite:快速创建前端项目脚手架（也就是指一个项目的结构）
```bash
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
```

### 四、vue
SFC:Single File Component单文件组件  <br>
页面由一个一个组件组成，单个组件是一个.vue文件，有以下三个结构组成  <br>
```vue
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

src/components:组件文件夹  <br>
App.vue: 应用根组件(入口文件)  <br>
```vue
# App.vue
<script setup>
import Haha from "./components/haha.vue";  //（1）导入
</script>
<template>
  <haha/>  //（2）导入component/haha.vue  
</template>
```

#### 基础使用
```vue
# components/core.vue
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

# components/form.vue
4.表单绑定:
（1）定义变量：const formData=reactive({})（2）表单项中使用v-model=""进行绑定

5.计算属性：computed

6.监听属性：watch/watchEffect

7.vue组件生命周期：四个阶段：创建、挂载、更新、销毁，每个阶段都有两个钩子（就是创建前和创建完成）
created()/mounted()/updated()/destroyed()

# components/father.vue components/son.vue
8.组件传值：
父传子：属性传递
步骤：（1）父组件：引用子组件<son/>（2）子组件通过defineProps传承父组件的东西
子传父：事件机制
步骤：
(1.) 子组件 defineEmits 声明能触发的事件
(2.) emit('事件名') 触发事件（广播）
(3.) 父组件 @事件名="处理函数" 监听事件
(4.) 父组件执行对应的处理函数
```

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
> 以上是一个子组件传父组件的简单示例







