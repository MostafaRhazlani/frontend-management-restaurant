<template lang="">

  <div class="container">
    <div class="row justify-content-center">
      <div class="col-12 col-md-10 col-lg-8 mt-5">
        <div class="card">
          <div class="card-body">
            <div class="text-center">
              <h3>Create New Account </h3>
            </div>
            <div class="my-4 d-flex justify-content-center">
              <ul class="nav nav-pills">
                <li class="nav-item">
                  <a class="nav-link active" href="#profile" data-toggle="tab">
                    <i class="fa fa-user mr-1"></i>
                    Register as a user
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#changePassword" data-toggle="tab">
                    <i class="fa-solid fa-building"></i>
                    Register as owner
                  </a>
                </li>
              </ul>
            </div>
            <div class="tab-content ">
              <div class="tab-pane active" id="profile">
                <form @submit.prevent="authStore.handleRegister(form)" class="form-horizontal">
                  <div class="mb-3">
                    <label class="label-control" for="username">Username</label>
                    <input v-model="form.type_role" class="form-control" type="hidden">
                    <input v-model="form.name" class="form-control" type="text" placeholder="Enter your username">
                    <span class="text-danger" v-if="errors && errors.name">{{ errors.name[0] }}</span>
                  </div>
                  <div class="mb-3">
                    <label class="label-control" for="email">Email</label>
                    <input v-model="form.email" class="form-control" type="text" id="email" placeholder="Enter your email">
                    <span class="text-danger" v-if="errors && errors.email">{{ errors.email[0] }}</span>
                  </div>
                  <div class="mb-4">
                    <label class="label-control" for="password">Password</label>
                    <input v-model="form.password" class="form-control" type="password" id="password" placeholder="Enter your password">
                    <span class="text-danger" v-if="errors && errors.password">{{ errors.password[0] }}</span>
                  </div>
                  <div class="mb-4">
                    <label class="label-control" for="confirm_password">Confirm Password</label>
                    <input v-model="form.password_confirmation" class="form-control" type="password" id="confirm_password" placeholder="Confirm your password">
                  </div>
                  <div class="mb-4">
                    <button class="btn btn-primary col-12" type="submit">Register</button>
                  </div>
                </form>
              </div>
                <owner-register />
            </div>
            <div>
              <p>back to:
                <span>
                  <router-link to="/login">
                    Login
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
  import OwnerRegister from '../owner/OwnerRegister.vue';
  import { reactive } from 'vue';
  import { useAuthStore } from '@/stores/storeAuth'

  const authStore = useAuthStore();
  const form = reactive({
      'name': '',
      'email': '',
      'password': '',
      'password_confirmation': '',
      'type_role': 'User'
  });
</script>