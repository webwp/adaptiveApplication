import { Message } from 'element-ui'
import BC from '../../static/basicConfig'
// 定义message提示的初始options
const messageOption = {
  duration: BC.showTime,
  customClass: 'set-icon-size'
}
// 引入flyio
var flyRequest = require('flyio')
// 加载动画
// let loadingInstance
// let csrfToken = ''
// let flyRequest = new Fly
flyRequest.config.timeout = 5 * 1000
flyRequest.config.baseURL = ''
flyRequest.headers = { Accept: 'application/json, text/plain, */*', 'Content-Type': 'application/json;charset=UTF-8' }
// fly.method = 'GET'
// 添加网络请求拦截器
flyRequest.interceptors.request.use((request) => {
  // loadingInstance = Loading.service({ text: '数据加载中···', customClass: 'set-loading-size' })
  // console.log(`发起请求：path:${request.url}, baseURL:${request.baseURL}`)
  // console.log('发起请求参数', flyRequest)
  // console.log(request)
  // if (!csrfToken ) {
  //   console.log(`没有token,先请求token`)
  //   // 锁定当前实例
  //   fly.lock()
  //   // 先去请求token 或者跳转到其他页面（登录）
  //   return newFly.get('token').then((res) => {
  //     request.headers['csrfToken'] = csrfToken = res.data.data.token
  //     log(`token请求成功，值为: ` + res.data.data.token)
  //     log(`继续完成请求：path:${request.url}，baseURL:${request.baseURL}`)
  //     // 只有最终返回request对象时，原来的请求才会继续
  //     return request
  //   }).finally(() => {
  //     fly.unlock() // 解锁后，会继续发起请求队列中的任务
  //   })
  // } else {
  //   request.headers['csrfToken']
  // }
  return request
})

// 请求响应拦截器
flyRequest.interceptors.response.use(
  (response) => {
    // loadingInstance.close()
    // 验证token 是否失效
    // if (response.data.data.tokenExpired){
    //   // token 失效
    //   // 锁定响应拦截器
    //   this.lock()
    //   // 重新请求 token
    //   return newFly.get('/token').then((res) => {
    //     csrfToken = res.data.data.token
    //     console.log(`token已更新，值为: `, csrfToken)
    //   }).finally(() => {
    //     this.unlock()
    //   }).then(() => {
    //     log(`重新请求：path:${response.request.url}，baseURL:${response.request.baseURL}`)
    //     return fly.request(response.request);
    //   })
    // } else {
    //   return response.data.data
    // }
    console.log('response:')
    let resCode = BC.resCode(response.data.result)
    if (resCode !== '') {
      Message({
        ...messageOption,
        message: resCode,
        type: response.data.result !== 10000 ? 'warning' : 'success',
        duration: BC.showTime,
        customClass: 'set-icon-size'
      })
    }
    return response.data
  },
  (error) => {
    // loadingInstance.close()
    // 请求错误处理
    console.log(error)
    Message({
      ...messageOption,
      type: 'error',
      message: BC.error(error.status),
      duration: BC.showTime
    })
  }
)

export default flyRequest
