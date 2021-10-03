import Vue from 'vue'
import VueRouter from 'vue-router'

// 路由 懒加载
const Home = () => import('../views/home/Home')
const Category = () => import('../views/category/Category')
const Cart = () => import('../views/cart/Cart')
const Profile = () => import('../views/profile/Profile')

// 1.安装插件
Vue.use(VueRouter)

const routes = [
  // 配置对应的映射关系

  // 重定向
  {
    path: '',
    redirect: '/home'
  },
  {
    path: '/home',
    component: Home
  },
  {
    path: '/category',
    component: Category
  },
  {
    path: '/cart',
    component: Cart
  },
  {
    path: '/profile',
    component: Profile
  }
]

// 2.创建router
const router = new VueRouter({
  routes,
  mode: 'history'
})


// 3.导出路由
export default router
