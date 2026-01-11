<!--2.指令-->
<script setup>
import {computed, reactive, ref, watch, watchEffect} from "vue";

let name = "张三"
let car = reactive({
  brand: "奔驰",
  price: 500000
})
// function add(){
//   car.value.price +=1000
// }
function add() {
  car.price += 1000
  console.log(car)
}


// 错误写法：
// let success = ref(false);
// function buy() {
//   success = ref(true);
// }

//正确写法：
const success = ref(false);
function buy() {
  alert("购买成功");
  // success = true;
  // alert(success);
  success.value = true;
  console.log(success)
}

let fruits = ["苹果", "香蕉", "橘子"];
let url = "https://www.baidu.com"

//6.计算属性：computed
let num = ref(1);
function addNum() {
  num.value++;
}

const totalPrice = computed(() => car.price * num.value)

//7.监听：watch/watchEffect
watch(num,(value,oldValue)=>{
  console.log("value",value)  //value是现在的值
  console.log("oldValue",oldValue)  //oldValue是之前的值
  if(num.value > 3){
    alert("超出限购数量")
    num.value = 3;
  }
})

watchEffect(()=>{
  if(totalPrice.value > 1000000){
    alert("价格超出1000000")
  }

})

</script>

<template>
  <!--1.插值：{{name}}-->
  <h2>姓名：{{ name }}</h2>
  品牌：{{ car.brand }}<br>
  价格：{{ car.price }}<br>
  数量：{{ num }}<br>
  总价：{{ totalPrice }}<br>
  <!--  2.1事件绑定：v-on-->
  <!--  <button v-on:click="buy">购买</button>     //方法一-->
  <button @click="buy">购买</button>   <!--//方法二-->
  <button @click="add">加价</button>
  <button @click="addNum">加量</button>

  <!--  2.2条件判断：v-if-->
  <!--  <p v-if="success">恭喜你购买成功</p>-->
  <!--  <p v-else>你还没有购买</p>-->

  <!--  2.3循环：v-for-->
  <li v-for="(f,i) in fruits">{{ f }}--{{ i }}</li>


  <!--  3属性绑定：v-bind-->
  <!--  <a href="https://www.baidu.com">百度</a>-->
  <a v-bind:href="url">百度</a>

  <!--  4.响应式数据-->
  <!--  4.1ref：万物皆可包-->
  <!--  步骤：（1）导入响应式数据的函数：import {ref} from "vue";（2）ref包裹值：let success = ref(false);（3）通过value取到真正的值：success.value = true;-->
  <p v-if="success" style="color: green">恭喜你购买成功</p>
  <p v-else style="color: red">你还没有购买</p>

<!--    4.2reactive：包装对象（基本类型不能用，例如上面的success）-->
  <!--  步骤：(1)导入：import {reactive, ref} from "vue";(2)reactive包装:let car = reactive({brand: "奔驰", price: 500000 })-->


</template>

<style scoped>
</style>