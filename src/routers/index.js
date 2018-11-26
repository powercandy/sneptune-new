
import rComponent from './config.js'

import VueRouter from 'vue-router'

import Vue from 'vue'

Vue.use(VueRouter)

const router = new VueRouter({
  routes: [
    {
      path: '/login',
      name: 'login',
      meta: {
        title: '登录页面',
        requiresAuth: false
      },
      component: rComponent.adLogin
    },
    {
      path: '/article/:id',
      name: 'page',
      meta: {
        title: '文章页面',
        requiresAuth: false
      },
      component: rComponent.adArticle
    },
    {
      path: '/',
      name: 'Admin',
      meta: {
        title: '后台'
      },
      redirect: '/controller',
      component: rComponent.adMain,
      children: [
        {
          path: 'controller',
          name: 'controller',
          component: rComponent.adController,
          meta: {
            requiresAuth: true,
            title: '主页'
          }
        },
        {
          path: 'content/list',
          name: 'contentList',
          component: rComponent.contentList,
          meta: {
            requiresAuth: true,
            title: '内容列表'
          }
        },
        {
          path: 'content/editor/:id',
          name: 'contentEditor',
          component: rComponent.contentEditor,
          meta: {
            requiresAuth: true,
            title: '内容编辑'
          }
        },
        {
          path: 'classify/list',
          name: 'classifyList',
          component: rComponent.classifyList,
          meta: {
            requiresAuth: true,
            title: '分类列表'
          }
        },
        {
          path: 'classify/editor/:id',
          name: 'classifyEditor',
          component: rComponent.classifyEditor,
          meta: {
            requiresAuth: true,
            title: '分类编辑'
          }
        },
        {
          path: 'setting',
          name: 'setting',
          component: rComponent.adSetting,
          meta: {
            requiresAuth: true,
            title: '设置'
          }
        },
        {
          path: 'message',
          name: 'message',
          component: rComponent.adMessage,
          meta: {
            requiresAuth: true,
            title: '个人信息'
          }
        },
        {
          path: 'modifyPsd',
          name: 'modifyPsd',
          component: rComponent.adModifyPsd,
          meta: {
            requiresAuth: true,
            title: '修改密码'
          }
        }
      ]
    }
  ]
})

export default router