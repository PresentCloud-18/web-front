<template>
<div class="base-table">
  <div style="margin-top: 20px;display: flex;margin-bottom: 20px">
    <div class="buttons">
      <el-button @click="toggleSelection()" type="warning">取消选择</el-button>
    </div>
    <div class="buttons">
      <el-button @click="deleteSelected()" type="danger">批量删除</el-button>
    </div>
    <div class="buttons">
      <el-button @click="addItem" type="primary">添加</el-button>
    </div>
    <div style="margin-left: 20px">
      <el-input placeholder="请输入内容" v-model="search" class="input-with-select">
        <el-select v-model="select" slot="prepend" placeholder="请选择">
          <el-option label="学号" value="1"></el-option>
          <el-option label="姓名" value="2"></el-option>
          <el-option label="用户电话" value="3"></el-option>
        </el-select>
        <el-button slot="append" icon="el-icon-search"></el-button>
      </el-input>
    </div>
  </div>
  <el-divider></el-divider>
  <el-table
      ref="multipleTable"
      :data="tableData.slice((currentPage-1)*pageSize,currentPage*pageSize)"
      tooltip-effect="dark"
      style="width: 100%"
      @selection-change="handleSelectionChange">
    <el-table-column
        type="selection"
        width="55">
    </el-table-column>
    <el-table-column
        prop="uid"
        label="用户ID"
        >
      <template slot-scope="scope">{{ scope.row.uid }}</template>
    </el-table-column>
    <el-table-column
        prop="name"
        label="姓名"
        >
    </el-table-column>
    <el-table-column
        prop="schid"
        label="学校ID"
        show-overflow-tooltip>
    </el-table-column>
    <el-table-column
        prop="sid"
        label="学号"
        show-overflow-tooltip>
    </el-table-column>
    <el-table-column
        prop="phone"
        label="电话"
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
  <div class="block">
    <el-pagination
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page.sync="currentPage"
        :page-size="pageSize"
        layout="prev, pager, next, jumper"
        :total="tableData.length">
    </el-pagination>
  </div>
</div>
</template>

<script>
export default {
  name: "BaseTable",
  data() {
    return {
      pageSize: 9,
      currentPage: 1,
      select: '学号',
      tableData: [{
        uid: '123456',
        name: '林同学',
        schid: '1009',
        sid: '200327140',
        phone: '18359135336'
      },{
        uid: '123456',
        name: '林同学',
        schid: '1009',
        sid: '200327140',
        phone: '18359135336'
      },{
        uid: '123456',
        name: '林同学',
        schid: '1009',
        sid: '200327140',
        phone: '18359135336'
      },{
        uid: '123456',
        name: '林同学',
        schid: '1009',
        sid: '200327140',
        phone: '18359135336'
      },{
        uid: '123456',
        name: '林同学',
        schid: '1009',
        sid: '200327140',
        phone: '18359135336'
      },{
        uid: '123456',
        name: '林同学',
        schid: '1009',
        sid: '200327140',
        phone: '18359135336'
      },{
        uid: '123456',
        name: '林同学',
        schid: '1009',
        sid: '200327140',
        phone: '18359135336'
      },{
        uid: '123456',
        name: '林同学',
        schid: '1009',
        sid: '200327140',
        phone: '18359135336'
      },{
        uid: '123456',
        name: '林同学',
        schid: '1009',
        sid: '200327140',
        phone: '18359135336'
      },{
        uid: '123456',
        name: '林同学',
        schid: '1009',
        sid: '200327140',
        phone: '18359135336'
      },{
        uid: '123456',
        name: '林同学',
        schid: '1009',
        sid: '200327140',
        phone: '18359135336'
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
    deleteSelected() {

    },
    addItem () {

    },
    handleEdit(){},
    handleDelete(){},
    handleSelectionChange(val) {
      this.multipleSelection = val;
    },
    handleSizeChange(val) {
      console.log(`每页 ${val} 条`);
    },
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`);
    }
  }
}
</script>

<style scoped>
.base-table {
  position: relative;
  padding: 10px;
  padding-bottom: 10px;
  height: 100%;
  top: 10px;
}
.block {
  float: right;
  margin-top: 30px;
  margin-right: 30px;
  margin-bottom: 30px;
}
.buttons {
  margin-left: 20px;
}
</style>
