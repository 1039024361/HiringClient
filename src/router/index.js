import Vue from 'vue'
import Router from 'vue-router'
import list from '@/components/list/index.vue'
import detail from '@/components/detail/index.vue'
// import sectionCom from '@/components/detail/sectionCom.vue'
// import logInfo from '@/components/detail/logInfo.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/list',
      name: 'list',
      component: list,
      meta: {
        keepAlive: true
      }
    },
    {
      path: '/detail',
      name: 'detail',
      component: detail,
      children: [
        {
          path: 'candidate',
          name: 'candidate',
          component: () => import('@/components/detail/sectionCom.vue')
        },
        {
          path: 'log',
          name: 'log',
          component: () => import('@/components/detail/logInfo.vue')
        }
      ]
    }
  ]
})
