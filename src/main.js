import './axios.js';

import { createApp } from 'vue'
import App from './components/layouts/App.vue'
import router from './router'

const app = createApp(App)

app.use(router)

app.mount('#app')
