<script setup>
import Header from './_Header.vue';
import Footer from './_Footer.vue';
import axios from 'axios';
import { onMounted, ref } from 'vue';
import { useStore } from 'vuex';


  const store = useStore();

  const created = () => {
    axios.get('user')
    .then((response) => {
      store.dispatch('change', response.data)
    })
  }

  onMounted(() => {
    created();
  })
</script>
  
<template>
  <Header v-if="$route.meta.showHeader"/>
  <RouterView />
  <Footer v-if="$route.meta.showFooter"/>
</template>
