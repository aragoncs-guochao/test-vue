import Vue from 'vue'
import VueRouter from 'vue-router'
import show from './views/Home.vue'
import show_detail from './views/ShowDetail.vue'

Vue.use(VueRouter)

const routes = [
  { path: '/show/list', name: 'show-list', component: show},
  { path: '/show/:id/detail', name: 'show-detail', component: show_detail},
]


const router = new VueRouter({
  mode: 'history',
  routes
})

export default router