import Vue from 'vue'
import Router from 'vue-router'
import home from '@/components/home'
import login from '@/components/login'
import register from '@/components/register'
import first from '@/components/first'
import topic from '@/components/topic'
import write from '@/components/write'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [{
    path: '/',
    component: home,
    children: [{
      path: '',
      component: first
    }, {
      path: 'all/:oRn',
      component: topic
    }, {
      path: 'general/:oRn',
      component: topic
    }, {
      path: 'help/:oRn',
      component: topic
    }, {
      path: 'vue/:oRn',
      component: topic
    }, {
      path: 'css/:oRn',
      component: topic
    }, {
      path: 'js/:oRn',
      component: topic
    }, {
      path: 'node/:oRn',
      component: topic
    }]
  }, {
    path: '/write',
    component: write
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
