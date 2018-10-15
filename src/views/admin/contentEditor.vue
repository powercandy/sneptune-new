<template>
  <div class="ad-content-editor">
    <el-form label-width="80px" :rules="rules" :model="formData">
      <el-form-item label="文章标题" prop="title">
        <el-input placeholder="文章标题" v-model="formData.title"></el-input>
      </el-form-item>
      <el-form-item label="文章标识" prop="slug">
        <el-input placeholder="文章标识" v-model="formData.slug"></el-input>
      </el-form-item>
      <el-form-item label="文章分类" prop="classify">
        <el-select v-model="formData.classify" placeholder="请选择">
          <el-option
            v-for="item in classifyList"
            :key="item.id"
            :label="item.label"
            :value="item.id">
          </el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="缩略图" prop="thumb">
        <el-input placeholder="缩略图" v-model="formData.thumb"></el-input>
      </el-form-item>
      <el-form-item label="发布时间" prop="date">
        <el-date-picker
          v-model="formData.modify_time"
          type="datetime"
          value-format="timestamp"
          placeholder="选择日期">
        </el-date-picker>
      </el-form-item>
      <el-form-item label="状态" porp="status">
        <el-radio v-model="formData.status" label="1">草稿</el-radio>
        <el-radio v-model="formData.status" label="2">发布</el-radio>
      </el-form-item>
      <!-- <el-form-item label="标签" prop="tag">
        <el-checkbox-group
          v-model="formData.tag"
          @change="handleCheckAllChange">
          <el-checkbox v-for="city in tagList" :label="city" :key="city" name="type">{{city}}</el-checkbox>
        </el-checkbox-group>
      </el-form-item> -->
      <el-form-item label="文章内容" prop="content">
        <mavon-editor v-model="formData.markdown" fontSize="12px" @change="markDownChange"/>
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
      // 表单数据
      formData: {
        title: '', // 标题
        slug: '', // 
        classify: '', // 
        thumb: '', // 缩略图
        modify_time: '', // 修改时间
        status: '', // 发布状态
        tag: [], // 标签列表
        markdown: '', // 文章markdown内容
        content: '' // 文章html结构
      },
      rules: {
        // 标题规则
        title: [
          { required: true, message: '请输入标题', trigger: 'blur' },
          { min: 3, max: 100, message: '长度在 3 到 5 个字符', trigger: 'blur' }
        ],
        // 分类规则
        classify: [
          { required: true, message: '请选择分类', trigger: 'change' }
        ],
        // 日期规则
        // date: [
        //   { required: true, message: '请选择发布时间', trigger: 'change' }
        // ],
        // 标签规则
        tag: [
          { type: 'array', required: true, message: '请至少选择一个标签', trigger: 'change' }
        ]
      },
      // 分类列表
      classifyList: [
        {
          id: '1',
          label: 'javascript'
        },
        {
          id: '2',
          label: 'css'
        }
      ],
      // 标签列表
      tagList: ['vue', 'react', 'typescript', 'node', 'css'],
      type: ''
    }
  },
  created() {
    let id = this.$route.params.id
    this.type = id
    if (id !== 'add') {
      this.getContentData()
    }
  },
  methods: {
    // 获取对应文章内容
    getContentData() {
      let data = {id: this.type}
      this.$api.getContentData(data).then(res => {
        if (!res.data.errno) {
          // to do
          this.formData = Object.assign(this.formData, res.data.data.contentInfo)
        }
      })
    },
    // 更新文章内容配置
    updateContent() {
      this.$api.updateContent(this.formData).then(res => {
        if (!res.data.errno) {
        }
      })
    },
    // 监听选择的标签列表
    handleCheckAllChange () {
    },
    // 监听markdown输入
    markDownChange (v, f) {
      this.formData.content = f
    },
    // 提交信息
    onSubmit () {
      console.log(this.formData)
    }
  }
}
</script>

<style lang="less">
.ad-content-editor {
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
body {
  .has-time {
    top: 0!important;
  }
}

</style>
