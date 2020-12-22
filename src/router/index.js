import Vue from 'vue'
import VueRouter from 'vue-router'
// 引入前端切换路由动画
import Nprogress from 'nprogress'
import 'nprogress/nprogress.css'
import NotFound from '../views/404'

Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/user',
      component: () => import(/* webpackChunkName: "layout" */ '../layouts/UserLayout'),
      children: [
        {
          path: '/user',
          redirect: '/user/login',
        },
        {
          path: '/user/login',
          name: 'login',
          component: () => import(/* webpackChunkName: "user" */ '../views/User/Login.vue'),
        },
        {
          path: '/user/register',
          name: 'register',
          component: () => import(/* webpackChunkName: "user" */ '../views/User/Register.vue'),
        },
      ],
    },
    // basiclayout
    {
      path: '/',
      component: () => import(/* webpackChunkName: "BasicLayout" */ '../layouts/BasicLayout'),
      children: [
        {
          path: '/',
          redirect: '/dashboard/analysis',
        },
        {
          path: '/dashboard',
          name: 'dashboard',
          component: { render: h => h('router-view') },
          children: [
            {
              path: '/dashboard/analysis',
              name: 'analysis',
              component: () => import(/* webpackChunkName: "dashboard" */ '../views/Dashboard/Analysis'),
            },
          ],
        },
        // form
        {
          path: '/form',
          name: 'form',
          component: { render: h => h['router-view'] },
          children: [
            {
              path: '/form/basis-form',
              name: 'basisform',
              component: () => import(/* webpackChunkName: "form" */ '../views/Forms/BasicForm'),
            },
            {
              path: '/form/step-form',
              name: 'stepform',
              component: () => import(/* webpackChunkName: "form" */ '../views/Forms/StepForm'),
              children: [
                {
                  path: '/form/step-form',
                  redirect: 'form/step-form/info',
                },
                {
                  path: '/form/step-form/info',
                  name: 'info',
                  component: () => import(/* webpackChunkName: "form" */ '../views/Forms/StepForm/Step1'),
                },
                {
                  path: '/form/step-form/confirm',
                  name: 'confirm',
                  component: () => import(/* webpackChunkName: "form" */ '../views/Forms/StepForm/Step2'),
                },
                {
                  path: '/form/step-form/result',
                  name: 'result',
                  component: () => import(/* webpackChunkName: "form" */ '../views/Forms/StepForm/Step3'),
                },
              ],
            },
          ],
        },
      ],
    },
    {
      path: '*',
      name: '404',
      component: NotFound,
    },
  ],
})

router.beforeEach((to, from, next) => {
  Nprogress.start()
  next()
})

router.afterEach(() => {
  Nprogress.done()
})

export default router
