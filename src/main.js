import './axios.js';

import { createApp } from 'vue';
import App from './components/layouts/App.vue';
import router from './router';
import store from './store'

const app = createApp(App)

app.use(router)
app.use(store)
app.mount('#app')
