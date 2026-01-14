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
8.1父传子：属性传递
步骤：（1）父组件：引用子组件<son/>（2）子组件通过defineProps传承父组件的东西
8.2子传父：事件机制
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

8.3 插槽：
```text
步骤 （1）父组件
<son>
<button>哈哈</button>
</son>
（2）子组件
<slot/>
//此时子组件就会显示父组件的按钮
8.3.1插槽设置默认值：<slot>哈哈son</slot>
//此时如果父组件没有传值，显示默认值
8.3.2具名插槽：通过name锁定需要更换内容
子组件：
<slot name="title">哈哈son</slot>
父组件：
<template #title>
SonSon
</template>
```


### 五、vue-router
> 官方文档：https://router.vuejs.org/zh/guide/
```text
（一）.创建路由
router--index.js
1.定义路由表
2.创建路由器
3.导出路由器
4.vue实例使用路由器--main.js
5.修改--APP.vue:(1)<RouterLink to="/">首页</RouterLink>(2)<RouterView/>

（二）.路径参数
#index.js:在路径后面加:XX
const routes = [
  { path: '/hello/:id', component: Hello },
]
#App.vue:直接写路径
添加RouterLink：<RouterLink to="/hello/123">hello</RouterLink>
添加RouterView：<RouterView/>
(三).嵌套路由
1.在App.vue里面添加路由链接: <RouterLink to="/user/bao">用户中心</RouterLink>
2.同样的在index.js里面添加/user/:id,然后再里面嵌套,children
path:'/user/:id',
component: User,
children:[
    {
    path: 'profile',
    component: UserProfile,
    }
3.在views/user/继续创建vue组件
然后在user.vue里面：
添加RouterLink:<RouterLink to="/user/bao/posts">邮件</RouterLink>
添加RouterView。
(四)编程式导航：(也就是拿到路由参数)
useRoute:路由数据：拿到一些路由参数
userRouter:路由器：可以控制页面跳转
```
(五)路由传参：(也就是传进去路由参数)  <br>
1.params 参数:必须使用组件name  <br>
> 配置App.vue  
```vue
<script setup>
  //<!--方法一：编程式跳转-->
  function paramsTest(){
    router.push('/haha/123/bao/18')
  }
  //<!--方法二：编程式跳转-->
  function paramsTest() {
    router.push({
      name: 'haha',
      params: {
        id: 2,
        name: 'zhangSan',
        age: 222
      }
    })
  }
</script>
<template>
<!--  params 参数-->
<!--方法一：RouterLink-->
<RouterLink to="/haha/123/bao/18">haha123</RouterLink>
<!--方法二：RouterLink-->
<RouterLink :to="{
name:'haha',
    params:{
    id: 7,
        name: 'zhangSan',
        age: 22
}
}">对象传参</RouterLink>

  <!--  params 参数:编程式-->
<button @click="paramsTest">param传参</button>
</template>
```
2.query 参数：path,name都可以
> 配置App.vue
```vue
<script setup>
function helloQuery() {
//  <!--方法一：编程式跳转-->
// router.push('/hello?id=1&name=zhangSan');
// <!--方法二：编程式跳转-->
router.push({
path:'/hello',
query:{
id: 5,
name: 'LiSi'
}
})
}
</script>
<template>
  <!--  query 参数:  方法一-->
  <RouterLink to="/hello?id=3&name=LiSi">hello</RouterLink>
  <!--  query 参数： 方法二-->
  <RouterLink :to="{
    path:'/hello',
    query:{
      id: 4,
      name: 'LiSi',
    }
  }">hello对象
  </RouterLink>
  <!--  query 参数：编程式-->
  <button @click="helloQuery">query传参</button>
</template>
```
路由传参：在具体的组件中显示(例如，若是query，则把params改成query)
```vue
  <!--  params参数-->
<h1>我是haha {{ $route.params.id }},{{ $route.params.name }},{{ $route.params.age }}</h1>

<div>
  {{ route.params.id }} <br>
  {{ route.params.name }} <br>
  {{ route.params.age }} <br>
</div>
```

(六)导航守卫：(可以阻止访问某个网页)  <br>
全局前置守卫 
```js
//const router = createRouter({ ... })
router.beforeEach((to, from) => {
    console.log('to', to);  //to: 即将要进入的目标
    console.log('from', from);  //from: 当前导航正要离开的路由
    return false  // 返回 false 以取消导航
    // return true // 返回 true 继续导航
    // return '/hello'  //返回'路径'，跳转指定页面
})
```

