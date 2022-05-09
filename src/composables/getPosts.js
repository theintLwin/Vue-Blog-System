import { ref } from '@vue/reactivity';

let getPosts = ()=>{
    let error = ref("");
    let posts = ref([]);
    let load=async()=>{
      try{
      //   await new Promise((resolve,reject)=>{
      //     setTimeout(resolve, 2000)
      // })
          let response=await fetch("http://localhost:3000/posts");
          if(response.status===404){
            throw new Error("not found URL");
          }
          let datas=await response.json();
          posts.value = datas;
      }
      catch(err){
        error.value=err.message;
        // console.log(error.value);
            }
        }
        return {posts,error,load};
        
}
export default getPosts;