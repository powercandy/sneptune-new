<template>
  <el-container class="admin-main">
    <el-aside :width="asideWidth">
      <div class="aside-header">
        aside-header
      </div>
      <ul>
        <li v-for="(item, index) in asideList" :key="index" @click="selectContent(item.path, item.prop)" :class="[item.prop === selectTag ? 'select-tag' : '']">
          <i :class="['el-icon', item.icon]"></i>
          <span v-show="hideFlag">{{item.name}}</span>
        </li>
      </ul>
    </el-aside>
    <el-container>
      <el-header>
        <el-row type="flex" class="row-bg" justify="space-around">
          <el-col>
            <i class="el-icon-menu spread-btn" @click="hideAside"></i>
          </el-col>
          <el-col class="el-col-right">
            <el-dropdown trigger="click" @command="handleCommand">
              <span class="el-dropdown-link">
                {{account}}
                <i class="el-icon-arrow-down el-icon--right"></i>
              </span>
              <img class="avatar" src="https://secure.gravatar.com/avatar/a71767393008c230de03ae4ad6ba7840" alt="用户头像">
              <el-dropdown-menu slot="dropdown">
                <el-dropdown-item command="/message">个人资料</el-dropdown-item>
                <el-dropdown-item command="/modifyPsd">修改密码</el-dropdown-item>
                <el-dropdown-item command="/login">退出后台</el-dropdown-item>
              </el-dropdown-menu>
            </el-dropdown>
          </el-col>
        </el-row>
      </el-header>
      <el-main>
        <el-breadcrumb separator="/">
          <el-breadcrumb-item v-for="(i, k) in _breadcrumbArray" :key="k">{{i}}</el-breadcrumb-item>
        </el-breadcrumb>
        <transition name="fade">
          <router-view></router-view>
        </transition>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
import { mapGetters } from 'vuex'
import { asideList } from '../../const/data.js'
export default {
  /**
   * 【data】
   * asideList        { Array }         侧边栏数据列表
   * selectTag        { String }        选中的当前侧边栏选项
   * hideFlag         { Boolean }       是否隐藏侧边栏选项名字，默认值为true（不隐藏）
   * account          { String }        登录的用户名
   * breadcrumbArray  { Object }        路由对应的组件名
   */
  data () {
    return {
      asideList: asideList,
      selectTag: '0',
      hideFlag: true,
      asideWidth: '12.5%',
      account: 'admin',
      breadcrumbArray: {
        controller: '控制台',
        content: '文章',
        page: '页面',
        comment: '评论',
        classify: '分类',
        tag: '标签',
        setting: '设置',
        list: '列表',
        editor: '编辑'
      }
    }
  },
  /**
   * 【computed】
   * _breadcrumbArray { Array }   根据路由显示主视图区的面包屑导航名
   * getUserName      { String }  store中获取登录用户名
   */
  computed: {
    _breadcrumbArray () {
      let array = []
      let breads = this.$route.path.split('/')
      breads.forEach((val, index, arr) => {
        if (this.breadcrumbArray[val]) {
          array.push(this.breadcrumbArray[val])
        }
      })
      return array
    },
    ...mapGetters(['getUserName'])
  },
  mounted () {
    this.selectTag = this.$route.path.split('/')[1]
    this.account = this.getUserName
  },
  methods: {
    selectContent (path, prop) {
      this.$router.push(path)
      this.selectTag = prop
    },
    hideAside () {
      this.hideFlag = !this.hideFlag
      this.hideFlag
        ? this.asideWidth = '12.5%'
        : this.asideWidth = '5%'
    },
    // 退出登录
    handleCommand (command) {
      if (command == '/login') {
        localStorage.removeItem('user_name')
      }
      this.$router.push(command)
    }
  }
}
</script>

<style lang="less" scoped>
.admin-main {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
}

.el-header {
  background: #B3C0D1;
  color: #333;
  text-align: left;
  line-height: 60px;
  .spread-btn {
    cursor: pointer;
    font-size: 24px;
    &:hover {
      color: #2d8cf0;
    }
  }
  .el-dropdown-link {
    cursor: pointer;
    &:hover {
      color: #2d8cf0;
    } 
  }
}

.el-col-right {
  text-align: right;
}

.avatar {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  vertical-align: middle;
  margin-left: 10px;
}

.el-aside {
  background: #464c5b;
  color: rgba(255,255,255,.7);
  height: 100%;
  cursor: pointer;
  .aside-header {
    height: 60px;
    background-color: #5b6270;
    line-height: 60px;
    text-align: center;
  }
  li {
    padding: 24px;
    font-size: 14px;
    text-align: left;
    &:hover {
      color: #fff;
    }
  }
  .select-tag {
    background: #363e4f;
    color: #2d8cf0;
    border-right: 2px solid #2d8cf0;
    &:hover {
      color: #2d8cf0;
    }
  }
}
  
.el-icon {
  margin-right: 6px;
}

.el-main {
  background-color: #E9EEF3;
  .el-breadcrumb {
    padding-bottom: 20px;
  }
}

</style>
