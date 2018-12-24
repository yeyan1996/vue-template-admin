import Vue from 'vue'
import App from './App.vue'
import router from './router/router'
import store from './store'
import * as filters from './filters' // global filters
import '@/components/Pagination'
import '@/components/ZComponents'
import './icons'
import '@/element/element'
import "@/style/reset.scss";


Vue.config.productionTip = false

const hacks = require('viewport-units-buggyfill/viewport-units-buggyfill.hacks');
require('viewport-units-buggyfill').init({
    hacks: hacks
});

Object.keys(filters).forEach(key => {
    Vue.filter(key, filters[key])
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
