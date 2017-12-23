import Vue from 'vue'
import Router from 'vue-router'
import MESProjects from '@/components/MESProjects'
import MESAbout from '@/components/MESAbout'
import MESContact from '@/components/MESContact'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'MES-Home',
      component: MESProjects
    },
    {
      path: '/projects/:projset',
      name: 'MES-Projects',
      component: MESProjects
    },
    {
      path: '/about',
      name: 'MES-About',
      component: MESAbout
    },
    {
      path: '/contact',
      name: 'MES-Contact',
      component: MESContact
    }
  ]
})
