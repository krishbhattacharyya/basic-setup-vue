import { createRouter, createWebHistory } from 'vue-router'
import DashboardView from '../views/DashboardView.vue'
import LoginView from '../views/LoginView.vue'
import {
  authenticationService,
} from './../services/auth';
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'dashboard',
      redirect: (to) => {
        // the function receives the target route as the argument
        // a relative location doesn't start with `/`
        // or { path: 'home'}
        return 'home'
      },
      component: DashboardView,
      children:[
        {
          path: '/home',
          name: 'home',
          // route level code-splitting
          // this generates a separate chunk (Home.[hash].js) for this route
          // which is lazy-loaded when the route is visited.
          component: () => import('../views/HomeView.vue')
        },
        {
            path: '/about',
            name: 'about',
            // route level code-splitting
            // this generates a separate chunk (About.[hash].js) for this route
            // which is lazy-loaded when the route is visited.
            component: () => import('../views/AboutView.vue')
          }
      ]
    },
    {
      path: '/login',
      name: 'login',
      component: LoginView
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'NotFound',
      // route level code-splitting
      // this generates a separate chunk (NotFound.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/NotFoundView.vue')
    }
  ]
})

router.beforeEach((to, from, next) => {
  let isAuthenticated = authenticationService.isLogin();
  // Redirect to login if not authenticated
  if (to.name !== 'login' && !isAuthenticated) next({ name: 'login' })
  if (to.name === 'login' && isAuthenticated) next({ name: 'home' })
  else next()
})
export default router
