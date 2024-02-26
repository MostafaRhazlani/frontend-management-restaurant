import './axios.js';

import { createApp, markRaw } from 'vue';
import { createPinia } from 'pinia';
import App from './components/layouts/App.vue';
import router from './router';

const pinia = createPinia();

pinia.use(({ store }) => {
  store.router = markRaw(router)
})

const app = createApp(App)

app.use(router)
app.use(pinia)
app.mount('#app')
