/* 页面组件引入 */

// 登陆页面
const adLogin = r => require.ensure([], (require) => r(require('../views/admin/login.vue')), 'adLogin')
// 页面管理
const adArticle = r => require.ensure([], (require) => r(require('../views/page/index.vue')), 'adArticle')
// 后台
const adMain = r => require.ensure([], (require) => r(require('../views/admin/main.vue')), 'adMain')
// 后台 - 首页
const adController = r => require.ensure([], (require) => r(require('../views/admin/controller.vue')), 'adController')
// 后台 - 内容管理-列表
const contentList = r => require.ensure([], (require) => r(require('../views/admin/contentList.vue')), 'contentList')
// 后台 - 内容管理-编辑
const contentEditor = r => require.ensure([], (require) => r(require('../views/admin/contentEditor.vue')), 'contentEditor')
// 后台 - 分类管理-列表
const classifyList = r => require.ensure([], (require) => r(require('../views/admin/classifyList.vue')), 'classifyList')
// 后台 - 分类管理-编辑
const classifyEditor = r => require.ensure([], (require) => r(require('../views/admin/classifyEditor.vue')), 'classifyEditor')
// 后台 - 设置管理
const adSetting = r => require.ensure([], (require) => r(require('../views/admin/setting.vue')), 'adSetting')
// 后台 - 个人资料
const adMessage = r => require.ensure([], (require) => r(require('../views/admin/message.vue')), 'adMessage')
// 后台 - 修改密码
const adModifyPsd = r => require.ensure([], (require) => r(require('../views/admin/modifyPsd.vue')), 'adModifyPsd')

export default {
  adLogin,
  adArticle,
  adMain,
  adController,
  contentList,
  contentEditor,
  classifyList,
  classifyEditor,
  adSetting,
  adMessage,
  adModifyPsd
}