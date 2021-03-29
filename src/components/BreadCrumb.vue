<template>
  <div class="router-info">
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item
          v-for="(item,index) in breadList"
          :key="index"
          :to="{ path: item.path }"
      >{{item.name}}</el-breadcrumb-item>
    </el-breadcrumb>
  </div>
</template>

<script>
export default {
  name: "BreadCrumb",
  data() {
    return {
      breadList: []
    }
  },
  watch: {
    $route() {
      this.getBreadcrumb();
    }
  },
  methods: {
    isHome(route) {
      return route.name === "home";
    },
    Menu: function () {
      this.$store.state.isCollapse = !this.$store.state.isCollapse
    },
    getBreadcrumb() {
      let matched = this.$route.matched;
      //如果不是首页
      if (!this.isHome(matched[0])) {
        matched = [{ path: "/", meta: { title: "首页" } }].concat(matched);
      }
      this.breadList = matched;
    }
  },
  created() {
    this.getBreadcrumb();
  }
}
</script>

<style scoped>
.router-info {
  display: flex;
  width: 100%;
  margin-left: 0px;
  padding-left: 0px;
  padding-top: 10px;
  padding-right: 10px;
  padding-bottom: 10px;
  background: #FAFAFA;
}
</style>
