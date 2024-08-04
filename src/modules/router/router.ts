import { createRouter, createWebHistory, type RouterOptions } from 'vue-router'

export const getRouter = (routes: RouterOptions['routes']) => {

  return createRouter({
    routes,
    history: createWebHistory()
  })
}
