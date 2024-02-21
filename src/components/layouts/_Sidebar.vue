<template>
  
  <aside class="sidebar col-10">
    <button @click="sidebarToggle()" class="sidebar-toggle">
      <i class="fas fa-bars"></i>
    </button>
    <div class="sidebar-header">
      <router-link class="navbar-brand" to="/home">
        <span class="font-size">Feane</span>
      </router-link>
    </div>
    <!-- links -->
    <ul class="links">
      <li>
        <router-link to="#">
          <i class="fa-solid fa-gauge"></i>&nbsp;
          Dashboard
        </router-link>
      </li>
      <li>
        <router-link to="#">
          <i class="fa-solid fa-list"></i>&nbsp;
          Categories
          </router-link>
      </li>
      <li>
        <router-link to="#">
          <i class="fa-solid fa-utensils"></i>&nbsp;
          Menus
          </router-link>
      </li>
      <li>
        <router-link to="#">
          <i class="fa-solid fa-user"></i>&nbsp;
          Profile
          </router-link>
      </li>
    </ul>
    <!-- social media -->
    <ul class="social-icons">
      <li>
        <a href="#">
          <i class="fab fa-facebook"></i>
        </a>
      </li>
      <li>
        <a href="#">
          <i class="fa-brands fa-x-twitter" aria-hidden="true"></i>
        </a>
      </li>
      <li>
        <a href="#">
          <i class="fa-brands fa-linkedin" aria-hidden="true"></i>
        </a>
      </li>
      <li>
        <a href="#">
          <i class="fa-brands fa-instagram" aria-hidden="true"></i>
        </a>
      </li>
      <li>
        <a href="#">
          <i class="fa-brands fa-pinterest-p" aria-hidden="true"></i>
        </a>
      </li>
    </ul>
  </aside>
</template>
<script setup>


  const sidebarToggle = () => {
    const sidebar = document.querySelector(".sidebar");
    sidebar.classList.toggle("show-sidebar");
  }

</script>