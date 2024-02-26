<template lang="">
   <div class="heading_container heading_center mt-3">
    <h2>
      Categories
    </h2>
  </div>


  <div class="container">
    <div class="card my-3">
      <div class="card-body bg-light">
        <div class="row justify-content-between">
          <div class="col-6">
            <button class="btn btn-warning">
              <i class="fa-solid fa-plus"></i>
              Add Category
            </button>
          </div>
          <div class="col-4">
            <input type="search" class="form-control" placeholder="Search...">
          </div>
        </div>
      </div>
    </div>
    <div class="card">
      <div class="card-body">
        <table class="table table-hover text-center">
          <thead class="thead-light">
            <tr>
              <th scope="col">#</th>
              <th scope="col">Name Category</th>
              <th scope="col">Name Restaurant</th>
              <th scope="col">Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">1</th>
              <td>Pizza</td>
              <td>Restaurant One</td>
              <td>
                <a href="#" class="badge badge-primary">Edit</a>&nbsp;
                <a href="#" class="badge badge-danger">Delete</a>
              </td>
            </tr>
            <tr>
              <th scope="row">2</th>
              <td>Sandwish</td>
              <td>Restaurant Two</td>
              <td>
                <a href="#" class="badge badge-primary">Edit</a>&nbsp;
                <a href="#" class="badge badge-danger">Delete</a>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
    <div class="card">
      <div clas="card-body">
        
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