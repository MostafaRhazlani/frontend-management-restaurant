<template lang="">

  <div class="container">
    <div class="col d-flex justify-content-center">
      <div class="col-8 mt-5">
        <div class="card">
          <div class="card-body">
            <div class="text-center mb-5">
              <h3>Create Your Restaurant </h3>
            </div>
            <form class="form-horizontal">
              <div class="mb-3 d-flex">
                <div class="col-6 p-0 pr-3">
                  <label class="label-control" for="name_restaurant">Name Restaurant</label>
                  <input class="form-control" type="text" id="name_restaurant" placeholder="Enter your name restaurant">
                </div>
                <div class="col-6 p-0 pl-3">
                  <label class="label-control" for="email">Email Restaurant</label>
                  <input class="form-control" type="email" id="email" placeholder="Enter your email restaurant">
                </div>
              </div>
              <div class="mb-4 d-flex">
                <div class="col-6 p-0 pr-3">
                  <label class="label-control" for="phone">Phone</label>
                  <input class="form-control" type="text" id="phone" placeholder="Enter your phone restaurant">
                </div>
                <div class="col-6 p-0 pl-3">
                  <label class="label-control" for="location">Location</label>
                  <input class="form-control" type="text" id="location" placeholder="Enter your location restaurant">
                </div>
              </div>
              <div class="mb-4">
                <label for="">Description</label>
                <textarea class="form-control" id="" cols="10" rows="5" placeholder=""></textarea>
              </div>
              <div class="mb-4">
                <button class="btn btn-primary" type="submit">Register</button>
              </div>
              </form>
            <div>
              <p>back to:
                <span>
                  <a href="/register">
                    Register
                  </a>
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
  export default {

  }
</script>
<style lang="">

</style>