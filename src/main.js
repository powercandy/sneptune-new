import Vue from 'vue'
import Vuex from 'vuex'
// import Router from 'vue-router'
import axios from 'axios'
// import { sync } from 'vuex-router-sync'

import App from './App.vue'
// import routes from './router'
import router from './routers/index.js'
import store from './store/index'
import api from '@/assets/js/api'

// 引入element-ui组件库
import { 
  Button,
  Input,
  Form,
  FormItem,
  Radio,
  RadioGroup,
  Aside,
  Col,
  Row,
  Table,
  TableColumn,
  Pagination,
  Container,
  Header,
  Dropdown,
  DropdownMenu,
  DropdownItem,
  Breadcrumb,
  BreadcrumbItem,
  Message,
  MessageBox,
  Main,
  Select,
  Option
} from 'element-ui'
// import 'element-ui/lib/theme-chalk/index.css'

Vue.use(Button)
Vue.use(Input)
Vue.use(Form)
Vue.use(FormItem)
Vue.use(Radio)
Vue.use(RadioGroup)
Vue.use(Aside)
Vue.use(Col)
Vue.use(Row)
Vue.use(Table)
Vue.use(TableColumn)
Vue.use(Pagination)
Vue.use(Container)
Vue.use(Header)
Vue.use(Dropdown)
Vue.use(DropdownMenu)
Vue.use(DropdownItem)
Vue.use(Breadcrumb)
Vue.use(BreadcrumbItem)
Vue.use(Main)
Vue.use(Select)
Vue.use(Option)

// 引入markdown编辑
import mavonEditor from 'mavon-editor'
import 'mavon-editor/dist/css/index.css'

// 全局使用
Vue.use(mavonEditor)
// Vue.use(Element)

// 挂载全局请求方法
Vue.prototype.$api = api
Vue.prototype.$message = Message;
Vue.prototype.$confirm = MessageBox.confirm;

// 样式重置
require('./assets/css/reset.css')
require('./assets/css/common.css')

/* If open productionTip */
Vue.config.productionTip = false

// Vue.use(Router)
Vue.use(Vuex)

// const router = new Router({
//   mode: 'hash',
//   base: __dirname,
//   routes
// })
// sync(store, router)

/* 路由进入前 */
router.beforeEach((to, from , next) => {
  // 设置title
  if (to.meta.title) {
    document.title = to.meta.title
  }
  // ！未完成任务，页面进入身份认证
  let name = localStorage.getItem('user_name')
  let requiresAuth = to.meta.requiresAuth
  // 需要认证登录信息
  if (requiresAuth) {
    // 无登录信息返回登录页面
    if (!name) {
      next('/login')
      return false
    }
  }
  // 进入登录页面有登录信息时，返回主页
  if (name && to.name == 'login') {
    next('/')
  }
  next()
})

/* 路由进入后 */
router.afterEach((to) => {
  window.scrollTo(0, 0)
})

/* 实例化Vue */
const vm = new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

/* 拦截请求前 */
axios.interceptors.request.use((config) => {
  return config
}, (error) => {
  Promise.reject(error)
})
/* 拦截请求后 */
axios.interceptors.response.use((response) => {
  // console.log(response)
  if (response.data.errno === 1000) {
    vm.$message.error(response.data.errmsg)
  }
  return response
}, (error) => {
  vm.$message.error('网络错误')
  Promise.reject(error)
})
export default vm
