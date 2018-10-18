<template>
  <div class="ad-classify-editor">
    <el-form label-width="80px" :model="formData">
      <el-form-item label="分类名称" prop="title">
        <el-input placeholder="分类名称" v-model="formData.name"></el-input>
      </el-form-item>
      <el-form-item label="缩略名" prop="thumb">
        <el-input placeholder="缩略名" v-model="formData.type"></el-input>
      </el-form-item>
      <el-form-item label="排序" prop="sort" class="sort-box">
        <el-input placeholder="排序" v-model="formData.sort"></el-input>
      </el-form-item>
      <el-form-item label="分类描述" prop="description">
        <el-input type="textarea" placeholder="分类描述" v-model="formData.description"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit">提交</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  data () {
    return {
      // formData: {
      //   name: 'classifyEditor',
      //   type: 'sneptune',
      //   sort: '1',
      //   description: 'classifyEditorclassifyEditorclassifyEditor',
      //   classify: 'sneptune'
      // },
      formData: {
        name: '',
        type: '',
        sort: '',
        description: '',
        classify: ''
      },
      type: ''
    }
  },
  created() {
    let id = this.$route.params.id
    this.type = id
    if (id == 'add') return
    let data = {
      id: this.$route.params.id || ''
    }
    this.$api.getMetaContent(data).then(res => {
      // to do
      if (!res.data.errno) {
        this.formData = res.data.data.metaInfo
      }
    })
  },
  mounted () {
  },
  methods: {
    // 提交信息
    onSubmit () {
      this.formData.classify = this.formData.name
      // 新增数据
      if (this.type == 'add') {
        this.$api.metaAddData(this.formData).then(res => {
          if (!res.data.errno) {
            this.$message({
              message: '新增成功',
              type: 'success',
              onClose: () => {
                this.$router.go(-1)
              }
            })
          }
        })
      } else {
        this.$api.metaUpdateData(this.formData).then(res => {
          if (!res.data.errno) {
            this.$message({
              message: '更新成功',
              type: 'success',
              onClose: () => {
                this.$router.go(-1)
              }
            })
          }
        })
      }
      // 更新数据
    }
  }
}
</script>

<style lang="less">
.ad-classify-editor {
  background-color: #fff;
  padding: 10px;
  font-size: 12px;
  span {
    font-weight: normal;
  }
  .el-form-item__label {
    font-size: 12px;
    line-height: 32px;
  }
  .el-input__inner {
    height: 32px;
  }
  .el-input__icon {
    line-height: 32px;
  }
  .el-form-item__classify {
    line-height: 32px;
  }
  .sort-box {
    width: 20%;
  }
}
</style>
