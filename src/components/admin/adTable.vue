<template>
  <div class="table-box">
    <el-table
      :data="tableData"
      border
      style="100%"
      header-row-class-name="table-rows-name">
    <el-table-column :prop="item.prop" :width="item.width" :label="item.label" class-name="text-center" v-for="(item,index) in labelArray" :key="index">
      <template slot-scope="scope">
        <p v-if="item.prop !== 'setting'">
          <span v-if="item.prop !== 'title'">{{ scope.row[item.prop] }}</span>
          <span v-else @click="goToPage(scope.row.id)">{{ scope.row[item.prop] }}</span>
        </p>
        <p v-else>
          <el-button type="primary" icon="el-icon-edit" size="small" @click="editorExist(scope.row.id)"></el-button>
          <el-button type="danger" icon="el-icon-delete" size="small" @click="deleteExist(scope.row.id)"></el-button>
        </p>
      </template>
    </el-table-column>
    </el-table>
    <el-pagination
      background
      layout="total, sizes, prev, pager, next, jumper"
      :page-sizes="[10, 20]"
      :page-size="maxPageNumber"
      @size-change="changeSize"
      :total="dataArray.length"
      :current-page="currentPage"
      @current-change="getCurrentPage">
    </el-pagination>
  </div>
</template>

<script>
export default {
  props: {
    dataArray: {
      type: Array
    },
    labelArray: {
      type: Array
    }
  },
  data () {
    return {
      tableArray: [],
      maxPageNumber: 10,
      currentPage: 1
    }
  },
  computed: {
    tableData () {
      // console.log(this.tableArray)
      let array = []
      if (!this.tableArray.length) {
        return []
      }
      for (let i = 0; i < this.tableArray.length; i++) {
        if (this.tableArray[i].currentPage === this.currentPage) {
          array = this.tableArray[i].data
        }
      }
      return array
    }
  },
  watch: {
    dataArray: {
      handler(newValue, oldValue) {
        this.pagination()
      }
    }
  },
  mounted () {
    this.pagination()
  },
  methods: {
    pagination () {
      let totalPage = Math.ceil(this.dataArray.length/this.maxPageNumber)
      let array = []
      for (let i = 0; i < totalPage; i++) {
        if (i === 0) {
          array.push({
            currentPage: i+1,
            data: this.dataArray.slice(0, this.maxPageNumber)
          })
        } else {
          array.push({
            currentPage: i + 1,
            data: this.dataArray.slice(i * this.maxPageNumber, i * this.maxPageNumber + this.maxPageNumber)
          })
        }
      }
      this.tableArray = array
    },
    changeSize (size) {
      this.maxPageNumber = size
      this.pagination()
    },
    getCurrentPage (page) {
      this.currentPage = page
    },
    editorExist (id) {
      this.$emit('editorExist', id)
    },
    deleteExist (id) {
      console.log('delete')
      this.$emit('deleteExist', id)
    },
    goToPage (id) {
      this.$emit('goToPage', id)
    }
  }
}
</script>

<style lang="less">
.table-box {
  margin-top: 20px;
  tr.table-rows-name th {
    background: #f8f8f9;
  }
  .el-table td, .el-table th {
    padding: 10px 0;
    font-size: 12px;
  }
}
  
.el-pagination {
  text-align: center;
  margin-top: 20px;
}

.text-center {
  .cell {
    text-align: center;
  }
    p {
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }
}
.el-table__body-wrapper td:first-child:hover {
  cursor: pointer;
}
</style>
