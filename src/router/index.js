import Vue from 'vue'
import Router from 'vue-router'
import MarcProjects from '@/components/MarcProjects'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'MarcProjects',
      component: MarcProjects
    }
  ]
})
