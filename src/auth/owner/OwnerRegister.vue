<template lang="">
  <div class="tab-pane" id="changePassword">
    <form class="form-horizontal" @submit.prevent="submitOwner()">
      <div class="mb-3">
        <label class="label-control" for="ownername">Ownername</label>
        <input v-model="form.type_role" class="form-control" type="hidden">
        <input v-model="form.name" class="form-control" type="text" name="" id="ownername" placeholder="Enter your ownername">
      </div>
      <div class="mb-3">
        <label class="label-control" for="email">Email</label>
        <input v-model="form.email" class="form-control" type="text" name="" id="email" placeholder="Enter your email">
      </div>
      <div class="mb-4">
        <label class="label-control" for="password">Password</label>
        <input v-model="form.password" class="form-control" type="password" name="" id="password" placeholder="Enter your password">
      </div>
      <div class="mb-4">
        <label class="label-control" for="confirm_password">Confirm Password</label>
        <input v-model="form.password_confirmation" class="form-control" type="password" name="" id="confirm_password" placeholder="Confirm your password">
      </div>
      <!-- <div class="mb-4">
        <router-link to="/register/restaurant" class="btn btn-primary d-flex align-items-center justify-content-center">
          Next&nbsp;
          <i class="fa-solid fa-circle-chevron-right"></i>
        </router-link>
      </div> -->
      <div class="mb-4">
        <button class="btn btn-primary col-12" type="submit">Register</button>
      </div>
    </form>
  </div>
</template>
<script setup>

import axios from 'axios';
import { reactive } from 'vue';
import { useRouter } from 'vue-router';

  const router = useRouter();
    const form = reactive({
        'name': '',
        'email': '',
        'password': '',
        'password_confirmation': '',
        'type_role': 'Owner'
    });


    const submitOwner = () => { 
      axios.post('register', form)
      .then((responnse) => {
        router.push('/login');
      })
      .catch((error) => {
        console.error('Registration failed:', error);
      });

    }


</script>
<style lang="">
  
</style>