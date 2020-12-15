import Vue from 'vue'
import App from './App.vue'
import './assets/css/bootstrap.css'
import './assets/css/normal.css'
import './assets/css/all.min.css'
// import axios from 'axios'
// import VueAxios from 'vue-axios'

// import footerPosition from './components/FooterBar.vue'

import router from './router'
Vue.config.productionTip = true

new Vue({
  render: h => h(App),
  router: router
}).$mount('#app')


// footerPosition()