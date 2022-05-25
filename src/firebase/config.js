import firebase from "firebase/compat/app";
import "firebase/compat/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyCzNc13NBEuhrjlm-HgJ662MUSSCNQsRS4",
    authDomain: "vue-blog-system-4da9f.firebaseapp.com",
    projectId: "vue-blog-system-4da9f",
    storageBucket: "vue-blog-system-4da9f.appspot.com",
    messagingSenderId: "775800106211",
    appId: "1:775800106211:web:90d33d8485ca72575229d6"
  };
  //init firebase
  firebase.initializeApp(firebaseConfig);
  //database setup
  let db = firebase.firestore();

  export {db};
  