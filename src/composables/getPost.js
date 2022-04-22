import { ref } from "vue";

let getPost = (id) => {
    let post=ref(null);
    let error = ref("");

    let load = async ()=>{
        
        try{
            let response=await fetch("http://localhost:3000/posts/" + id);
            if(response.status===404){
                throw new Error("not found URL");
            }
            let datas= await response.json();
            post.value = datas;
        }
        catch(err){
            
            error.value = err.message
        }
        
    }
    return {post,error,load};
}

export default getPost;