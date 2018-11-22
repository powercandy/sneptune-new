import axios from 'axios'
// 本地环境
axios.defaults.baseURL = 'http://localhost:8090/api'
// axios.defaults.baseURL = 'https://www.sneptune.cn/api'

export default {
  /* 登录接口 */
  login (data) {
    return axios({
      method: 'post',
      url: '/user/login',
      data: data
    })
  },
  /* 更新密码接口 */
  updatePsd (data) {
    return axios({
      method: 'post',
      url: '/user/update_psd',
      data: data
    })
  },
  /* 更新个人信息 */
  updateMessage (data) {
    return axios({
      method: 'post',
      url: '/user/update_mes',
      data: data
    })
  },
  /* 分类管理-获取分类列表 */
  getMetaList() {
    return axios({
      method: 'get',
      url: '/meta/list'
    })
  },
  /* 分类管理-获取分类内容 */
  getMetaContent(data) {
    return axios({
      method: 'post',
      url: 'meta/content',
      data: data
    })
  },
  /* 分类管理-新增分类 */
  metaAddData(data) {
    return axios({
      method: 'post',
      url: 'meta/add',
      data: data
    })
  },
  /* 分类管理-更新分类 */
  metaUpdateData(data) {
    return axios({
      method: 'post',
      url: 'meta/update',
      data: data
    })
  },
  /* 分类管理-删除分类 */
  deleteClassifyData(data) {
    return axios({
      method: 'post',
      url: 'meta/delete',
      data: data
    })
  },
  /* 内容管理-获取列表 */
  getContentList() {
    return axios({
      method: 'get',
      url: 'content/list'
    })
  },
  /* 内容管理-查询内容 */
  getContentData(data) {
    return axios({
      method: 'post',
      url: 'content/content',
      data: data
    })
  },
  /* 内容管理-更新内容 */
  addContent(data) {
    return axios({
      method: 'post',
      url: 'content/add',
      data: data
    })
  },
  /* 内容管理-更新内容 */
  updateContent(data) {
    return axios({
      method: 'post',
      url: 'content/update',
      data: data
    })
  },
  /* 内容管理-删除内容 */
  deleteContentData(data) {
    return axios({
      method: 'post',
      url: 'content/delete',
      data: data
    })
  },
  /* 内容搜索 */
  searchContentList(data) {
    return axios({
      method: 'post',
      url: 'content/search',
      data: data
    })
  },
  /* 查看文章 */
  viewArticle(data) {
    return axios({
      method: 'post',
      url: 'view',
      data: data
    })
  }
}
