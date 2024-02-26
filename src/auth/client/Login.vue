<template lang="">
  
  <div class="container">
    <div class="row justify-content-center">
      <div class="col-12 col-md-8 col-lg-6 mt-5">
        <div class="card">
          <div class="card-body">
            <div class="text-center">
              <h3>Login To Start </h3>
            </div>
            <form @submit.prevent="authStore.handleLogin(form)">
              <!-- <div class="alert alert-danger text-center" v-if="errorMessage" role="alert">
                  {{ errorMessage }}
                </div>  -->
              <div class="mb-4">
                <label class="label-control" for="email">Email</label>
                <input v-model="form.email" class="form-control" type="text" id="email" placeholder="Enter your email">
              </div>
              <div class="mb-4">
                <label class="label-control" for="password">Password</label>
                <input v-model="form.password" class="form-control" type="password" id="password" placeholder="Enter your password">
              </div>
              <div class="mb-4">
                <button class="btn btn-primary" type="submit">Login</button>
              </div>
            </form>
            <div class="">
              <p>I forget password: <span><a href="#">Click here</a></span></p>
              <p>I don't have account: 
                <span>
                  <router-link to="/register">
                    Create one
                  </router-link>
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

</template>
<script setup>
import { ref } from 'vue';
import { useAuthStore } from '@/stores/storeAuth';

  const authStore = useAuthStore();

  const form = ref({
    email: '',
    password: ''
  });

</script>