<template>
  <div v-html="htmlContent">

  </div>
</template>

<script>
export default {
  data () {
    return {
      htmlContent: '该文章正在编辑，请耐心等候作者编辑！'
    }
  },
  created() {
    const id = this.$route.params.id
    this.$api.viewArticle({id: id}).then(res => {
      if (!res.data.errno) {
        this.htmlContent = res.data.data.contentInfo.content
      }
    })
  },
  mounted() {

  }
}
</script>

