import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import List from './views/List.vue'
import Detail from './views/Detail.vue'
import Login from './views/Login.vue'
import Reg from './views/Reg.vue'
import UserCenter from './views/UserCenter.vue'
import Orders from './views/Orders.vue'
import ShopCart from './views/ShopCart.vue'
import {
  isLogined
} from './utils/auth'
Vue.use(Router)
const router = new Router({
  routes: [{
      path: '/',
      name: 'Home',
      component: Home
    }, {
      path: '/Home:id',
      name: 'Detail',
      component: Detail
    }, {
      path: '/list',
      name: 'List',
      component: List,
    }, {
      path: '/list/:id',
      name: 'Detail',
      component: Detail,
    }, {
      path: '/reg',
      name: 'Reg',
      component: Reg,
    }, {
      path: '/login',
      name: 'Login',
      component: Login,
    }, {
      path: '/user_center',
      name: 'UserCenter',
      component: UserCenter,
      meta: {
        needLogin: true, // 需要登录
      }
    }, {
      path: '/orders',
      name: 'Orders',
      component: Orders,
      meta: {
        needLogin: true, // 需要登录
      }
    }, {
      path: '/shop_cart',
      name: 'ShopCart',
      component: ShopCart,
      meta: {
        needLogin: true, // 需要登录
      }
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('./views/About.vue')
    }
  ]
})
// beforeEach是路由的钩子函数 在每一个路由跳转之前执行
//  to    跳转到的页面
//  from  从哪里来
//  next  下一个,继续执行
router.beforeEach(function (to, from, next) {
  // 在next方法中传递一个路由对象当做参数执行跳转
  if (to.meta.needLogin) {
    if (isLogined()) { // 判断是否已经登录
      next()
    } else {
      next({
        name: 'Login' //如果没有登录则跳转到登录页面
      });
    }
  } else {
    next();
  }
})
export default router;