<template lang="">
  <div class="heading_container heading_center mt-3">
   <h2>
     Menus
   </h2>
 </div>


 <div class="container">
   <div class="card my-3">
     <div class="card-body bg-light">
       <div class="row justify-content-between">
         <div class="col-6">
           <button class="btn btn-warning">
             <i class="fa-solid fa-plus"></i>
             Add Menu
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
             <th scope="col">Photo</th>
             <th scope="col">Name Menu</th>
             <th scope="col">Discount</th>
             <th scope="col">Price</th>
             <th scope="col">Name Category</th>
             <th scope="col">Description</th>
             <th scope="col">Actions</th>
           </tr>
         </thead>
         <tbody>
           <tr>
             <th scope="row">1</th>
             <td>pizza_chesse.png</td>
             <td>Pizza Cheese</td>
             <td>-20%</td>
             <td>8.99</td>
             <td>Pizza</td>
             <td>pizza with cheesse</td>
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