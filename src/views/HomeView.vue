<template>
  <div class="home">
    <h2>Userone - {{userOne}}</h2>
    <button @click="changeName">change name</button>
  </div>
</template>

<script>
import { ref } from '@vue/reactivity';

  export default {
    setup(){
      let userOne=ref("theint theint lwin");
      let changeName = ()=>{
        userOne.value = "Beautiful theint lwin";
      }
      return {userOne,changeName};
    }
  }

</script>
<style >

</style>
