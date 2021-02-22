import Vue from 'vue'
import Router from 'vue-router'
import Home from '../views/Home'
import ShowInfo from '../views/ShowInfo'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/showInfo/:id',
      name: 'showInfo',
      component: ShowInfo,
      props: true
    }
  ]
})
