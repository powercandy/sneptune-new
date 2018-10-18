<template>
  <div class="ad-content">
    <ad-search :searchLabel="searchLabel" @editorContent=editorContent @searchList="searchList"></ad-search>
    <ad-table v-if="array.length"
    :dataArray="array"
    :labelArray="tableLabel"
    @editorExist="editorExist"
    @deleteExist="deleteExist"
    @goToPage="goToPage">
    </ad-table>
  </div>
</template>

<script>
import adTable from '../../components/admin/adTable.vue'
import adSearch from '../../components/admin/adSearch.vue'
export default {
  components: {
    adTable,
    adSearch
  },
  data () {
    return {
      searchLabel:  '发布文章',
      tableLabel: [
        {
          label: '文章名称',
          prop: 'title',
          width: '250'
        },
        {
          label: '分类',
          prop: 'classify',
          width: '100'
        },
        {
          label: '发布状态',
          prop: 'status',
          width: '100'
        },
        {
          label: '阅读量',
          prop: 'view',
          width: '100'
        },
        {
          label: '发布时间',
          prop: 'create_time',
          width: '180'
        },
        {
          label: '更新时间',
          prop: 'modify_time',
          width: '180'
        },
        {
          label: '操作',
          prop: 'setting'
        }
      ],
      totalData: 38,
      array: [],
      maxPageNumber: 10,
      currentPage: 1,
      tableArray: []
    }
  },
  created() {
    this.getList()
  },
  mounted () {
    // let data = {
    //   title: 'contentList',
    //   classify: 'tech',
    //   view: '0',
    //   modify_time: '2018/9/20 下午5:59:42',
    //   setting: '11',
    //   slug: 'tech'
    // }
    // for (let i = 0; i < this.totalData; i++) {
    //   if (i > 9 && i <= 19) {
    //     let data2 = Object.assign({}, data)
    //     data2.title = data.title + '-1'
    //     this.array.push(data2)
    //   } else if (i > 19 && i <= 29) {
    //     let data3 = Object.assign({}, data)
    //     data3.title = data.title + '-2'
    //     this.array.push(data3)
    //   } else if (i > 29) {
    //     let data4 = Object.assign({}, data)
    //     data4.title = data.title + '-3'
    //     this.array.push(data4)
    //   } else {
    //     this.array.push(data)
    //   }
    // }
  },
  methods: {
    getList() {
      this.$api.getContentList().then(res => {
        // to do
        if (!res.data.errno) {
          this.array = res.data.data.contentInfo
        }
      })
    },
    cellName (e) {
      console.log(e)
    },
    editorContent () {
      this.$router.push('/content/editor/add')
    },
    // 编辑内容
    editorExist (id) {
      this.$router.push(`/content/editor/${id}`)
    },
    // 删除内容
    deleteExist(id) {
      this.$api.deleteContentData({id: id}).then(res => {
        if (!res.data.errno) {
          this.$message({
            message: '删除成功',
            type: 'success',
            onClose: () => {
              this.getList()
            }
          })
        }
      })
    },
    // 页面跳转
    goToPage(id) {
      this.$router.push(`/article/${id}`)
    },
    searchList(keys) {
      this.$api.searchContentList({keys: keys}).then(res => {
        // to do
        if (!res.data.errno) {
          this.array = res.data.data.contentInfo
          console.log(this.array)
        }
      })
    }
  }
}
</script>

<style lang="less" scoped>
.ad-content {
  background-color: #fff;
  padding: 10px;
  font-size: 12px;
}
</style>
