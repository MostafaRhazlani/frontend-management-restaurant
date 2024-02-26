<template lang="">
  <div class="fix_header">
    <div class="hero_area">
      <div class="bg-box">
        <img src="../../../public/images/hero-bg.jpg" alt="">
      </div>
      <!-- header section strats -->
      <header class="header_section">
        <div class="container">
          <nav class="navbar navbar-expand-lg custom_nav-container ">
            <a class="navbar-brand" href="index.html">
              <span>
                Feane
              </span>
            </a>

            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span class=""> </span>
            </button>

            <div class="collapse navbar-collapse" id="navbarSupportedContent">
              <ul class="navbar-nav mx-auto">
                <li class="nav-item" :class="$route.path.startsWith('/home') ? 'active' : ''">
                  <router-link to="/home" class="nav-link">Home <span class="sr-only">(current)</span></router-link>
                </li>
                <li class="nav-item" :class="$route.path.startsWith('/client/restaurant') ? 'active' : ''">
                  <router-link to="/client/restaurant"
                    :class="$route.path.startsWith('/client/restaurant') ? 'active' : ''" class="nav-link">Restaurants
                  </router-link>
                </li>
                <li class="nav-item" :class="$route.path.startsWith('/client/about') ? 'active' : ''">
                  <router-link class="nav-link" to="/client/about">About</router-link>
                </li>
                <li class="nav-item" :class="$route.path.startsWith('/client/reserve') ? 'active' : ''">
                  <router-link class="nav-link" to="/client/reserve">Book Table</router-link>
                </li>
              </ul>
              <div class="user_option">
                
                <div v-if="!authStore.user">
                  <router-link to="/login" title="log in" class="user_link">
                    <i class="fa-solid fa-right-to-bracket"></i>
                  </router-link>

                  <router-link to="/register" title="register" class="user_link">
                    <i class="fa-solid fa-user-plus"></i>
                  </router-link>
                </div>

                <div v-else class="btn-group">
                  <a href="" class="user_link dropdown-toggle" data-toggle="dropdown" aria-expanded="false">
                    <i class="fa fa-user" aria-hidden="true"></i>
                  </a>
                  <div class="dropdown-menu ">
                    <a class="dropdown-item m-0" href="#">
                      <i class="fa-solid fa-address-card"></i>&nbsp;
                      Profile
                    </a>
                    <a class="dropdown-item m-0" href="#">
                      <i class="fa-solid fa-gear"></i>&nbsp;
                      Settings
                    </a>
                    <div class="dropdown-divider"></div>
                    <a href="javascript:void(0)" class="dropdown-item m-0" @click="authStore.handleLogout">
                      <i class="fa-solid fa-right-to-bracket"></i>&nbsp;
                      Logout
                    </a>
                  </div>
                </div>

                <a class="cart_link" href="#">
                  <svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg"
                    xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 456.029 456.029"
                    style="enable-background:new 0 0 456.029 456.029;" xml:space="preserve">
                    <g>
                      <g>
                        <path
                          d="M345.6,338.862c-29.184,0-53.248,23.552-53.248,53.248c0,29.184,23.552,53.248,53.248,53.248
                                          c29.184,0,53.248-23.552,53.248-53.248C398.336,362.926,374.784,338.862,345.6,338.862z" />
                      </g>
                    </g>
                    <g>
                      <g>
                        <path d="M439.296,84.91c-1.024,0-2.56-0.512-4.096-0.512H112.64l-5.12-34.304C104.448,27.566,84.992,10.67,61.952,10.67H20.48
                                          C9.216,10.67,0,19.886,0,31.15c0,11.264,9.216,20.48,20.48,20.48h41.472c2.56,0,4.608,2.048,5.12,4.608l31.744,216.064
                                          c4.096,27.136,27.648,47.616,55.296,47.616h212.992c26.624,0,49.664-18.944,55.296-45.056l33.28-166.4
                                          C457.728,97.71,450.56,86.958,439.296,84.91z" />
                      </g>
                    </g>
                    <g>
                      <g>
                        <path
                          d="M215.04,389.55c-1.024-28.16-24.576-50.688-52.736-50.688c-29.696,1.536-52.224,26.112-51.2,55.296
                                          c1.024,28.16,24.064,50.688,52.224,50.688h1.024C193.536,443.31,216.576,418.734,215.04,389.55z" />
                      </g>
                    </g>
                    <g>
                    </g>
                    <g>
                    </g>
                    <g>
                    </g>
                    <g>
                    </g>
                    <g>
                    </g>
                    <g>
                    </g>
                    <g>
                    </g>
                    <g>
                    </g>
                    <g>
                    </g>
                    <g>
                    </g>
                    <g>
                    </g>
                    <g>
                    </g>
                    <g>
                    </g>
                    <g>
                    </g>
                    <g>
                    </g>
                  </svg>
                </a>
                <div v-if="authStore.user">
                  <div v-if="authStore.userRestaurant">
                    <router-link to="/owner" class="order_online ml-2">
                      <i class="fa-solid fa-shrimp"></i>
                      My Restaurant
                    </router-link>
                  </div>
                  <div v-else>
                    <button class="order_online ml-2">
                      <i class="fa-solid fa-plus"></i>
                      Create Restaurant
                    </button>
                  </div>
                  
                </div>
              </div>
            </div>
          </nav>
        </div>
      </header>
      <!-- end header section -->
    </div>
  </div>

</template>
<script setup>
import { useAuthStore } from '@/stores/storeAuth'
const authStore = useAuthStore();
  
</script>

<style>

.fix_header {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 999;
}
</style>