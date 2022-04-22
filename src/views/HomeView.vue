<template>
  <div class="home">
      <div v-if="posts.length>0">
        <PostList :posts="posts"></PostList>
      </div> 
      <div v-else>
        <Spinner></Spinner>
        <!-- loading...  loading feature later coming soon.. -->
      </div> 
     
    <div v-if="error">
          <p>{{error}}</p>
    </div>
   
  </div>
</template>

<script>
import Spinner from '../components/Spinner'
import PostList from '../components/PostList'

import getPosts from "../composables/getPosts"


  export default {
  components: {
    Spinner, PostList },
      setup(){
        //composable function
          let {posts, error, load} = getPosts();
            load(); //invoke
            return { posts, error };
              //destructuring...
        // let {name,age} = {
        //     name:"theint",
        //     age:20
        //   };
        //   console.log(name);
        //   console.log(age);
      }
    }

</script>

  <style>
  
  </style>
