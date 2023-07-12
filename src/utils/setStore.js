/*
 ** 原生获取url参数
 ** variable = 参数Key值
 ** 返回值为value
 */
function getQueryVariable(variable) {
  var query = window.location.search.substring(1)
  var vars = query.split('&')
  for (var i = 0; i < vars.length; i++) {
    var pair = vars[i].split('=')
    if (pair[0] == variable) {
      return pair[1]
    }
  }
  return false
}
/*
 ** key = 想要获取的数据的key值
 ** JSON 字符串会转换成对象返回
 */
function getStorage(key) {
  let shopSn = `sp${getQueryVariable('shop_sn')}`
  if (key === 'token') {
    const shopId = JSON.parse(localStorage.getItem(`${shopSn}:shopConfig`))
    if (shopId) {
      const accountId = JSON.parse(process.env['VUE_APP_SHOP_TYPE_ZJG'])
      if (accountId.includes(shopId.id)) {
        return sessionStorage.getItem(`${shopSn}${':' + key}`)
      }
    }
  }
  return (function isJsonString() {
    try {
      if (typeof JSON.parse(localStorage.getItem(`${shopSn}${':' + key}`)) === 'object') {
        return JSON.parse(localStorage.getItem(`${shopSn}${':' + key}`))
      }
    } catch (e) {}
    return localStorage.getItem(`${shopSn}${':' + key}`)
  })()
}

/*
 ** key = 存储目标的属性名（key）
 ** value = 存储目标的值
 */
function setStorage(key, value) {
  if (key === 'token') {
    value = 'Bearer ' + value
  }
  let shopSn = `sp${getQueryVariable('shop_sn')}`
  if (key === 'token') {
    const shopId = JSON.parse(localStorage.getItem(`${shopSn}:shopConfig`)).id
    const accountId = JSON.parse(process.env['VUE_APP_SHOP_TYPE_ZJG'])
    if (accountId.includes(shopId)) {
      sessionStorage.setItem(`${shopSn}${':' + key}`, value)
      return
    }
  }
  localStorage.setItem(`${shopSn}${':' + key}`, value)
}
/*
 ** key = 存储目标的属性名（key）
 ** value = 存储目标的值
 */
function setSession(key, value) {
  if (key === 'token') {
    value = 'Bearer ' + value
  }
  let shopSn = `sp${getQueryVariable('shop_sn')}`
  sessionStorage.setItem(`${shopSn}${':' + key}`, value)
}
/*
 ** key = 存储目标的属性名（key）
 ** value = 存储目标的值
 */
function getSession(key) {
  let shopSn = `sp${getQueryVariable('shop_sn')}`
  return sessionStorage.getItem(`${shopSn}:${key}`)
}

/*
 ** 根据当前url上的shop_sn
 ** 清除当前商城(shop_sn)的所有缓存
 */
function clearStorage() {
  let shopSn = `sp${getQueryVariable('shop_sn')}`
  for (let item in localStorage) {
    if (item.indexOf(shopSn) !== -1) {
      localStorage.removeItem(item)
    }
  }
}

/*
 ** key = 想要删除的数据的key值
 */
function removeStorage(key) {
  let shopSn = `sp${getQueryVariable('shop_sn')}`
  localStorage.removeItem(`${shopSn}${':' + key}`)
}

export {
  getStorage,
  setStorage,
  removeStorage,
  clearStorage,
  getQueryVariable,
  setSession,
  getSession
}
