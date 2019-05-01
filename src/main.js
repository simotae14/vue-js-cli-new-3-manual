import Vue from 'vue'
import './plugins/vuetify'
import App from './App.vue'
import router from './router'
import store from './store'
import './registerServiceWorker'
import MyFirst from '@/components/MyFirst.vue'

Vue.config.productionTip = false
Vue.component('my-component', MyFirst)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
