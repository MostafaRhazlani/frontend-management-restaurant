<script setup>
import { RouterLink, RouterView } from 'vue-router'
import Header from './_Header.vue';
import Footer from './_Footer.vue';
</script>
  
<template>
  <Header />
  <RouterView />
  <Footer v-if="$route.meta.showFooter"/>
</template>