#### vue-router总结：
```text
路由配置：1.routes:路由表 2.createRouter():创建路由器
标签：
1.router-link:指定跳转的页面
2.router-view:指定在哪个位置动态显示路由组件
函数：
1.useRoute()：获取路由数据  --- path , params , query , name
2.useRouter():获取路由器（控制页面跳转） --- push（跳转到新页面）, go
导航守卫
```

### 六、axios ：基于promise的网络请求（用于连接前后端应用：发送请求，接收响应）
get请求,post请求:GET 方法用于从服务器获取数据，POST 方法用于向服务器提交数据
#### 1.发送请求
```vue
<script setup>
  import axios from "axios";
  
  function getInfo(){
    axios.get('https://jsonplaceholder.typicode.com/posts/').then(res=>{
      console.log(res.data)
    })
    // config: 请求配置
    // data: 服务器响应数据
    // headers: 响应头
    // status: 响应状态码
    // statusText: 响应描述文本
  }

  function getInfoParams(){
    axios.get("https://jsonplaceholder.typicode.com/posts/",{
      params: {
        id:1,
        username:'zhangsan'
      }
    }).then(resp=>{
      console.log(resp)
    })
  }
</script>
<template>
  <!--  发送请求:get -->
  <button @click="getInfo">GET请求</button>
  <button @click="getInfoParams">GET请求 参数</button>
</template>

```
> 简化,这样需要的时候直接import引入,网页地址不需要详细写出来
```js
//import http from "./utils/http/index.js"; 专门存放axios请求，这样需要的时候直接import引入就好了
import axios from "axios";
const instance = axios.create({
  baseURL: 'https://some-domain.com/api/',
  timeout: 1000,
  headers: {'X-Custom-Header': 'foobar'}   //自定义请求头
});
export default instance;
```
#### 2.拦截器
```js
// 添加请求拦截器
axios.interceptors.request.use(function (config) {
    // 在发送请求之前做些什么
    return config;
  }, function (error) {
    // 对请求错误做些什么
    return Promise.reject(error);
  });

// 添加响应拦截器
axios.interceptors.response.use(function (response) {
    // 2xx 范围内的状态码都会触发该函数。
    // 对响应数据做点什么
    return response;  //return response.data;直接响应返回data的数据
  }, function (error) {
    // 超出 2xx 范围的状态码都会触发该函数。
    // 对响应错误做点什么
    return Promise.reject(error);
  });
```


### 七、pinia：状态管理（保存状态数据，方便在各个组件之间共享）
访问一个网页下面的组件：1.通过路由传参2.组件传值（父子组件）3.使用pinia
> main.js使用pinia
```js
import { createPinia } from 'pinia'
const pinia = createPinia()
```
```text
State:核心数据 
Getter:数据获取
Actions:数据操作
```
> defineStore() 的第二个参数可接受两类值：Setup 函数或 Option 对象。
```text
Option写法:带有 state、actions 与 getters 属性
state 是 store 的数据 (data)，getters 是 store 的计算属性 (computed)，而 actions 则是方法 (methods)
```
> 配置：
```js
// stores/money.js
//存储单元

export const useCounterStore = defineStore('counter', {
  state: () => ({ count: 0, name: 'Eduardo' }),
  getters: {
    doubleCount: (state) => state.count * 2,
  },
  actions: {
    increment() {
      this.count++
    },
  },
})
```
> 调用：
```vue

<script setup>

import {useMoneyStore} from "../stores/money.js";
let MoneyStore = useMoneyStore();
</script>

<template>
<!--   直接使用即可-->
  <h2>人民币:{{MoneyStore.rmb}}</h2>
</template>
```
```text
Setup写法：
ref() 就是 state 属性
computed() 就是 getters
function() 就是 actions
```
> 配置：
```js
export const useCounterStore = defineStore('counter', () => {
  const count = ref(0)
  const name = ref('Eduardo')
  const doubleCount = computed(() => count.value * 2)
  function increment() {
    count.value++
  }

  return { count, name, doubleCount, increment }
})

```
调用:(方法和option相同)


### 八、工具链
```bash
npm create vue@latest:(Vue+Router+Pinia等)。已经全部配齐了，不需要再安装依赖，配置功能了
npm create vite:（Vue + Vite）
```

### 九、Ant Design Vue:ui框架
```bash
安装：npm install --save ant-design-vue@4.x
注册:
import Antd from 'ant-design-vue';
import 'ant-design-vue/dist/reset.css';
app.use(Antd)

参考官方文档直接使用：https://www.antdv.com/components/overview-cn/
```

















