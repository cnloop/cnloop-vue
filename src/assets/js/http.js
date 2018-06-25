import axios from 'axios'
import router from '@/router'
import {
  getToken,
  removeUserInfo
} from './auth'

export const http = axios.create({
  baseURL: 'http://localhost:3000'
})


http.interceptors.request.use(function (config) {
  if (config.url !== '/login' && config.url !== '/register') {
    config.headers['Authorization'] = getToken()
  }
  return config
}, function (error) {
  return Promise.reject(error)
})

// console.log(this.$store)
http.interceptors.response.use(function (response) {
  var code = response.data.code;
  if (code === 403) {
    removeUserInfo();
    router.push('/login/1');
  }
  return response
}, function (error) {
  return Promise.reject(error)
})



const httpPlugin = {}

httpPlugin.install = function (Vue, options) {
  Vue.prototype.$http = http
}

export default httpPlugin
