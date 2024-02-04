<script setup>
import { RouterLink, RouterView } from 'vue-router'
import Header from './_Header.vue';
import Footer from './_Footer.vue';
</script>
  
<template>
  <Header v-if="$route.meta.showHeader"/>
  <RouterView />
  <Footer v-if="$route.meta.showFooter"/>
</template>
