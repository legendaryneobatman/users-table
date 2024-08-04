import App from './App.vue'
import { createApp } from 'vue'
import './assets/main.css'
import { getRouter } from '@/modules/router'
import { routes } from '@/routes'

const app = createApp(App)
const router = getRouter(routes);
app
  .use(router)
  .mount('#app')
