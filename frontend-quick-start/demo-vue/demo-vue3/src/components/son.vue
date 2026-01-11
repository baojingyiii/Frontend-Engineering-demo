<script setup>

let props = defineProps(['money','book']);
let emits = defineEmits(['buy']);
function buySugar(){
  emits('buy',props.money - 5)

}
</script>

<template>
  <h2>son component</h2>
  <h2>钱包余额：{{props.money}}</h2>
  <h3>书：{{props.book}}</h3>
  <button @click="buySugar">买糖</button>


</template>

<style scoped>

</style>


