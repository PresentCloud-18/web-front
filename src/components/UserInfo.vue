<template>
  <div>
    <el-drawer
        title="我嵌套了表格!"
        :visible.sync="drawer"
        direction="rtl"
        size="50%">

    </el-drawer>
  </div>
</template>

<script>
export default {
  name: "UserInfo",
  data() {
    return {
    }
  },
  mounted() {
  },
  created() {
  },
  computed: {
    drawer: {
      get () {
        return this.$store.state.userDrawer
      },
      set () {
        this.$store.commit('changeUserDrawer')
      }
    }
  }
}
</script>

<style scoped>

</style>
