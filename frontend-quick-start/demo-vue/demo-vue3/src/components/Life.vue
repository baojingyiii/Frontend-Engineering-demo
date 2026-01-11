<script setup>

import {onBeforeMount, onBeforeUpdate, onMounted, onUpdated, ref} from "vue";

const count=ref(0)
const btn01 =ref()

onBeforeMount(()=>{
  console.log('挂载之前',count.value,document.getElementById("btn01"))
})
onMounted(()=>{
  console.log('挂载完毕',count.value,document.getElementById("btn01"))
})
onBeforeUpdate(()=>{
  console.log('更新之前',count.value,btn01.value.innerHTML)
})
onUpdated(()=>{
  console.log('更新完毕',count.value,btn01.value.innerHTML)
})


</script>

<template>
  <button id="btn01" ref="btn01" @click="count++"> {{count}} </button>

</template>

<style scoped>

</style>