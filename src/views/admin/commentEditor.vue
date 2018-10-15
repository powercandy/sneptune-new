<template>
  <div class="ad-comment-editor">
    <el-form label-width="80px" :model="formData">
      <el-form-item label="文章名称" prop="title">
        <el-input placeholder="文章名称" v-model="formData.title" :disabled="true"></el-input>
      </el-form-item>
      <el-form-item label="作者" prop="author">
        <el-input placeholder="作者" v-model="formData.author" :disabled="true"></el-input>
      </el-form-item>
      <el-form-item label="IP" prop="ip">
        <el-input placeholder="ip" v-model="formData.ip" :disabled="true"></el-input>
      </el-form-item>
      <el-form-item label="邮箱" prop="email">
        <el-input placeholder="ip" v-model="formData.email" :disabled="true"></el-input>
      </el-form-item>
      <el-form-item label="评论" prop="text">
        <el-input type="textarea" placeholder="ip" v-model="formData.text" :disabled="true"></el-input>
      </el-form-item>
      <el-form-item label="显示" prop="view">
        <el-input placeholder="ip" v-model="formData.view"></el-input>
      </el-form-item>
      <el-form-item label="时间" prop="time">
        <el-input placeholder="ip" v-model="formData.create_time" :disabled="true"></el-input>
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
    }
  },
  methods: {
    // 提交信息
    onSubmit () {
      // console.log(this.formData)
    }
  }  
}
</script>

<style lang="less">
.ad-comment-editor {
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
  .el-form-item__comment {
    line-height: 32px;
  }
  .el-date-editor {
    margin-right: 10px;
  }
  .el-radio__inner {
    height: 12px;
  }
  .el-radio__label {
    height: 12px;
    font-size: 12px;
  }
}
  
  
</style>
