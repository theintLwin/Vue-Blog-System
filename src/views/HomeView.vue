<template>
  <div class="home">
      <div v-if="error">
        {{error}}
      </div>
      <div v-if="posts.length>0" class="layout">
        <div>
          <PostList :posts="posts"></PostList>
        </div>

        <div>
          <TagCloud></TagCloud>
        </div>
        
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
import TagCloud from '../components/TagCloud'
import Spinner from '../components/Spinner'
import PostList from '../components/PostList'

import getPosts from "../composables/getPosts"


  export default {
  components: {
    TagCloud,
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
    /* .home{
      max-width: 1200px;
      margin: 0 auto;
      padding: 10px;      
    } */
    .home {
    max-width: 1200px;
    margin: 0 auto;
    padding: 10px;
   
  }
  .layout{
    display: grid;
    grid-template-columns: 3fr 1fr;
    gap:20px;
  }
  </style>
