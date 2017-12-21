import Vue from 'vue'
import Router from 'vue-router'
import MESProjects from '@/components/MESProjects'
import MESAbout from '@/components/MESAbout'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'MESHome',
      component: MESProjects
    },
    {
      path: '/:projset',
      name: 'MESProjects',
      component: MESProjects
    },
    {
      path: '/about',
      name: 'MES-About',
      component: MESAbout
    },
    {
      path: '/contact',
      name: 'MES-About',
      component: MESAbout
    }
  ]
})
