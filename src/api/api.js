import fly from '@/utils/flyService'
import config from '@/config/index'
import uriConfig from './uri'
import md5 from 'js-md5'

// 通过get方式请求数据
// export const get = (url, params) => {
//  params = { ...params, key: congif.key }
//   return fly.get(uri[url], params)
// }
// 通过post 方式请求数据
// export const post = (url, params) => {
//  params = { ...params, key: congif.key }
//   return fly.post(uri[url], params)
// }
// 封装登录请求
// export const login = (params) => {
//   console.log('请求login:', params)
//   const bodys = { appid: config.appId, secret: config.appSecret, js_code: params.code, grant_type: 'authorization_code' }
//   // return fly.post('https://api.weixin.qq.com/sns/jscode2session', bodys)
// }
const net = {
  Request: (uri, method, params) => {
    // fly.request("/test",{hh:5},{
    //     method:"post",
    //     timeout:5000 //超时设置为5s
    // })
    let newParams = setParame(params)
    console.log('newParams', newParams)
    console.log('uri:', uri)
    const newOptions = {
      ...params,
      ...newParams,
      // 请求接口名
      method: uriConfig[uri]
      // 随机六位字符串，0-9、a-z、A-Z
      // ranstr: net.randomWord(false, 6, 6),
      // 请求毫秒时间戳
      // timestamp: new Date().getTime(),
      // 将所有请求API参数（公共参数）
      // sign: md5('newOptions.timestamp' + 'newOptions.ranstr')
    }
    if (method === 'POST') fly.config.params = { ...newOptions }
    console.log('newOptions', newOptions)
    // console.log('x', newOptions, { method: method, timeout: config.timeout })
    return fly.request('/api', newOptions, { method: method, timeout: config.timeout })
  },
  randomWord: (randomFlag, min, max) => {
    let str = ''
    let range = min
    const arr = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']
    // 随机产生
    if (randomFlag) {
      range = Math.round(Math.random() * (max - min)) + min
    }
    for (let i = 0; i < range; i++) {
      let pos = Math.round(Math.random() * (arr.length - 1))
      str += arr[pos]
    }
    return str
  }
}
const setParame = (params) => {
  const timestamp = new Date().getTime()
  const ranstr = net.randomWord(false, 6, 6)
  const ordered = {}
  Object.keys(params).forEach((key) => {
    ordered[key] = params[key]
  })
  // 拼接key和value
  let str = ''
  Object.keys(ordered).forEach((key) => {
    str += key + ordered[key]
  })
  console.log(str)
  const unsign = md5(timestamp + str + ranstr)
  // fly.method = 'GET'
  return { timestamp, ranstr, sign: unsign }
}
const get = (uri, params) => {
  return net.Request(uri, 'GET', params)
}
const post = (uri, params) => {
  return net.Request(uri, 'POST', params)
}

export default { net, get, post }
