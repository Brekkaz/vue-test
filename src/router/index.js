import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/login',
      name: 'Login',
      component: () => import('../components/login/Login')
    },
    {
      path: '/',
      name: 'Main',
      beforeEnter: (to, from, next) => {
        let auth = false
        if (!auth) {
          next('Login') 
        }
        next(auth)
      },
      component: () => import('../components/main/Main'),
      children: [
        {
          path: 'profile',
          name: 'Profile',
          component: () => import('../components/main/profile/Profile')
        },
        {
          path: 'about',
          name: 'About',
          component: () => import('../components/main/about/About')
        }
      ]
    },
    {
      path: '/404',
      name: '404',
      component: { template: '<div>Surprise</div>' }
    },
    {
      path: '*',
      redirect: '/404'
    }
  ],
  mode: 'history'
})
