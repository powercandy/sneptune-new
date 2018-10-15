<template>
  <div class="ad-modify-page">
    <el-form label-width="80px" :model="formData" :rules="rules">
      <el-form-item label="账号" prop="username">
        <el-input v-model="formData.username" :disabled="true"></el-input>
      </el-form-item>
      <el-form-item label="旧密码" prop="oldPsd">
        <el-input v-model="formData.oldPsd"></el-input>
      </el-form-item>
      <el-form-item label="新密码" prop="newPsd">
        <el-input v-model="formData.newPsd"></el-input>
      </el-form-item>
      <el-form-item label="确认密码" prop="confirmPsd">
        <el-input v-model="formData.confirmPsd"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="updatePsd">提交</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  data () {
    return {
      formData: {
        username: 'admin',
        oldPsd: '',
        newPsd: '',
        confirmPsd: '',
        id: ''
      },
      rules: {
        oldPsd: { required: true, message: '请输入旧密码', trigger: 'blur' },
        newPsd: { required: true, message: '请输入新密码', trigger: 'blur' },
        confirmPsd: { required: true, message: '请再次输入新密码', trigger: 'blur' }
      }
    }
  },
  computed: {
    ...mapGetters(['getUserName'])
  },
  mounted() {
    this.formData.username = this.getUserName
  },
  methods: {
    updatePsd () {
      this.$api.updatePsd(this.formData).then(res => {
        if (!res.data.errno) {
          this.$message({
            message: '更新成功',
            type: 'success',
            onClose: () => {
              this.$router.push('/')
            }
          })
        }
      })
    }
  }
}
</script>

<style lang="less">
.ad-modify-page {
  padding: 10px;
  background-color: #fff;
  font-size: 12px;
  .el-input__inner {
    height: 32px;
    width: 40%;
  }
}
</style>
