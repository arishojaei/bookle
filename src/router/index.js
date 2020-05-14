import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)
  const routes = [
  {
    path: '/',
    name: 'Home',
    meta: {
      requireAuth: true
    },
    component: () => import('../views/Home.vue')
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('../views/auth/Login.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})


router.beforeEach((to, from, next) => {
  const isAuth = window.localStorage.getItem('isAuth')
  
  if (to.matched.some(record => record.meta.requireAuth)) {
    if (isAuth) {
      next()
    } else {
      next('/login')
    }
  } else {
    next()
  }
})

export default router
