<template lang="">

  <div class="container">
    <div class="col d-flex justify-content-center">
      <div class="col-6 mt-5">
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
            <div class="tab-content">
              <div class="tab-pane active" id="profile">
                <form class="form-horizontal">
                  <div class="mb-3">
                    <label class="label-control" for="username">Username</label>
                    <input class="form-control" type="text" placeholder="Enter your username">
                  </div>
                  <div class="mb-3">
                    <label class="label-control" for="email">Email</label>
                    <input class="form-control" type="text" id="email" placeholder="Enter your email">
                  </div>
                  <div class="mb-4">
                    <label class="label-control" for="password">Password</label>
                    <input class="form-control" type="password" id="password" placeholder="Enter your password">
                  </div>
                  <div class="mb-4">
                    <label class="label-control" for="confirm_password">Confirm Password</label>
                    <input class="form-control" type="password" id="confirm_password" placeholder="Confirm your password">
                  </div>
                  <div class="mb-4">
                    <button class="btn btn-primary col-12" type="submit">Register</button>
                  </div>
                </form>
              </div>

              <OwnerRegister />
            </div>
            <form>

            </form>
            <div>
              <p>back to:
                <span>
                  <router-link to="/client/login">
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
<script>
import OwnerRegister from '../owner/OwnerRegister.vue';
  export default {
    components: {
      OwnerRegister
    }
  }
</script>
<style lang="">

</style>