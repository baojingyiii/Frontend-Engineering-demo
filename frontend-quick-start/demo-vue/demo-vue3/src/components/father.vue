<script setup>
import Son from "./son.vue";
import {ref} from "vue";

let money =ref(20000)

function moneyRemain(newMoney){
  money.value= newMoney
  // alert(`剩余,${newMoney}`)
}

</script>

<template>
  <h1>father component</h1>
<!--  显示余额：{{money}}<br>-->
  <son :money="money" book="书籍" @buy="moneyRemain"/>

</template>

<style scoped>

</style>
