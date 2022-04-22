<template>
        <router-link :to="{name:'Detail',params:{id:post.id}}">
            <h2>{{post.title}}</h2>
        </router-link>
        
        <p>{{cutBodyPost}}</p>
</template>

<script>
import { computed, onUpdated } from '@vue/runtime-core';
export default {
    props:['post'],
    setup(props){
        let cutBodyPost=computed(()=>{
            return props.post.body.substring(0,100)+"...";
        });
         onUpdated(()=>console.log("data updated"));
        return {cutBodyPost};
    }
}
</script>

<style>

</style>