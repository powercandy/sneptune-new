<template>
  <div class="ad-controller">
    <div class="content">
      <h2>欢迎<span>{{account}}</span>来到首页</h2>
      <br>
      <p>您上次登录的时间是：<span>{{last_login_time}}</span></p>
      <br>
      <p>您总共编辑了{{articleCount}}篇文章，其中已发布{{articlePublishCount}}篇，草稿{{articleDraftCount}}篇。</p>
      <br>
      <p>您编辑的文章其中最受欢迎的十篇如下：</p>
      <br>
      <ul>
        <li v-for="(item, index) in articleHotArray" :key="index" class="flex-box">
          <span>{{index + 1}}、{{item.title | addSymbol}}</span>
          <span>{{item.view}}</span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  data () {
    return {
      account: 'admin',         // 用户名
      last_login_time: '',      // 上次登录时间
      articleHotArray: [],      // 热门文章
      articleCount: '',         // 编辑文章数量
      articlePublishCount: '',  //发布文章数量
      articleDraftCount: ''     // 草稿数量
    }
  },
  computed: {
    ...mapGetters(['getUserName', 'getUserInfo'])
  },
  created() {
    this.account = this.getUserName || 'custom'
    this.last_login_time = this.getUserInfo.last_login_time || '无'
  },
  mounted () {
    this.getContentList()
  },
  methods: {
    /* 获取文章数据 */
    getContentList() {
      this.$api.getContentList().then(res => {
          let data = res.data.data.contentInfo
          this.articleHotArray = this.subData(data)
      })
    },
    /* 过滤出阅读量前十 */
    subData(data) {
      let array = []
      let count = data.length
      data = data.filter(v => {
        if (v.status == '1') {
          return v
        }
      })
      this.articleCount = count
      this.articlePublishCount = data.length
      this.articleDraftCount = count - data.length
      data.sort((a, b) => {return b.view - a.view})
      data.forEach((v, index) => {
        if (index < 10) {
          array.push(v)
        }
      })
      return array
    }
  },
  filters: {
    /* 给文章加上书名号 */
    addSymbol(title) {
      return '《' + title + '》'
    }
  }
}
</script>

<style lang="less" scoped>
.ad-controller {
  background-color: #fff;
  padding: 10px;
  font-size: 12px;
  .content {
    padding: 20px;
  }
  .flex-box {
    width: 300px;
    display: flex;
    justify-content: space-between;
    margin-bottom: 5px;
  }
}

</style>
