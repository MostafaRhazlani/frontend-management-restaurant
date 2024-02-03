import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../pages/Home/HomeComponent.vue';
import RestaurantView from '../pages/Restaurant/RestaurantComponent.vue';
import AboutView from '../pages/About/AboutComponent.vue';
import ReserveView from '../pages/Reserve/ReserveComponent.vue';
import OwnerPage from '../admin/OwnerPage/OwnerPage.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/home',
      name: 'home',
      component: HomeView,
      meta: { showFooter: true }
    },
    {
      path: '/client/restaurant',
      name: 'client.restaurant',
      component: RestaurantView,
      meta: { showFooter: true }
    },
    {
      path: '/client/about',
      name: 'client.about',
      component: AboutView,
      meta: { showFooter: true }
    },
    {
      path: '/client/reserve',
      name: 'client.reserve',
      component: ReserveView,
      meta: { showFooter: true }
    },
    {
      path: '/owner/page',
      name: 'owner.page',
      component: OwnerPage,
      meta: { showFooter: false }
    },
  ]
})

export default router
