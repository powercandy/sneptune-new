<template>
  <div class="ad-comment">
    <ad-search :searchLabel="searchLabel" @editorContent=editorContent :show="false"></ad-search>
    <ad-table v-if="array.length"
    :dataArray="array"
    :labelArray="tableLabel"
    @editorExist="editorExist">
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
      searchLabel: '发布文章',
      tableLabel: [
        {
          label: '文章名称',
          prop: 'title',
          width: '150'
        },
        {
          label: '作者',
          prop: 'author',
          width: '100'
        },
        {
          label: 'IP',
          prop: 'ip',
          width: '100'
        },
        {
          label: '邮箱',
          prop: 'email',
          width: '200'
        },
        {
          label: '评论',
          prop: 'text',
          width: '150'
        },
        {
          label: '显示',
          prop: 'view',
          width: '50'
        },
        {
          label: '时间',
          prop: 'create_time',
          width: '100'
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
  mounted () {
    let data = {
      title: 'commentList',
      author: 'sneptune',
      ip: '10.133.37.104',
      email: '17600112740@163.com',
      text: 'good',
      view: '1',
      create_time: '2018/9/20 下午5:59:42',
      setting: '11',
      slug: 'sneptune'
    }
    for (let i = 0; i < this.totalData; i++) {
      if (i > 9 && i <= 19) {
        let data2 = Object.assign({}, data)
        data2.title = data.title + '-1'
        this.array.push(data2)
      } else if (i > 19 && i <= 29) {
        let data3 = Object.assign({}, data)
        data3.title = data.title + '-2'
        this.array.push(data3)
      } else if (i > 29) {
        let data4 = Object.assign({}, data)
        data4.title = data.title + '-3'
        this.array.push(data4)
      } else {
        this.array.push(data)
      }
    }
  },
  methods: {
    cellName (e) {
      console.log(e)
    },
    // 新增内容
    editorContent () {
      this.$router.push('/comment/editor')
    },
    // 编辑内容
    editorExist (slug) {
      this.$router.push(`/comment/editor?slug=${slug}`)
    }
  }
}
</script>

<style lang="less" scoped>
.ad-comment {
  background-color: #fff;
  padding: 10px;
  font-size: 12px;
}

</style>
