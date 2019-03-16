export default {
  // message 显示时间（毫秒）
  showTime: 5000,
  // 正则验证
  code: /^[0-9]{6}$/,
  email: /^[a-z0-9]+([._\\-]*[a-z0-9])*@([a-z0-9]+[-a-z0-9]*[a-z0-9]+.){1,63}[a-z0-9]+$/,
  tel: /^1[3-9][0-9]\d{8}$/,
  // 系统响应码配置
  resCode: (code) => {
    let res
    switch (code) {
      case 10000:
        res = '请求成功'
        break
      case 53001:
        res = '服务器错误'
        break
      case 53002:
        res = '错误的签名'
        break
      case 53003:
        res = '错误的时间戳'
        break
      case 53004:
        res = '错误的请求方法'
        break
      case 53005:
        res = '错误的请求参数'
        break
      case 20001:
        res = '检测报告编号无效'
        break
      case 20002:
        res = '查看类型无效'
        break
      case 20003:
        res = '校验参数无效'
        break
      default:
        res = ''
        break
    }
    return res
  },
  // 系统响应码配置
  error: (code) => {
    let res
    switch (code) {
      case 400 :
        res = '请求出错'
        break
      case 401:
        res = '登录失败'
        break
      case 403:
        res = '禁止读取访问'
        break
      case 404:
        res = '未找到资源'
        break
      case 406:
        res = '请求数据不可接受，如果问题依然存在，请与服务器的管理员联系'
        break
      case 407:
        res = '需要代理身份验证'
        break
      case 412:
        res = '前提条件失败 '
        break
      case 414:
        res = 'Request-URI 太长'
        break
      case 500:
        res = '服务器的内部错误 '
        break
      case 501:
        res = 'Web 服务器不支持实现此请求所需的功能。请检查URL 中的错误 '
        break
      case 502:
        res = '网关出错 '
        break
      case 504:
        res = '504 （网关超时）'
        break
      default:
        res = ''
        break
    }
    return res
  }
}