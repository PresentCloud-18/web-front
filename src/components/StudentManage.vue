<template>
  <div class="student-info">
    <el-tabs type="border-card">
      <el-tab-pane label="全部学生">
        <BaseTable></BaseTable>
      </el-tab-pane>
      <el-tab-pane label="添加学生">

      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
import BaseTable from "@/components/BaseTable";
export default {
  name: "StudentManage",
  data() {
    return {

    }
  },
  components: {
    BaseTable
  }
}
</script>

<style scoped>
.student-info {
  position: relative;
  padding: 10px;
  padding-bottom: 10px;
  height: 100%;
  top: 10px;
}
</style>
