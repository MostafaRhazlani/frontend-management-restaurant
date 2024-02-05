<template lang="">
  <div class="tab-pane" id="changePassword">
    <form class="form-horizontal">
      <div class="mb-3">
        <label class="label-control" for="ownername">Ownername</label>
        <input class="form-control" type="text" name="" id="ownername" placeholder="Enter your ownername">
      </div>
      <div class="mb-3">
        <label class="label-control" for="email">Email</label>
        <input class="form-control" type="text" name="" id="email" placeholder="Enter your email">
      </div>
      <div class="mb-4">
        <label class="label-control" for="password">Password</label>
        <input class="form-control" type="password" name="" id="password" placeholder="Enter your password">
      </div>
      <div class="mb-4">
        <label class="label-control" for="confirm_password">Confirm password</label>
        <input class="form-control" type="password" name="" id="confirm_password" placeholder="Confirm your password">
      </div>
      <div class="mb-4">
        <router-link to="/register/restaurant" class="btn btn-primary d-flex align-items-center justify-content-center">
          Next&nbsp;
          <i class="fa-solid fa-circle-chevron-right"></i>
        </router-link>
      </div>
    </form>
  </div>
</template>
<script>
export default {
  
}
</script>
<style lang="">
  
</style>