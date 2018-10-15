
// 登陆页面
const adLogin = () => import(/* webpackChunkName: "adMain" */ './views/admin/login.vue')
// 后台
const adMain = () => import(/* webpackChunkName: "adMain" */ './views/admin/main.vue')
// 后台 - 控制台
const adController = () => import(/* webpackChunkName: "adController" */ './views/admin/controller.vue')
// 后台 - 评论管理-列表
const commentList = () => import(/* webpackChunkName: "commentList" */ './views/admin/commentList.vue')
// 后台 - 评论管理-编辑
const commentEditor = () => import(/* webpackChunkName: "commentEditor" */ './views/admin/commentEditor.vue')
// 后台 - 内容管理-列表
const contentList = () => import(/* webpackChunkName: "contentList" */ './views/admin/contentList.vue')
// 后台 - 内容管理-编辑
const contentEditor = () => import(/* webpackChunkName: "contentEditor" */ './views/admin/contentEditor.vue')
// 后台 - 页面管理-列表
const pageList = () => import(/* webpackChunkName: "pageList" */ './views/admin/pageList.vue')
// 后台 - 页面管理-编辑
const pageEditor = () => import(/* webpackChunkName: "pageEditor" */ './views/admin/pageEditor.vue')
// 后台 - 分类管理-列表
const classifyList = () => import(/* webpackChunkName: "classifyList" */ './views/admin/classifyList.vue')
// 后台 - 分类管理-编辑
const classifyEditor = () => import(/* webpackChunkName: "classifyEditor" */ './views/admin/classifyEditor.vue')
// 后台 - 标签管理-列表
const tagList = () => import(/* webpackChunkName: "tagList" */ './views/admin/tagList.vue')
// 后台 - 标签管理
const tagEditor = () => import(/* webpackChunkName: "tagEditor" */ './views/admin/tagEditor.vue')
// 后台 - 设置管理
const adSetting = () => import(/* webpackChunkName: "adSetting" */ './views/admin/setting.vue')
// 后台 - 个人资料
const adMessage = () => import(/* webpackChunkName: "adMessage" */ './views/admin/message.vue')
// 后台 - 修改密码
const adModifyPsd = () => import(/* webpackChunkName: "adModifyPsd" */ './views/admin/modifyPsd.vue')

const routes = [
  {
    path: '/login',
    name: 'login',
    meta: {
      title: '登录页面',
      requiresAuth: false
    },
    component: adLogin
  },
  {
    path: '/',
    name: 'Admin',
    meta: {
      title: '后台'
    },
    redirect: '/controller',
    component: adMain,
    children: [
      {
        path: 'controller',
        name: 'controller',
        component: adController,
        meta: {
          requiresAuth: true,
          title: '主页'
        }
      },
      {
        path: 'comment/list',
        name: 'commentList',
        component: commentList,
        meta: {
          requiresAuth: true,
          title: '评论列表'
        }
      },
      {
        path: 'comment/editor',
        name: 'commentEditor',
        component: commentEditor,
        meta: {
          requiresAuth: true,
          title: '评论编辑'
        }
      },
      {
        path: 'content/list',
        name: 'contentList',
        component: contentList,
        meta: {
          requiresAuth: true,
          title: '内容列表'
        }
      },
      {
        path: 'content/editor/:id',
        name: 'contentEditor',
        component: contentEditor,
        meta: {
          requiresAuth: true,
          title: '内容编辑'
        }
      },
      {
        path: 'page/list',
        name: 'pageList',
        component: pageList,
        meta: {
          requiresAuth: true,
          title: '页面列表'
        }
      },
      {
        path: 'page/editor',
        name: 'pageEditor',
        component: pageEditor,
        meta: {
          requiresAuth: true,
          title: '页面编辑'
        }
      },
      {
        path: 'classify/list',
        name: 'classifyList',
        component: classifyList,
        meta: {
          requiresAuth: true,
          title: '分类列表'
        }
      },
      {
        path: 'classify/editor/:id',
        name: 'classifyEditor',
        component: classifyEditor,
        meta: {
          requiresAuth: true,
          title: '分类编辑'
        }
      },
      {
        path: 'tag/list',
        name: 'tagList',
        component: tagList,
        meta: {
          requiresAuth: true,
          title: '标签列表'
        }
      },
      {
        path: 'tag/editor',
        name: 'tagEditor',
        component: tagEditor,
        meta: {
          requiresAuth: true,
          title: '标签编辑'
        }
      },
      {
        path: 'setting',
        name: 'setting',
        component: adSetting,
        meta: {
          requiresAuth: true,
          title: '设置'
        }
      },
      {
        path: 'message',
        name: 'message',
        component: adMessage,
        meta: {
          requiresAuth: true,
          title: '个人信息'
        }
      },
      {
        path: 'modifyPsd',
        name: 'modifyPsd',
        component: adModifyPsd,
        meta: {
          requiresAuth: true,
          title: '修改密码'
        }
      }
    ]
  }
]
export default routes
