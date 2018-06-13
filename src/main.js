// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import VueProgressBar from 'vue-progressbar'

import '@/assets/css/index.css'

import mavonEditor from 'mavon-editor'
import 'mavon-editor/dist/css/index.css'
// use
Vue.use(mavonEditor)

import Vuex from 'vuex'
Vue.use(Vuex)




var store = new Vuex.Store({
  state: {
    isLogin: false,
    isShow: false,
    isShowTip:false,
    routeParams: '',
    routePath: ''
  },
  mutations: {
    changeShowTip(state, status){
      state.isShowTip = status;
    },
    changeIsLogin(state, status) {
      state.isLogin = status;
    },
    changeState(state, status) {
      state.isShow = status
    },
    changeRouteParams(state, params) {
      state.routeParams = params
    },
    changeRoutePath(state, data) {
      state.routePath = data
    }
  }
})


Vue.config.productionTip = false

const options = {
  color: '#2196F3',
  failedColor: '#874b4b', //加载失败时进度条的颜色
  thickness: '2px', //进度条的粗细
  transition: { //转换速度/不透明度/终止进度条
    speed: '0.7s',
    opacity: '0.6s',
    termination: 300
  },
  autoRevert: true, //暂时的颜色变化会在完成时自动恢复或失败
  location: 'top', //更改进度栏的位置
  inverse: false //反转进度条的方向
}

Vue.use(VueProgressBar, options)


/* eslint-disable no-new */
var vm = new Vue({
  el: '#app',
  router,
  components: {
    App
  },
  template: '<App/>',
  store
})
