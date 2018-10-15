<template>
  <div class="ad-classify">
    <ad-search :searchLabel="searchLabel" @editorContent=editorContent></ad-search>
    <ad-table v-if="array.length"
    :dataArray="array"
    :labelArray="labelArray"
    @editorExist="editorExist"
    @deleteExist=deleteExist>
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
      searchLabel: '添加分类',
      array: [],
      labelArray: [],
      totalData: 38
    }
  },
  created() {
    this.getList()
  },
  mounted () {
    this.labelArray = [
      {
        label: '分类名称',
        prop: 'name',
        width: '200'
      },
      {
        label: '缩略名',
        prop: 'type',
        width: '200'
      },
      {
        label: '分类描述',
        prop: 'description',
        width: '200'
      },
      {
        label: '排序',
        prop: 'sort',
        width: '100'
      },
      {
        label: '文章数量',
        prop: 'count',
        width: '100'
      },
      {
        label: '操作',
        prop: 'setting',
        width: ''
      }
    ]
    /* 假数据 */
    // let data = {
    //   name: 'classifyList',
    //   type: 'img',
    //   description: 'sm',
    //   sort: '1',
    //   count: '1',
    //   setting: '11',
    //   classify: 'classifyList'
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
      this.$api.getMetaList().then(res => {
        // to do
        if (!res.data.errno) {
          this.array = res.data.data.metaInfo
          // console.log(this.array)
        }
      })
    },
    // 新增内容
    editorContent () {
      this.$router.push('/classify/editor/add')
    },
    // 编辑内容
    editorExist (id) {
      this.$router.push(`/classify/editor/${id}`)
    },
    // 删除对应数据
    deleteExist (id) {
      this.$api.deleteClassifyData({id: id}).then(res => {
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
    }
  }
}
</script>

<style lang="less" scoped>
.ad-classify {
  background-color: #fff;
  padding: 10px;
}
</style>
