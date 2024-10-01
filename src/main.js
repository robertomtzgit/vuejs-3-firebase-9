import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";


import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore/lite';
import { getAuth, onAuthStateChanged } from "firebase/auth";
import firebase from 'firebase/compat/app';
import 'firebase/compat/storage';

const firebaseConfig = {
    apiKey: "AIzaSyCUHbXuM8TazyqbKYMwZUssqZ-RbBqYaDg",
    authDomain: "fir-fe9f3.firebaseapp.com",
    projectId: "fir-fe9f3",
    storageBucket: "fir-fe9f3.appspot.com",
    messagingSenderId: "272986730933",
    appId: "1:272986730933:web:9c6a42a5b6b01895d7e9fc"
};

firebase.initializeApp(firebaseConfig);
var storage = firebase.storage();
  // Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth();

export { db, auth, storage };


onAuthStateChanged(auth, (user) => {
    if (user) {
        console.log(user)
        const usuarioActivo ={
            email: user.email,
            uid: user.uid
        }
        store.dispatch('detectarUsuario', usuarioActivo)
        // ...
    } else {
        console.log(user)
        store.dispatch('detectarUsuario', user)
        // User is signed out
        // ...
    } 
});

createApp(App).use(store).use(router).mount('#app')