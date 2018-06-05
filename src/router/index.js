import Vue from 'vue'
import Router from 'vue-router'
import home from '@/components/home'
import login from '@/components/login'
import register from '@/components/register'
import first from '@/components/first'

Vue.use(Router)

export default new Router({
  routes: [{
    path: '/',
    component: home,
    children: [{
      path: '',
      component: first
    }]
  }, {
    path: '/login',
    component: login
  }, {
    path: '/register',
    component: register
  }, {
    path: '*',
    redirect: '/'
  }]
})
