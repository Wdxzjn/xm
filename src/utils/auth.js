/**
 * 登录 把用户名存在sessionStorage中
 */
export function loginIn() {
  sessionStorage.setItem('userName', '特莱克斯')
}

/**
 * 通过存储的内容判断用户是否登录
 */
export function isLogined() {
  if (sessionStorage.getItem('userName')) {
    return true
  } else {
    return false
  }
}

/**
 * 清除本地存储
 */
export function logOut() {
  sessionStorage.removeItem('userName')
}