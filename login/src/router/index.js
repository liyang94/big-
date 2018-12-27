import Vue from 'vue'
import Router from 'vue-router'
import Login from '../view/login'
import Phonelogin from '../view/phonelogin'
import Gexingtuijian from '../view/home/gexingtuijian'
import Zhubodiantai from '../view/home/zhubodiantai'
import Video from '../view/video'
import Friends from '../view/friends'
import Our from '../view/our'
import Zhanghao from '../view/zhanghao'
Vue.use(Router)

export default new Router({
  mode:"history",
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
    },
    {
      path: '/gexingtuijian',
      name: 'gexingtuijian',
      component: Gexingtuijian
    },
    {
      path: '/zhubodiantai',
      name: 'zhubodiantai',
      component: Zhubodiantai
    },
    {
      path: '/friends',
      name: 'friends',
      component: Friends
    },
    {
      path: '/our',
      name: 'our',
      component: Our
    },
    {
      path: '/video',
      name: 'video',
      component: Video
    },
    {
      path: '/zhanghao',
      name: 'zhanghao',
      component: Zhanghao
    }
  ]
})
