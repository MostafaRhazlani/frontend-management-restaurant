import { createStore } from 'vuex';

export default createStore({
  state: {
      user: null
  },

  getters: {
    isLoggedin(state) {
      return state.user;
    }
  },
  
  mutations: {
    SET_USER(state, user) {
      state.user = user;
    }
  },

  actions: {
    change(context , user) {
      context.commit('SET_USER', user);
    }
  },

});