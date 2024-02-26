<template lang="">
  <div class="tab-pane" id="changePassword">
    <form class="form-horizontal" @submit.prevent="submitOwner()">
      <div class="text-center mb-4">
        <h5>Information Owner</h5>
      </div>
      <div class="mb-3 d-flex">
        <div class="col-6 p-0 pr-3">
          <label class="label-control m-0" for="ownername">Owner name</label>
          <input v-model="form.type_role" class="form-control" type="hidden">
          <input v-model="form.name" class="form-control" type="text" name="" id="ownername" placeholder="Enter your ownername">
          <span class="text-danger" v-if="errors && errors.name">{{ errors.name[0] }}</span>
        </div>
        <div class="col-6 p-0 pl-3">
          <label class="label-control m-0" for="email">Email</label>
          <input v-model="form.email" class="form-control" type="text" name="" id="email" placeholder="Enter your email">
          <span class="text-danger" v-if="errors && errors.email">{{ errors.email[0] }}</span>
        </div>
      </div>
      <div class="mb-4 d-flex">
        <div class="col-6 p-0 pr-3">
          <label class="label-control m-0" for="password">Password</label>
          <input v-model="form.password" class="form-control" type="password" name="" id="password" placeholder="Enter your password">
          <span class="text-danger" v-if="errors && errors.password">{{ errors.password[0] }}</span>
        </div>
        <div class="col-6 p-0 pl-3">
          <label class="label-control m-0" for="confirm_password">Confirm Password</label>
          <input v-model="form.password_confirmation" class="form-control" type="password" name="" id="confirm_password" placeholder="Confirm your password">
        </div>
      </div>
      <hr class="my-3">
      <div class="text-center mb-4">
        <h5>Information Restaurant</h5>
      </div>
      <div class="mb-3 d-flex">
        <div class="col-6 p-0 pr-3">
          <label class="label-control m-0" for="name_restaurant">Name Restaurant</label>
          <input v-model="form.name_restaurant" class="form-control" type="text" id="name_restaurant" placeholder="Enter your name restaurant">
          <span class="text-danger" v-if="errors && errors.name_restaurant">{{ errors.name_restaurant[0] }}</span>
        </div>
        <div class="col-6 p-0 pl-3">
          <label class="label-control m-0" for="email">Email Restaurant</label>
          <input v-model="form.email_restaurant" class="form-control" type="email" id="email" placeholder="Enter your email restaurant">
          <span class="text-danger" v-if="errors && errors.email_restaurant">{{ errors.email_restaurant[0] }}</span>
        </div>
      </div>
      <div class="mb-4 d-flex">
        <div class="col-6 p-0 pr-3">
          <label class="label-control m-0" for="phone">Phone</label>
          <input v-model="form.phone" class="form-control" type="text" id="phone" placeholder="Enter your phone restaurant">
          <span class="text-danger" v-if="errors && errors.phone">{{ errors.phone[0] }}</span>
        </div>
        <div class="col-6 p-0 pl-3">
          <label class="label-control m-0" for="location">Location</label>
          <input v-model="form.location" class="form-control" type="text" id="location" placeholder="Enter your location restaurant">
          <span class="text-danger" v-if="errors && errors.location">{{ errors.location[0] }}</span>
        </div>
      </div>
      <div class="mb-4">
        <label for="">Description</label>
        <textarea v-model="form.description" class="form-control" id="" cols="10" rows="5" placeholder=""></textarea>
      </div>
      <div class="mb-4">
        <button class="btn btn-primary col-12" type="submit">Register</button>
      </div>
    </form>
  </div>
</template>
<script setup>

import axios from 'axios';
import { reactive, ref } from 'vue';
import { useRouter } from 'vue-router';

  const errors = ref('');
  const router = useRouter();
  const form = reactive({
      'name': '',
      'email': '',
      'password': '',
      'password_confirmation': '',
      'type_role': 'Owner',
      'name_restaurant': '',
      'email_restaurant': '',
      'phone': '',
      'location': '',
      'description': ''
  });


  const submitOwner = () => { 
    axios.post('register', form)
    .then((responnse) => {
      router.push('/login');
    })
    .catch((error) => {
      errors.value = error.response.data.errors
    });

  }
</script>
<style lang="">
  
</style>