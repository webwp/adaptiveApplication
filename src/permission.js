import router from './router'
import NProgress from 'nprogress' // 页面加载条
import 'nprogress/nprogress.css' // 加载条style
import store from './store'

console.log('store', store)

NProgress.configure({ showSprinner: false }) // NPrpgress 默认配置

router.beforeEach((to, from, next) => {
  NProgress.start() // start progress bar
  // let type = getQueryString('type')
  let view = getQueryString('view')
  if (view !== null && view !== undefined) {
    if (to.path === '/report') {
      next({ path: to.path + '/' + view, query: to.query })
    } else {
      next()
    }
  } else {
    next()
  }
})

router.afterEach(() => {
  NProgress.done() // finish progress bar
  if (store.state.app.startPage) {
    // 设置引导页！
    setTimeout(function () {
      store.dispatch('setStartPage', false)
    }, 100)
  }
})

function getQueryString (name) {
  var reg = new RegExp('(^|&)' + name + '=([^&]*)(&|$)', 'i')
  var r = window.location.search.substr(1).match(reg)
  if (r != null) return unescape(r[2])
  return null
}
export default router
