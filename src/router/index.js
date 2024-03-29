import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../pages/Home/HomeComponent.vue';
import RestaurantView from '../pages/Restaurant/RestaurantComponent.vue';
import MenuView from '../pages/Restaurant/MenuComponent.vue';
import AboutView from '../pages/About/AboutComponent.vue';
import ReserveView from '../pages/Reserve/ReserveComponent.vue';
import OwnerPage from '../admin/OwnerPage/OwnerPage.vue';
import Login from '../auth/client/Login.vue';
import Register from '../auth/client/Register.vue';
import OwnerCategoryComponent from '../admin/OwnerPage/category/CategoryComponent.vue';
import OwnerMenuComponent from '../admin/OwnerPage/menu/MenuComponent.vue';
import OwnerProfileComponent from '../admin/OwnerPage/profile/ProfileComponent.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/home',
      name: 'home',
      component: HomeView,
      meta: { 
        showFooter: true,
        showHeader: true,
        showSidebar: false
      },
    },
    {
      path: '/client/restaurant',
      name: 'client.restaurant',
      component: RestaurantView,
      meta: { 
        showFooter: true,
        showHeader: true,
        showSidebar: false
      },
    },

    {
      path: '/menu/:id',
      name: 'menu',
      component: MenuView,
      meta: { 
        showFooter: true,
        showHeader: true,
        showSidebar: false
      },
    },

    {
      path: '/client/about',
      name: 'client.about',
      component: AboutView,
      meta: { 
        showFooter: true,
        showHeader: true,
        showSidebar: false
      },
    },
    {
      path: '/client/reserve',
      name: 'client.reserve',
      component: ReserveView,
      meta: { 
        showFooter: true,
        showHeader: true,
        showSidebar: false
      },
    },
    {
      path: '/owner',
      name: 'owner.page',
      component: OwnerPage,
      meta: { 
        showFooter: false,
        showHeader: true,
        showSidebar: true
      },
    },

    {
      path: '/owner/category',
      name: 'owner.category',
      component: OwnerCategoryComponent,
      meta: {
        showHeader: true,
        showSidebar: true
      }
    },

    {
      path: '/owner/menu',
      name: 'owner.menu',
      component: OwnerMenuComponent,
      meta: {
        showHeader: true,
        showSidebar: true
      }
    },

    {
      path: '/owner/profile',
      name: 'owner.profile',
      component: OwnerProfileComponent,
      meta: {
        showHeader: true,
        showSidebar: true
      }
    },

    {
      path: '/login',
      name: 'login',
      component: Login,
      meta: { 
        showFooter: false,
        showHeader: true,
        showSidebar: false
      },
    },

    {
      path: '/register',
      name: 'register',
      component: Register,
      meta: { 
        showFooter: false,
        showHeader: true,
        showSidebar: false
      },
    },
  ]
})

export default router
