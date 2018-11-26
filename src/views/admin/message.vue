<template>
  <div class="ad-message-page">
    <el-form label-width="80px" :model="formData">
      <el-form-item label="用户名">
        <el-input v-model="formData.username" :disabled="true"></el-input>
      </el-form-item>
      <el-form-item label="邮箱">
        <el-input v-model="formData.email"></el-input>
      </el-form-item>
      <el-form-item label="GitHub">
        <el-input v-model="formData.github"></el-input>
      </el-form-item>
      <el-form-item label="QQ">
        <el-input v-model="formData.qq"></el-input>
      </el-form-item>
      <el-form-item label="微博">
        <el-input v-model="formData.weibo"></el-input>
      </el-form-item>
      <el-form-item label="知乎">
        <el-input v-model="formData.zhihu"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="updateMes">提交</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import { mapMutations, mapGetters } from 'vuex'
export default {
  data () {
    return {
      formData: {   // 个人信息
        username: 'admin',
        email: '17600112740@163.com',
        github: 'powercandy',
        qq: '871956478',
        weibo: 'sneptune',
        zhihu: 'sneptune',
        id: ''
      }
    }
  },
  computed: {
    ...mapGetters(['getUserInfo'])
  },
  mounted() {
    this.formData = this.getUserInfo
    console.log(this.formData)
  },
  methods: {
    /* 更新个人信息 */
    updateMes () {
      this.$api.updateMessage(this.formData).then(res => {
        if (!res.data.errNo) {
          this.$message({
            message: '更新个人信息成功',
            type: 'success',
            onClose: () => {
              this.$router.push('/')
            }
          })
          this.$store.commit('setUserInfo', res.data.data.userInfo)
        }
      })
    }
  }
}
</script>

<style lang="less">
.ad-message-page {
  padding: 10px;
  background-color: #fff;
  font-size: 12px;
  .el-input__inner {
    height: 32px;
  }
}
</style>
