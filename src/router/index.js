import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../pages/Home/HomeComponent.vue';
import RestaurantView from '../pages/Restaurant/RestaurantComponent.vue';
import AboutView from '../pages/About/AboutComponent.vue';
import ReserveView from '../pages/Reserve/ReserveComponent.vue';
import OwnerPage from '../admin/OwnerPage/OwnerPage.vue';
import Login from '../auth/client/Login.vue';
import Register from '../auth/client/Register.vue';
import RegisterOwnerRestaurant from '../auth/owner/RegisterOwnerRestaurant.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/home',
      name: 'home',
      component: HomeView,
      meta: { 
        showFooter: true,
        showHeader: true
      },
    },
    {
      path: '/client/restaurant',
      name: 'client.restaurant',
      component: RestaurantView,
      meta: { 
        showFooter: true,
        showHeader: true
      },
    },
    {
      path: '/client/about',
      name: 'client.about',
      component: AboutView,
      meta: { 
        showFooter: true,
        showHeader: true
      },
    },
    {
      path: '/client/reserve',
      name: 'client.reserve',
      component: ReserveView,
      meta: { 
        showFooter: true,
        showHeader: true
      },
    },
    {
      path: '/owner/page',
      name: 'owner.page',
      component: OwnerPage,
      meta: { 
        showFooter: false,
        showHeader: true
      },
    },

    {
      path: '/login',
      name: 'login',
      component: Login,
      meta: { 
        showFooter: false,
        showHeader: false
      },
    },

    {
      path: '/register',
      name: 'register',
      component: Register,
      meta: { 
        showFooter: false,
        showHeader: false
      },
    },

    {
      path: '/register/restaurant',
      name: 'register.restaurant',
      component: RegisterOwnerRestaurant,
      meta: { 
        showFooter: false,
        showHeader: false
      },
    },
  ]
})

export default router
