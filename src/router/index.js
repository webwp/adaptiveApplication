import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/wx',
      name: 'WxIndex',
      component: () => import('@/views/wx/index')
    },
    {
      path: '/pc',
      name: 'PcIndex',
      component: () => import('@/views/pc/index')
    },
    {
      path: '/report',
      name: 'TabletIndex',
      component: () => import('@/views/tablet/index')
    },
    {
      path: '/report/ds',
      name: 'TabletIndex',
      component: () => import('@/views/tablet/index')
    }
  ]
})
