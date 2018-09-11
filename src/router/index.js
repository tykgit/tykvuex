import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/Login.vue'
// import Work from '@/components/Work'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Login',
      component: Login
    }
    // {
    //   path: '/Work',
    //   name: 'Work',
    //   component: Work
    // }
  ]
})