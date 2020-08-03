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
  {
    path: '/userinformation',
    name: 'Userinformation',
    component: () => import('../views/Userinformation/Userinformation.vue'),
    meta: {
      title: '个人资料'
    }
  },
  {
    path: '/details',
    name: 'Details',
    component: () => import('../views/Details/Details.vue'),
    meta: {
      title: '商品详情'
    }
  },
  {
    path: '/collection',
    name: 'Collection',
    component: () => import('../views/Collection/Collection.vue'),
    meta: {
      title: '我的收藏'
    }
  },
  {
    path: '/addresslist',
    name: 'Addresslist',
    component: () => import('../views/Address/Addresslist.vue'),
    meta: {
      title: '地址列表'
    }
  },
  {
    path: '/addressedit',
    name: 'Addressedit',
    component: () => import('../views/Address/Addressedit.vue'),
    meta: {
      title: '编辑地址'
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