<script setup>
import Header from './_Header.vue';
import Footer from './_Footer.vue';
import Sidebar from './_Sidebar.vue';
import { watch, onMounted, ref } from 'vue';
import { useRoute } from 'vue-router';
import { useAuthStore } from '@/stores/storeAuth';

  const authStore = useAuthStore();
  const route = useRoute();
  const loading = ref(true);

  const created = () => {
    authStore.getUser();
    loading.value = false
  }

  onMounted(() => {
    created();
  });

  watch(() => route.fullPath, () => {
    loading.value = true
    setTimeout(() => {
      loading.value = false
    }, 1000)
  })

</script>
  
<template>
  <div v-if="loading" class="load">
    <div class="loader"></div>
  </div>
  <div v-else>
    <Header v-if="route.meta.showHeader"/>
    <Sidebar v-if="route.meta.showSidebar"/>
    <div class="p-top">
      <RouterView />
    </div>
  </div>
  <Footer v-if="route.meta.showFooter"/>
</template>

<style>

  .p-top {
    padding-top: 88px;
  }

</style>
