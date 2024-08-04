import type { RouterOptions } from 'vue-router'
import IndexPage from '@/pages/IndexPage.vue'

export const routes: RouterOptions['routes'] = [
  {
    path: '/',
    component: IndexPage
  }
]
