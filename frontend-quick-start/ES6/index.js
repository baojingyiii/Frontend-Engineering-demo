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



// // 1 var问题
// // 1.1越域
// {
//     var a = 1;
//     let b = 2;
// }
// console.log(a);  //1
// console.log(b);  //ReferenceError: b is not defined


// // 1.2 重复声明
// // var 可以声明多次
// // let 只能声明一次
// var m = 1
// var m = 2
// let n = 3
// //let n = 4
// console.log(m)
// console.log(n)   //SyntaxError: Identifier 'n' has already been declared


// // 1.3 变量提升
// // var 会变量提升
// // let 不存在变量提升
// console.log(x);   //undefined
// var x = 10;
// console.log(y);   //ReferenceError: Cannot access 'y' before initialization
// let y = 20;


//2.const
//声明变量
// let a = 1;
// a = 2;
// console.log(a);
//声明不可变量
// const a = 1;
// a =2;   //TypeError: Assignment to constant variable.


// //3.解构
// //3.1数组解构
// let arr =[1,"hello",3];
// //传统方法
// // console.log(arr[0]);
// // console.log(arr[1]);
// //简便方法
// let [x,y,z]= arr
// console.log(y)

// //3.2对象解构
// const person={
//     name:"John",
//     age:25,
//     language:["java","js","css"],
// }
// //传统写法
// console.log(person.name)
// //简便写法:从对象中把属性单独解构出来
// const {name, age} = person;
// console.log("hello",age)


// //4.链判断
// let message = null;
// //假设 message ={} 有很多属性
// //错误的写法：
// // console.log(message.body.user.firstName);

// //正确的写法：
// // const firstName=(message && message.body && message.body.user && message.body.user.firstName) || "default";
// // console.log(firstName)
// //简便写法：
// const firstName= message?.body?.user?.firstName || "default";
// console.log(firstName)


// //5.参数默认值
// function add(a, b) {
//     //b = b || 1;
//     return a + b;
// }
//
// let addRes = add(2);
// console.log(addRes);
// //以上方法，因为即使去掉b（没有默认值）,只传a的参数也会输出“NaN”。
//
// //利用参数默认值的特性，给b一个默认值=10
// function add(a, b = 10) {
//     return a + b;
// }
//
// console.log(add(1, 2));
// console.log(add(2));


// //6.箭头函数
// let sum = function (a, b) {
//     return a + b;
// };
// console.log(sum(10, 20))
// //简便写法
// //语法糖
// let sum2 = (a, b) => a + b;
// console.log(sum2(1, 20))
// let sum3 = (a, b) => {
//     c = a - b;
//     return c;
// };
// console.log(sum3(100, 20))


//7.promise :异步对象-->不阻塞后续代码
//7.1 同步
// console.log(111)
// console.log(122)
// //fetch:支持远程抓取数据的函数
// let fet =fetch("https://www.baidu.com/")
// console.log(fet)
//7.2异步promise
// console.log("fetch前")
//
// let fetch01 =fetch("https://raw.githubusercontent.com/mdn/learning-area/main/javascript/apis/fetching-data/can-store/products.json")
// fetch01.then((res) => console.log("响应结果",res)).catch((err) => console.log("失败返回",err))
// //then:获取抓取成功的数据   catch:抓取失败之后执行的操作
//
// console.log("fetch后")
//7.3理解promise.then
// console.log("fetch前")
// let fetch02 = fetch("https://raw.githubusercontent.com/mdn/learning-area/main/javascript/apis/fetching-data/can-store/products.json")
// fetch02.then((res) => {
//     console.log("响应结果", res)
//     // let json = res.json();
//     // console.log(json) 
//     // 正确做法是通过then等待获取的数据
//     let json = res.json();
//     json.then(jsonRes => {
//         console.log(jsonRes)
//     })
// }).catch((err) => console.log("失败返回", err))
// console.log("fetch后")

//promise三种状态：pending待定,fulfilled已兑现 -> promise.then  ,rejected已拒绝 -> promise.catch


//7.4自己创建promise
// new Promise((resolve,reject) => {
//     resolve('ok'); //返回获取成功的结果
//     reject('error'); //返回获取失败的结果
// })

// //写一个promise，只做了解
// let pro = new Promise((resolve, reject) => {
//     $.ajax({
//         url:url,
//         type:'GET',
//         data:data,
//         success:function(data){
//             resolve(data);  //传递成功结果
//         },
//         error:function(error){
//             reject(error);  //传递失败消息
//         }
//     })
// })
// pro.then(function(res){}).catch(function(err){})


//8.Async关键字：封装成异步函数promise
//普通函数是同步的
// console.log("哈哈哈哈哈哈0");
// function hahaha() {
//     console.log("哈哈哈哈哈哈1");
//     return 1;
// }
// hahaha();
// console.log("哈哈哈哈哈2");

// //变成异步的方法：1.封装异步: new Promise()   2.async
// console.log("哈哈哈哈哈哈0");
// async function hahaha() {
//     console.log("哈哈哈哈哈哈1");
//     return 123;
// }
// console.log(hahaha());  //哈哈哈哈哈哈1  |  Promise {<fulfilled>: 1}
// //可见hahaha()已经变成了promise对象
// hahaha().then(result => {
//     console.log(result);  //123
// })
// //通过then拿到结果
// console.log("哈哈哈哈哈2");


// //9.await : 因为异步函数需要then才能拿到结果，而await简化了步骤。
// //声明一个异步函数
// async function getDataNetwork() {
//     console.log("111")
//     //promise01是异步函数，但是如果想要写同步代码的方式，前面加上await
//     let promise01 = await fetch("https://jsonplaceholder.typicode.com/posts");
//     let json = await promise01.json();
//     //return json;
//
//     console.log("333");
//     return json;
// }
//
// //正确写法：
// let network = getDataNetwork();
// network.then(result => {
//     console.log(result);
// })
// //错误写法：
// let network02 = await getDataNetwork();
// console.log(network02);
// //注意：如果await,外层函数一定要有async。也就是在async封装的这个异步函数里面。


//10.模块化
//方法：1.XXX.js
// 2.XXX.js需要暴露功能
// 3.在main.js中import {functionName} from "./XXX.js"
// 4.在index.html中添加类型：模块化：<script src="main.js" type="module"></script>








