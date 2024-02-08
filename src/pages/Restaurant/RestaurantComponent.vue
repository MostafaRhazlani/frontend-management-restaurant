<template>
  <div class="heading_container heading_center mt-5">
    <h2>
      Restaurants
    </h2>
  </div>

  <!-- offer section -->
  <section class="offer_section layout_padding-bottom">
    <div class="offer_container">
      <div class="container">
        <div v-if="restaurants.length !== 0" class="row accordion" id="accordionExample">
          <div v-for="(restaurant, index) in restaurants" :key="index" class="col-md-6">
            <div class="box">
              <div class="img-box">
                <img :src="restaurant.photo" alt="">
              </div>
              <div class="detail-box">
                <h5 class="mb-3">
                  {{ restaurant.name_restaurant }}
                </h5>
                <a :href="'#collapse' + restaurant.id" data-toggle="collapse" aria-expanded="true" aria-controls="collapseOne">
                  Show Details
                </a>
                <div :id="'collapse' + restaurant.id" class="collapse transition-box mt-4" aria-labelledby="headingOne"
                  data-parent="#accordionExample">
                  <div class="p-3 custom_border mb-3">
                    <div class="hide_background">
                      <h4 class="text-reset">Description</h4>
                      <p class="">{{ restaurant.description }}</p>
                    </div>
                    <div class="hide_background">
                      <h4 class=" mt-5">Our Information</h4>
                      <a class="col" href="#">
                        <i class="fa fa-map-marker" aria-hidden="true"></i>&nbsp;
                        <span>Location</span>
                      </a>
                      <a href="#">
                        <i class="fa fa-phone" aria-hidden="true"></i>&nbsp;
                        <span>Call {{ restaurant.phone }}</span>
                      </a>
                      <a href="#">
                        <i class="fa fa-envelope" aria-hidden="true"></i>&nbsp;
                        <span>
                          {{ restaurant.email }}
                        </span>
                      </a>
                    </div>
                  </div>
                  <router-link to="/menu">Our Menu</router-link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div v-else class="text-center">
          <img src="../../assets/12083608_Wavy_Bus-26_Single-11.svg" width="70%" alt="">
        </div>
      </div>
    </div>
  </section>
  <!-- end offer section -->
</template>
<script setup>
  import axios from 'axios';
  import {
    onMounted,
    ref
  } from 'vue';

  const restaurants = ref([]);

  const getRestaurants = () => {
    axios.get('restaurants')
      .then((response) => {
        restaurants.value = response.data.data
      })
  }

  onMounted(() => {
    getRestaurants();
  });
</script>

<style>
  .transition-box {
    transition: all 0.4s;
  }

  .hide_background a {
    background: none !important;
    color: white;
    padding-left: 0 !important;
    font-size: 13px;
  }

  .hide_background a:hover {
    color: #ffbe33 !important;
  }

  .hide_background h4 {
    font-weight: 300;
    opacity: 0.3;
  }

  .custom_border {
    border: solid #ffbe33 3px;
    border-radius: 20px;
  }
</style>