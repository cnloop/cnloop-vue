import Vue from 'vue'
import Router from 'vue-router'
import home from '@/components/home'
import login from '@/components/login'
import register from '@/components/register'
import first from '@/components/first'
import topic from '@/components/topic'
import write from '@/components/write'
import setting from '@/components/setting'
import search from '@/components/search'
import personal from '@/components/personal'
import pretopic from '@/components/personal/pretopic'
import precomment from '@/components/personal/precomment'
import prefollow from '@/components/personal/prefollow'
import prefans from '@/components/personal/prefans'
import prelike from '@/components/personal/prelike'
import premsg from '@/components/personal/premsg'
import precollection from '@/components/personal/precollection'

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
    path: '/setting',
    component: setting
  }, {
    path: '/search',
    component: search
  }, {
    path: '/personal',
    component: personal,
    children: [{
      path: '',
      component: pretopic
    }, {
      path: 'pretopic',
      component: pretopic
    }, {
      path: 'precomment',
      component: precomment
    }, {
      path: 'prefollow',
      component: prefollow
    }, {
      path: 'prefans',
      component: prefans
    }, {
      path: 'prelike',
      component: prelike
    }, {
      path: 'premsg',
      component: premsg
    }, {
      path: 'precollection',
      component: precollection
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
