import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Layout from '../views/Layout/Layout.vue'

Vue.use(VueRouter)

const routes = [{
    path: '',
    component: Layout,
    children: [{
        path: '/',
        name: 'Home',
        component: Home,
        meta: {
          title: '首页',
        }
      },
      {
        path: '/my',
        name: 'My',
        component: () => import('../views/My/My.vue'),
        meta: {
          title: '我的'
        }
      },
      {
        path: '/classification',
        name: 'Classification',
        component: () => import('../views/Classification/Classification.vue'),
        meta: {
          title: '分类'
        }
      },
      {
        path: '/shoppingcart',
        name: 'ShoppingCart',
        component: () => import('../views/shoppingCart/ShoppingCart.vue'),
        meta: {
          title: '购物车'
        }
      },

    ]
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('../views/loginRegister/Login.vue'),
    meta: {
      title: '登录/注册'
    }
  },

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})
router.beforeEach((to, from, next) => {
  document.title = to.meta.title
  next()
})
export default router