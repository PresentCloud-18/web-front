<template>
  <div class="student-info">
    <el-tabs type="border-card">
      <el-tab-pane label="全部学生">
        <div style="margin-top: 20px;display: flex;margin-bottom: 20px">
          <div>
            <el-button @click="toggleSelection()" type="warning">取消选择</el-button>
          </div>
          <div style="margin-left: 20px">
            <el-input
                v-model="search"
                size="large"
                placeholder="输入关键字搜索">
              <el-button slot="append" icon="el-icon-search"></el-button>
              </el-input>
          </div>
        </div>
        <el-divider></el-divider>
        <el-table
            ref="multipleTable"
            :data="tableData"
            tooltip-effect="dark"
            style="width: 100%"
            @selection-change="handleSelectionChange">
          <el-table-column
              type="selection"
              width="55">
          </el-table-column>
          <el-table-column
              label="日期"
              width="120">
            <template slot-scope="scope">{{ scope.row.date }}</template>
          </el-table-column>
          <el-table-column
              prop="name"
              label="姓名"
              width="120">
          </el-table-column>
          <el-table-column
              prop="address"
              label="地址"
              show-overflow-tooltip>
          </el-table-column>
          <el-table-column label="操作">
            <template slot-scope="scope">
              <el-button
                  size="mini"
                  @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
              <el-button
                  size="mini"
                  type="danger"
                  @click="handleDelete(scope.$index, scope.row)">删除</el-button>
            </template>
          </el-table-column>
        </el-table>
        <el-pagination
            style="margin-top: 30px"
            background
            layout="prev, pager, next"
            :total="1000">
        </el-pagination>
      </el-tab-pane>
      <el-tab-pane label="配置管理">

      </el-tab-pane>
      <el-tab-pane label="角色管理">

      </el-tab-pane>
      <el-tab-pane label="定时任务补偿">

      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
export default {
  name: "StudentManage",
  data() {
    return {
      tableData: [{
        date: '2016-05-03',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      }, {
        date: '2016-05-02',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      }, {
        date: '2016-05-04',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      }, {
        date: '2016-05-01',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      }, {
        date: '2016-05-08',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      }, {
        date: '2016-05-06',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      }, {
        date: '2016-05-07',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      }],
      multipleSelection: [],
      search: ''
    }
  },

  methods: {
    toggleSelection(rows) {
      if (rows) {
        rows.forEach(row => {
          this.$refs.multipleTable.toggleRowSelection(row);
        });
      } else {
        this.$refs.multipleTable.clearSelection();
      }
    },
    handleSelectionChange(val) {
      this.multipleSelection = val;
    }
  }
}
</script>

<style scoped>
.student-info {
  position: relative;
  padding: 10px;
  padding-bottom: 10px;
  height: 100%;
  top: 20px;
}
</style>
