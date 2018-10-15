<template>
  <div class="ad-tag-editor">
    <el-form label-width="80px" :rules="rules" :model="formData">
      <el-form-item label="标签名称" prop="title">
        <el-input placeholder="页面标题" v-model="formData.title"></el-input>
      </el-form-item>
      <el-form-item label="缩略名" prop="thumb">
        <el-input placeholder="缩略名" v-model="formData.thumb"></el-input>
      </el-form-item>
      <el-form-item label="排序" prop="sort">
        <el-input placeholder="排序" v-model="formData.sort" class="sort-box"></el-input>
      </el-form-item>
      <el-form-item label="标签描述" prop="text">
        <el-input type="textarea" v-model="formData.text"></el-input>
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
      formData: {
        title: '',
        thumb: '',
        sort: '',
        text: ''
      },
      rules: {
        title: [
          { required: true, message: '请输入标题', trigger: 'blur' },
          { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
        ],
        thumb: [
          { required: true, message: '请输入缩略名', trigger: 'blur' },
          { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
        ]
      }
    }
  },
  methods: {
    // 监听markdown输入
    markDownChange () {
    },
    // 提交信息
    onSubmit () {
      // console.log(this.formData)
    }
  }
}
</script>

<style lang="less">
.ad-tag-editor {
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
  .el-form-item__content {
    line-height: 32px;
  }
  .sort-box {
    width: 10%;
  }
}
</style>
