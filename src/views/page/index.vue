<template>
<div class="page-content">
  <!-- <div v-html="htmlContent"></div> -->
  <h1 class="title">{{title}}</h1>
  <p class="author text-right">Author：sneptune</p>
  <p class="text-right">发布时间：{{dataArray.create_time}}</p>
  <p class="text-right">修改时间：{{dataArray.modify_time}}</p>
  <mavon-editor v-model="htmlContent" fontSize="12px" defaultOpen="preview" :subfield="false" :toolbarsFlag="false"/>
</div>
</template>

<script>
export default {
  data () {
    return {
      htmlContent: '该文章正在编辑，请耐心等候作者编辑！',
      title: '',
      dataArray: ''
    }
  },
  watch: {
    title(newVal) {
     newVal && (document.title = newVal)
    }
  },
  created() {
    const id = this.$route.params.id
    this.$api.viewArticle({id: id}).then(res => {
      if (!res.data.errno) {
        this.htmlContent = res.data.data.contentInfo.content
        this.dataArray = res.data.data.contentInfo
        this.title = res.data.data.contentInfo.title
      }
    })
  }
}
</script>

<style lang="less" scoped>
.page-content {
  padding: 5% 10%;
  background: #fbfbfb;
}
.title {
  font-size: 32px;
  text-align: center;
}
.author {
  // text-align: right;
  // font-size: 16px;
  // margin: 10px 0;
}
.text-right {
  // text-align: right;
  font-size: 16px;
  margin: 10px 0;
}
</style>


