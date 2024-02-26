import { defineStore } from "pinia";
import axios from "axios";

export const useAuthStore = defineStore("auth", {
  state: () => ({
    authUser: null,
    userRestaurant: null
  }),

  getters: {
    user: (state) => state.authUser,
    restaurant: (state) => state.userRestaurant
  },

  actions: {
    getUser() {
      axios.get('user')
      .then((response) => {
        localStorage.getItem('token');
        this.authUser = response.data;
        
        this.userRestaurant = response.data.restaurant
      })
    },

    handleLogin (data) {
      axios.post('login', data)
      .then((response) => {
        data.email = response.data.email,
        data.password = response.data.password;
        localStorage.setItem('token', response.data.token );
        this.authUser = response.data;
        this.userRestaurant = response.data.user.restaurant
        this.router.push('/home');
      })
    },

    handleRegister (data) {
      axios.post('register', data)
      .then((responnse) => {
        this.router.push('/login');
      })
    },

    handleLogout() {
      axios.post('logout');
      this.authUser = null
      this.userRestaurant = null
      this.router.push('/home');
    }
  }
})