<template>
  <div class="router-info">
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/home' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item v-text="this.$router.currentRoute.name"></el-breadcrumb-item>
    </el-breadcrumb>
  </div>
</template>

<script>
export default {
  name: "BreadCrumb"
}
</script>

<style scoped>
.router-info {
  width: 100%;
  padding-left: 8px;
  padding-top: 10px;
  padding-right: 10px;
  padding-bottom: 10px;
  background: #fff;
}
</style>
