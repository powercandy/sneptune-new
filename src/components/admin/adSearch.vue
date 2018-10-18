<template>
  <el-row type="flex" justify="space-between">
    <el-col :span="18">
      <el-button type="primary" size="small" class="publish-btn btn" @click="editorContent" v-if="show">+&nbsp;{{searchLabel}}</el-button>
    </el-col>
    <el-col :span="6">
      <el-row type="flex" justify="space-around">
        <el-col :span="14">
          <el-input v-model="searchText" placeholder="关键字" class="search-input"></el-input>
        </el-col>
        <el-col :span="8">
          <el-button type="primary" size="small" class="search-btn btn" @click="searchList">查询</el-button>
        </el-col>
      </el-row>
    </el-col>
  </el-row>
</template>

<script>
export default {
  props: {
    searchLabel: {
      type: String
    },
    show: {
      type: Boolean,
      default: true
    }
  },
  data () {
    return {
      searchText: ''
    }
  },
  methods: {
    editorContent () {
      this.$emit('editorContent')
    },
    searchList () {
      this.$emit('searchList', this.searchText)
    }
  }
  
}
</script>

<style lang="less">
.search-input {
  input {
    height: 32px;
  }
}   
</style>
