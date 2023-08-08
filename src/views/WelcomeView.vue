<script setup>
import router from '../router';

function redirectRegistration(){
  router.push({name:'registration'});
}
</script>

<template>
    <div>
      <img src="@/assets/welcome.jpg" />
    </div>
    <div class="text-center">
      <button class="px-3 py-2 rounded text-white bg-sky-500/75" @click="redirectRegistration">Logout</button> 
    </div>
</template>

