import Vue from 'vue'
import Router from 'vue-router'
import auth from '@/services/auth'

import HelloWorld from '@/components/HelloWorld'
import Login from '@/views/Login'
import Register from '@/views/Register'
import Panel from '@/views/Panel'
import PanelProfile from '@/views/Profile'
import PanelBook from '@/views/Book'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: HelloWorld
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/register',
      name: 'Register',
      component: Register
    },
    {
      path: '/panel',
      name: 'Panel',
      component: Panel,
      meta: { requiresAuth: true },
      children: [
        { path: 'profile', name: 'PanelProfile', component: PanelProfile, meta: { requiresAuth: true } },
        { path: 'book', name: 'PanelBook', component: PanelBook, meta: { requiresAuth: true } }
      ]
    }
  ]
})

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    return auth.loggedIn().then(() => {
      next()
    }).catch(() => {
      next({
        path: '/login',
        query: { redirect: to.fullPath }
      })
    })
  } else {
    next()
  }
})

export default router
