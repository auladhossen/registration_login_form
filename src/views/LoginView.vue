<script setup>
import { reactive } from 'vue'
import router from '../router';

const loginData = reactive({
  email: '',
  password: ''
});

function login(){
    const userEmail = localStorage.getItem(loginData.email);
    const userPassword = localStorage.getItem(loginData.password);
    if (!userEmail) {
      alert('User not found');
    }else if(!userPassword){
      alert('Wrong Password');
    }else{
        router.push({name:'welcome'});
    }    
}

function redirectRegistration(){
  router.push({name:'registration'});
}
</script>

<template>
 <div class="card flex">
    <div class="w-1/2">
      <img src="@/assets/online-registration2.jpg" />
    </div>

    <div class="w-1/2 p-10">
        <h1 className="text-3xl font-bold mb-6">Login Form</h1>
        <div class="flex flex-col gap-2 w-1/2">
          <label>Email</label>
          <input className="border-2 rounded"  v-model="loginData.email" type="email">
        </div>
        <div class="flex flex-col gap-2 w-1/2">
          <label>password</label>
          <input className="border-2 rounded"  v-model="loginData.password" type="password">
        </div>
        <div class="flex gap-3 my-3">
          <button class="px-3 py-2 rounded text-white bg-sky-500/75" @click="login">Login</button>
          <button class="px-3 py-2 rounded text-white bg-sky-500/75" @click="redirectRegistration">Register</button> 
        </div>      
    </div>   
  </div>
</template>
