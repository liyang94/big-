import Vue from 'vue'
import Router from 'vue-router'
import Login from '../view/login'
import Phonelogin from '../view/phonelogin'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: Login
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/phonelogin',
      name: 'phonelogin',
      component: Phonelogin
    }
  ]
})
