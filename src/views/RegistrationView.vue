<script setup>
import { reactive } from 'vue'
import router from '../router';

const registerData = reactive({
  email: '',
  password: '',
  confirmPassword:''
});

function register() {
  // Check if passwords match
  if (registerData.password !== registerData.confirmPassword) {
    alert('Passwords do not match');
    return;
  }
    // Check if email already exists
  if (localStorage.getItem(registerData.email)) {
      alert('email already exists.');
  } else {   
    if(registerData.email != '' && registerData.password != ''){
      localStorage.setItem(registerData.email, JSON.stringify(registerData.email));
      localStorage.setItem(registerData.password, JSON.stringify(registerData.password));
      router.push({name:'welcome'});
    }else{
      alert('Reuired fillup fields');
    }    
  }
  console.log("localStorage", localStorage);    
}

function redirectLogin(){
  router.push({name:'login'});
}
</script>

<template>
  <div class="card flex">
    <div class="w-1/2">
      <img src="@/assets/online-registration.jpg" />
    </div>

    <div class="w-1/2 p-10">
        <h1 className="text-3xl font-bold mb-6">Registration Form</h1>

        <div class="flex flex-col gap-2 w-1/2">
          <label>Email</label>
          <input className="border-2 rounded" v-model="registerData.email" type="email">
        </div>

        <div class="flex flex-col gap-2 w-1/2">
          <label>password</label>
          <input className="border-2 rounded" v-model="registerData.password" type="password">
        </div>

        <div class="flex flex-col gap-2 w-1/2">
          <label>Confirm Password</label>
          <input className="border-2 rounded" v-model="registerData.confirmPassword" type="password">
        </div>

        <div class="flex gap-3 my-3">
          <button class="px-3 py-2 rounded text-white bg-sky-500/75" @click="register">Signup</button>
          <button class="px-3 py-2 rounded text-white bg-sky-500/75" @click="redirectLogin">Login</button> 
        </div>  
    </div>   
  </div>  
</template>
