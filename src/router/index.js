import Vue from 'vue'
import Router from 'vue-router'
import MESProjects from '@/components/MESProjects'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'MESProjects',
      component: MESProjects
    }
  ]
})
