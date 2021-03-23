<template>
  <div class=" header">
    <div class="logo">
      <img style="height: 50px;width:250px" src="../assets/logo.png" />
    </div>
    <div class="header-right">
      <div class="user-avatar">
        <el-dropdown @command="handleCommand">
          <el-avatar :size="50" src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"></el-avatar>
                <el-dropdown-menu class="el-dropdown-link" slot="dropdown">
                  <el-dropdown-item command="MyHome">{{ currentUserName }}</el-dropdown-item>
                  <el-dropdown-item command="logout" divided>退出登录</el-dropdown-item>
                </el-dropdown-menu>
        </el-dropdown>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Header",
  data () {
    return {
      currentUserName: 'Admin'
    }
  },
  methods: {
    handleCommand(command) {
      let _this = this;
      if (command === 'logout') {
        this.$confirm('注销登录吗?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(function () {
          _this.currentUserName = '游客';
          _this.$router.replace({path: '/'});
        }, function () {
          //取消
        })
      }
      if (command === 'MyHome') {
        //getRequest("/userhome");
        _this.$router.push({path: '/userhome'});
      }
    }
  }
}
</script>

<style scoped>
.header-right {
  position: relative;
  float: right;
  padding-right: 10px;
  height: 70px;
}
.header {
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  box-sizing: border-box;
  width: 100%;
  font-size: 22px;
  height: 70px;
  color: #fff;
  background: #272F42;
}
.user-avatar {
  padding-top: 10px;
  padding-bottom: 10px;
}
.logo{
  float: left;
  margin-bottom: 10px;
  margin-top: 10px;
}
</style>
