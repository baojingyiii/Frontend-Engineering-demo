# Frontend-Engineering-demo

## 📋 项目简介
前端工程化:node vite vue3 vue-router pinia axios ant-design-vue

## 🛠️ 技术栈

![Vue.js](https://img.shields.io/badge/Vue.js-35495E?style=for-the-badge&logo=vuedotjs&logoColor=4FC08D)
![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![Pinia](https://img.shields.io/badge/Pinia-FFD859?style=for-the-badge&logo=pinia&logoColor=000)
![Ant Design](https://img.shields.io/badge/Ant%20Design-0170FE?style=for-the-badge&logo=antdesign&logoColor=white)
![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)

## 📁 项目结构
```
frontend-quick-start/
├── 📁 src/
│   ├── 📁 api/           # API接口
│   ├── 📁 assets/        # 静态资源
│   ├── 📁 components/    # 公共组件
│   ├── 📁 layouts/       # 布局组件
│   ├── 📁 router/        # 路由配置
│   ├── 📁 stores/        # Pinia状态管理
│   ├── 📁 styles/        # 样式文件
│   ├── 📁 utils/         # 工具函数
│   ├── 📁 views/         # 页面组件
│   ├── 📄 App.vue        # 根组件
│   └── 📄 main.ts        # 入口文件
├── 📄 .env               # 环境变量
├── 📄 .env.development   # 开发环境
├── 📄 .env.production    # 生产环境
├── 📄 index.html         # HTML模板
├── 📄 package.json       # 依赖配置
├── 📄 tsconfig.json      # TypeScript配置
├── 📄 vite.config.ts     # Vite配置
└── 📄 README.md          # 项目说明
```

## ES6新特性
```js
const name = "张三"
const age = 25
// 反引号包裹，${} 插入变量
const message = `我叫${name}，今年${age}岁`
console.log(message)
```

```html
#ES6/index.html

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Title</title>
    <script src="index.js"></script>  //导入js
</head>
<body>
<h5>frontend</h5>

</body>
</html>
```

```js
// 1 var问题
// 1.1越域
{
    var a = 1;
    let b = 2;
}
console.log(a);  //1
console.log(b);  //ReferenceError: b is not defined


// 1.2 重复声明
// var 可以声明多次
// let 只能声明一次
var m = 1
var m = 2
let n = 3
let n = 4
console.log(m)
console.log(n)   //SyntaxError: Identifier 'n' has already been declared


// 1.3 变量提升
// var 会变量提升
// let 不存在变量提升
console.log(x);   //undefined
var x = 10;
console.log(y);   //ReferenceError: Cannot access 'y' before initialization
let y = 20;


// 2.const
// 声明变量
let c = 1;
c = 2;
console.log(c);
// 声明不可变量
const d = 1;
d = 2;   //TypeError: Assignment to constant variable.


// 3.解构
// 3.1数组解构
let arr = [1, "hello", 3];
// 传统方法
console.log(arr[0]);
console.log(arr[1]);
// 简便方法
let [x, y, z] = arr
console.log(y)


// 3.2对象解构
const person = {
    name: "John",
    age: 25,
    language: ["java", "js", "css"],
}
//传统写法
console.log(person.name)
//简便写法:从对象中把属性单独解构出来
const {name, age} = person;
console.log("hello", age)


// 4.链判断
let message = null;
//假设 message = {} 有很多属性
//错误的写法：
console.log(message.body.user.firstName);
//一个复杂对象，属性层级很深。可能会存在message.name.user而user属性实际不存在的情况。
//正确的写法：
const firstName=(message && message.body && message.body.user && message.body.user.firstName) || "default";
console.log(firstName)
//简便写法：//这个firstName不一定有，如果执行到一半发现没有，就不会继续往下寻找属性了
const firstName = message?.body?.user?.firstName || "default";
console.log(firstName)


//5.参数默认值
function add(a, b) {
    //b = b || 1;   //判断b是否为空，为空就给默认值1
    return a + b;
}

let addRes = add(2);
console.log(addRes);
//以上方法，因为即使去掉b（没有默认值）,只传a的参数也会输出“NaN”，在项目大了之后，就会导致即使参数没有传入也不会显示报错的情况

//利用参数默认值的特性，给b一个默认值=10
function add(a, b = 10) {
    return a + b;
}
console.log(add(1, 2));
console.log(add(2));

//6.箭头函数
let sum = function (a, b) {
    return a + b;
};
console.log(sum(10, 20))
//简便写法
//语法糖
let sum2 = (a, b) => a + b;
console.log(sum2(1, 20))
//代码不止一行，可以用{}
let sum3 = (a, b) => {
    c = a - b;
    return c;
};
console.log(sum3(100, 20))


// 7.promise :异步对象-- > 不阻塞后续代码
// 7.1同步
//同步:按照顺序一个一个往下执行
console.log(111)
console.log(122)
//fetch:支持远程抓取数据的函数
let fet = fetch("https://www.baidu.com/")
console.log(fet)

// 7.2异步promise
//只要是属于promise异步对象，则执行时不等待promise对象的结果
console.log("fetch前")

let fetch01 = fetch("https://raw.githubusercontent.com/mdn/learning-area/main/javascript/apis/fetching-data/can-store/products.json")
fetch01.then((res) => console.log("响应结果", res)).catch((err) => console.log("失败返回", err))
//then:获取抓取成功的数据   catch:抓取失败之后执行的操作

console.log("fetch后")

// 7.3理解promise.then
console.log("fetch前")
let fetch02 = fetch("https://raw.githubusercontent.com/mdn/learning-area/main/javascript/apis/fetching-data/can-store/products.json")
fetch02.then((res) => {
    console.log("响应结果", res)
    // let json = res.json();
    // console.log(json)  //此时只会打印 'Promise{<pending>}'
    // // 也就是`let json =res.json();`还没执行，直接执行`console.log(json)`。
    // // 因为promise是异步处理，所以`let json =res.json();`会被先跳过，先执行下一句，导致实际上json还没拿到数据（还没拿到res.json里面的数据）。
    // 正确做法是通过then等待获取的数据
    let json = res.json();
    json.then(jsonRes => {
        console.log(jsonRes)
    })
    // 综上可见：想要获取promise对象的结果，使用promise.then()
    // 仅仅`let json = res.json();`是不够的，需要then来等待获取的结果，再console.log
}).catch((err) => console.log("失败返回", err))
console.log("fetch后")

// promise三种状态：pending待定, fulfilled已兑现 -> promise.then  , rejected已拒绝 -> promise.catch

// 7.4自己创建promise
new Promise((resolve, reject) => {
    resolve('ok'); //返回获取成功的结果
    reject('error'); //返回获取失败的结果
})

//写一个promise，只做了解
let pro = new Promise((resolve, reject) => {
    $.ajax({
        url: url,
        type: 'GET',
        data: data,
        success: function (data) {
            resolve(data);  //传递成功结果
        },
        error: function (error) {
            reject(error);  //传递失败消息
        }
    })
})
pro.then(function (res) {
}).catch(function (err) {
})


// 8.Async关键字：封装成异步函数promise
// 普通函数是同步的
console.log("哈哈哈哈哈哈0");

function hahaha() {
    console.log("哈哈哈哈哈哈1");
    return 1;
}

hahaha();
console.log("哈哈哈哈哈2");

//变成异步的方法：1.封装异步: new Promise()   2.async
console.log("哈哈哈哈哈哈0");

async function hahaha() {
    console.log("哈哈哈哈哈哈1");
    return 123;
}

console.log(hahaha());  //哈哈哈哈哈哈1  |  Promise {<fulfilled>: 1}
//可见hahaha()已经变成了promise对象
hahaha().then(result => {
    console.log(result);  //123
})
//通过then拿到结果
console.log("哈哈哈哈哈2");


// 9.await : 因为异步函数需要then才能拿到结果，而await简化了步骤，加上await后可以直接用写同步代码的方式
// 声明一个异步函数
async function getDataNetwork() {
    console.log("111")
    //promise01是异步函数，但是如果想要写同步代码的方式，前面加上await
    let promise01 = await fetch("https://jsonplaceholder.typicode.com/posts");
    let json = await promise01.json();
    //return json;   //一旦执行 return，函数就会立即结束，后面的代码不会执行。

    console.log("333");
    return json;
}

//正确写法：
let network = getDataNetwork();
network.then(result => {
    console.log(result);
})
//错误写法：
let network02 = await getDataNetwork();
console.log(network02);
//注意：如果await,外层函数一定要有async。也就是在async封装的这个异步函数里面,

```
```txt
// 10.模块化：所有的模块都放在一个文件夹下，然后通过import引入（解决了原本只能放在一个js文件下面）
// 方法：1.XXX.js  2.XXX.js需要暴露功能  3.在main.js中import {functionName} from "./XXX.js"
// 4.在index.html中添加类型：模块化：<script src="main.js" type="module"></script>
```
## 模块化
所有的模块都放在一个文件夹modules下，解决了原本只能放在一个js文件中

```html
# demo/index.html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Title</title>
    <script src="main.js" type="module"></script>  //(1).引用main.js，type类型修改为module
</head>
<body>

</body>
</html>
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



一、node
```bash
1.下载node.js
2.配置国内镜像源
3.npm install -g XXX  //-g:全局安装，所有项目都安装
4.npm run XXX  //XXX是package.json里面的scripts含有的命令
```

二、vite:快速创建前端项目脚手架（也就是指一个项目的结构）
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

```bash
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
8.组件传值：
父传子：属性传递
步骤：（1）父组件：引用子组件<son/>（2）子组件通过defineProps传承父组件的东西
子传父：事件机制
```txt
步骤：
1. 子组件 defineEmits 声明能触发的事件
2. emit('事件名') 触发事件（广播）
3. 父组件 @事件名="处理函数" 监听事件
4. 父组件执行对应的处理函数
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
> 以上是一个子组件传父组件的示例
```







