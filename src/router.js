
// 登陆页面

const adLogin = r => require.ensure([], (require) => r(require('./views/admin/login.vue')), 'adLogin')
// 页面管理

const adArticle = r => require.ensure([], (require) => r(require('./views/page/index.vue')), 'adArticle')
// 后台

const adMain = r => require.ensure([], (require) => r(require('./views/admin/main.vue')), 'adMain')

// 后台 - 首页
const adController = r => require.ensure([], (require) => r(require('./views/admin/controller.vue')), 'adController')

// 后台 - 内容管理-列表
const contentList = r => require.ensure([], (require) => r(require('./views/admin/contentList.vue')), 'contentList')

// 后台 - 内容管理-编辑
const contentEditor = r => require.ensure([], (require) => r(require('./views/admin/contentEditor.vue')), 'contentEditor')

// 后台 - 分类管理-列表
const classifyList = r => require.ensure([], (require) => r(require('./views/admin/classifyList.vue')), 'classifyList')

// 后台 - 分类管理-编辑
const classifyEditor = r => require.ensure([], (require) => r(require('./views/admin/classifyEditor.vue')), 'classifyEditor')

// 后台 - 设置管理
const adSetting = r => require.ensure([], (require) => r(require('./views/admin/setting.vue')), 'adSetting')
// 后台 - 个人资料
const adMessage = r => require.ensure([], (require) => r(require('./views/admin/message.vue')), 'adMessage')
// 后台 - 修改密码
const adModifyPsd = r => require.ensure([], (require) => r(require('./views/admin/modifyPsd.vue')), 'adModifyPsd')

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
    path: '/article/:id',
    name: 'page',
    meta: {
      title: '文章页面',
      requiresAuth: false
    },
    component: adArticle
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
