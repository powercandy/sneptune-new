import axios from 'axios'
// 本地环境
axios.defaults.baseURL = 'http://localhost:8090/api'

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
  /* 标签管理-获取标签列表 */
  getMetaList() {
    return axios({
      method: 'get',
      url: '/meta/list'
    })
  },
  /* 标签管理-获取标签内容 */
  getMetaContent(data) {
    return axios({
      method: 'post',
      url: 'meta/content',
      data: data
    })
  },
  /* 标签管理-新增标签 */
  metaAddData(data) {
    return axios({
      method: 'post',
      url: 'meta/add',
      data: data
    })
  },
  /* 标签管理-更新标签 */
  metaUpdateData(data) {
    return axios({
      method: 'post',
      url: 'meta/update',
      data: data
    })
  },
  /* 标签管理-删除标签 */
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
  updateContent(data) {
    return axios({
      method: 'post',
      url: 'content/update',
      data: data
    })
  }
}
