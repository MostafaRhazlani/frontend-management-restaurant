<template lang="">
  
  <div class="container">
    <div class="col d-flex justify-content-center">
      <div class="col-6 mt-5">
        <div class="card">
          <div class="card-body">
            <div class="text-center">
              <h3>Login To Start </h3>
            </div>
            <form @submit.prevent="handleSubmit">
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
import axios from 'axios';
import { reactive } from 'vue';
import { useRouter } from 'vue-router';
import { useStore } from 'vuex';

  const store = useStore();
  const router = useRouter();

  const form = reactive({
    'email': '',
    'password': ''
  });

  const handleSubmit = () => {

    axios.post('login', form)
    .then((response) => {
      form.email = response.data.email,
      form.password = response.data.password;
      localStorage.setItem('token', response.data.token );
      store.dispatch('change', response.data.user)
      router.push('/home');
    })
    .catch ((error) => {
      console.error('Invalid email or password', error)
    })
  }

</script>