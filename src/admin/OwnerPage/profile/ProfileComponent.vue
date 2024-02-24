<template lang="">

  <div class="heading_container heading_center mt-3">
    <h2>
      Profile
    </h2>
  </div>

  <!-- content -->
  <div class="content">
    <div class="container-fluid mt-3">
      <div class="card col col-sm-8 mx-auto">
        <div class="card-body">
          <div class="row">
            <div class="col mx-auto">
            <div class="mt-3">
              <div class="row flex-column align-items-center mx-auto">
                <input ref="fileInput" type="file" class="d-none">
                <img class="profile-user-img rounded-circle" width="100" height="100" alt="">
                <span class="mt-1 badge badge-success">owner</span>
                <h4 class="mt-2 mb-0">Mostafa Rhazlani</h4>
                <span>mostafa@gmail.com</span>
              </div>
            </div>
              <div class="card mt-4">
                <div class="card-header">
                  <div class="d-flex justify-content-center">
                    <ul class="nav nav-tabs">
                      <li class="nav-item">
                        <a class="nav-link text-secondary active" href="#profile" data-toggle="tab">
                          <i class="fa fa-user mr-1"></i>
                          Edit Information User
                        </a>
                      </li>
                      <li class="nav-item">
                        <a class="nav-link text-secondary" href="#changePassword" data-toggle="tab">
                          <i class="fa fa-key mr-1"></i>
                          Edit Information Restaurant
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div class="card-body">
                  <div class="tab-content">
                    <div class="tab-pane active" id="profile">
                      <form class="form-horizontal">
                        <div class="row">
                          <div class="col-6 mb-3">
                            <label for="changeName">Change Name</label>
                            <input type="text" class="form-control" id="changeName" placeholder="Enter your name">
                          </div>
                          <div class="col-6 mb-4">
                            <label for="changeEmail">Change Email</label>
                            <input type="text" class="form-control" id="changeEmail" placeholder="Enter your email">
                          </div>
                        </div>
                        <div class="mb-3">
                          <label for="currentPassword">Current Password</label>
                          <input type="password" class="form-control" id="currentPassword" placeholder="Enter your current password">
                        </div>
                        <div class="row">
                          <div class="col-6 mb-4">
                            <label for="newPassword">New Password</label>
                            <input type="password" class="form-control" id="newPassword" placeholder="Enter your new password">
                          </div>
                          <div class="col-6 mb-4">
                            <label for="confirmPassword">Confirm Password</label>
                            <input type="password" class="form-control" id="confirmPassword" placeholder="Confirm your password">
                          </div>
                        </div>
                        <button class="btn btn-warning text-white w-100 rounded-pill">Save</button>
                      </form>
                    </div>

                    <div class="tab-pane" id="changePassword">
                      <form class="form-horizontal">
                        <div class="row">
                          <div class="col-6 mb-3">
                            <label for="changeNameRestaurant">Change Name Restaurant</label>
                            <input type="text" class="form-control" id="changeName" placeholder="Enter your name">
                          </div>
                          <div class="col-6 mb-4">
                            <label for="changeEmailRestaurant">Change Email Restaurant</label>
                            <input type="text" class="form-control" id="changeEmail" placeholder="Enter your email">
                          </div>
                        </div>
                        <div class="row">
                          <div class="col-6 mb-4">
                            <label for="changePhone">Change Phone</label>
                            <input type="password" class="form-control" id="changePhone" placeholder="Enter your new password">
                          </div>
                          <div class="col-6 mb-4">
                            <label for="changeLocation">Change Location</label>
                            <input type="password" class="form-control" id="changeLocation" placeholder="Confirm your password">
                          </div>
                        </div>
                        <div class="mb-3">
                          <label for="">Change Description</label>
                          <textarea class="form-control" id="" cols="10" rows="5" placeholder=""></textarea>
                        </div>
                        <button class="btn btn-warning text-white w-100 rounded-pill">Save</button>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- end content -->
</template>
<script setup>
  import axios from 'axios';
  import { onMounted, ref } from 'vue';

  const form = ref();

  const getRestaurantWithUser = () => {
    axios.get('user')
    .then((response) => {
      form.value = response.data
    })
  }

  onMounted(() => {
    getRestaurantWithUser();
  })
</script>
<style lang="">

</style>