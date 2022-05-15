<template>
  <div v-if="error">{{error}}</div>
  <div v-if="posts.length">
   
    <PostList :posts="filteredPosts"></PostList>
  </div>
  <div v-else>
    loading...
  </div>
</template>

<script>
import PostList from '../components/PostList'
import { computed } from '@vue/runtime-core';
import getPosts from "../composables/getPosts"
export default {
  components: { PostList },
    props:['tag'],
    setup(props){
      let {posts,error,load} = getPosts();
      load();
      let filteredPosts = computed(()=>{
        return posts.value.filter((post)=>{
          return post.tags.includes(props.tag)
        })
      })
      
      return {posts,error,filteredPosts}
      
    }
}
</script>

<style>

</style>