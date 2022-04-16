<template>
  <div class="home">
    <input type="text" v-model="search">
   <p>search item - {{search}}</p>
    <div v-for="name in filteredNames" :key="name">
      <p>{{name}}</p>
    </div>
  
     
  </div>
</template>

<script>
import { ref } from '@vue/reactivity';
import { computed } from '@vue/runtime-core';


export default {
   setup(){
    let names = ref(["aung aung","mg mg","kyaw kyaw","aye aye","susu"]);
    let search = ref("");
    
    let filteredNames = computed(()=>{
      return names.value.filter(name=>{
        return name.includes(search.value);
      })
    })
    return {names,search,filteredNames};
   }
   
  }

</script>

<style >

</style>
