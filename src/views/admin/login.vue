<template>
  <div class="page-login">
    <div class="form-ad">
      <h3 class="form-title">登陆页面</h3>
      <div class="box-input">
        <el-input v-model="username" placeholder="请输入用户名" type="text" :clearable="true"></el-input>
      </div>
      <div class="box-input">
        <el-input v-model="password" placeholder="请输入密码" type="password" :clearable="true"></el-input>
      </div>
      <div class="box-submit">
        <el-button round class="btn-login" @click="submitLogin">登陆</el-button>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
export default {
  data () {
    return {
      username: '',
      password: '',
      flag: true
    }
  },
  computed: {
    ...mapGetters(['vertifyToken'])
  },
  mounted () {
    if (!this.vertifyToken) return
    this.$router.push('/')
  },
  methods: {
    /* 提交登录信息 */
    submitLogin () {
      if (!this.flag) return false
      this.flag = false
      let obj = {
        username: this.username,
        password: this.password
      }
      this.$api.login(obj).then(res => {
        if (res.data.errno === 0) {
          this.$message({
            message: res.data.data.msg,
            type: 'success',
            onClose: () => {
              this.$router.push('/')
              this.flag = true
            }
          })
          this.$store.commit('setUserName', this.username)
          this.$store.commit('setUserInfo', res.data.data.userInfo)
        }
      }).catch(err => {
        this.flag = true
      })
    }
  }
}

</script>

<style lang="less">
.page-login {
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background-image: linear-gradient(to top, #86377b 20%, #27273c 80%);
  .form-title {
    margin: 20px 0;
  }
  .form-ad {
    box-sizing: border-box;
    width: 40%;
    height: 80%;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    padding: 20px;
    background: #fff;
  }
  .box-input {
    padding: 10px 40px;
    margin-bottom: 20px;
  } 
  .box-submit {
    padding: 0 40px;
  }
  .btn-login {
    width: 100%;
    height: 50px;
  } 
}
  
</style>
