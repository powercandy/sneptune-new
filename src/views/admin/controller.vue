<template>
  <div class="ad-controller">
    <div class="content">
      <el-row type="flex" class="content-top" justify="space-between">
        <el-col :span="8" class="account-info-box block-box">
          <el-row class="account-info" type="flex">
            <el-col :span="8" class="avatar-box">
              <img :src="avatar" alt="用户头像">
            </el-col>
            <el-col class="account-name">
              <span>{{account}}</span>
            </el-col>
          </el-row>
          <p class="login-time">
            上次登录时间:<span>{{last_login_time}}</span>
          </p>
        </el-col>
        <el-col :span="16" class="archive-box  block-box">
          <div class="archive-charts" id="archive">
          </div>
        </el-col>
      </el-row>
      <div class="block-box hot-article" id="hot">
      </div>
    </div>
  </div>
</template>

<script>
import echarts from 'echarts'
import { mapGetters } from 'vuex'
export default {
  data () {
    return {
      account: 'admin',
      last_login_time: '',
      avatar: 'https://secure.gravatar.com/avatar/a71767393008c230de03ae4ad6ba7840'
    }
  },
  computed: {
    ...mapGetters(['getUserName', 'getUserInfo'])
  },
  created() {
    this.account = this.getUserName || 'custom'
    this.last_login_time = this.getUserInfo.last_login_time || '无'
  },
  mounted () {
    this.setArchiveMap()
    this.setHotMap()
  },
  methods: {
    setArchiveMap () {
      let myChart = echarts.init(document.getElementById('archive'))
      let xAxisData = ['2017-10', '2017-11', '2017-12', '2018-01', '2018-02', '2018-03']
      let seriesData = ['10', '20', '40', '10', '5', '80']
      myChart.setOption({
        title: { text: '发布频率' },
        tooltip: {},
        xAxis: { data: xAxisData, axisLine: { lineStyle: { color: '#495060' } } },
        yAxis: { axisLine: { lineStyle: { color: '#495060' } } },
        series: [{ name: '点击次数', type: 'line', barWidth: 10, data: seriesData }]
      })
    },
    setHotMap () {
      let myChart = echarts.init(document.getElementById('hot'))
      let xAxisData = ['css', 'javascript', 'typescript', 'css', 'javascript', 'typescript']
      let seriesData = ['10', '20', '40', '10', '20', '40']
      myChart.setOption({
        title: { text: '热门文章' },
        tooltip: {},
        xAxis: { data: xAxisData, axisLine: { lineStyle: { color: '#495060' } } },
        yAxis: { axisLine: { lineStyle: { color: '#495060' } } },
        series: [{ name: '文章数量', type: 'bar', barWidth: 10, data: seriesData }]
      })
    }
  }
}
</script>

<style lang="less" scoped>
.title {
  margin-bottom: 20px;
}
.account-info-box {
  height: 300px;
}
.block-box {
  padding: 20px;
  border: 1px solid #e9eaec;
  border-radius: 4px;
  background-color: #fff;
  transition: all .2s ease-in-out;
  &:hover {
    box-shadow: 0 1px 6px rgba(0,0,0,.2);
    border-color: #eee;
  }
}   
.account-info {
  height: 80px;
  .el-col {
    height: 100%;
  }
  .account-name {
    font-size: 32px;
    color: #2d8cf0;
    line-height: 80px;
    padding-left: 20px;
  } 
} 
.login-time {
  padding: 30px 0;
  font-size: 14px;
}
.archive-box {
  height: 300px;
  margin-left: 10px;
}
.hot-article {
  height: 332px;
  margin-top: 10px;
}
#archive {
  height: 300px;
}
</style>
