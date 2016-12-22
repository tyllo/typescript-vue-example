import * as Vue from 'vue'
import * as Router from 'vue-router'

import Home from 'components/home'
import Test from 'components/test'

Vue.use(Router)

export const routes = [
  {
    path: '/',
    name: 'home',
    component: Home,
  },
  {
    path: '/test',
    name: 'test',
    component: Test,
  },
] as Router.RouteConfig[]

export const router = new Router({
  mode: 'history',
  routes,
})

export default router
