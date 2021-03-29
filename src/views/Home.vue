<template>
  <el-container>
    <div class="wrapper">
      <y-header></y-header>
      <y-sidebar></y-sidebar>
      <div :class="{'content-box':!this.$store.state.isCollapse, 'content-collapse' : this.$store.state.isCollapse}">
        <BreadCrumb></BreadCrumb>
        <div class="content">
          <transition>
            <keep-alive>
              <router-view v-if="this.$route.meta.keepAlive"></router-view>
            </keep-alive>
          </transition>
        </div>
      </div>
    </div>
    <UserInfo></UserInfo>
  </el-container>
</template>

<script>
// @ is an alias to /src
import ySidebar from "@/components/Sidebar";
import yHeader from "@/components/Header";
import BreadCrumb from "@/components/BreadCrumb";
import UserInfo from "@/components/UserInfo";

export default {
  name: 'Home',
  components: {
    ySidebar,
    yHeader,
    BreadCrumb,
    UserInfo
  },
  data() {
    return {
      currentUserName: 'Admin',
      input: ''
    }
  },
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    }
  },
  created() {
    this.collapse = this.$store.state.isCollapse
  }
}
</script>

<style>
  @import url("//unpkg.com/element-ui@2.15.1/lib/theme-chalk/index.css");
  .wrapper {
    width: 100%;
    height: 100%;
    overflow: hidden;
  }
  .content-collapse {
    position: absolute;
    left: 80px;
    right: 10px;
    top: 70px;
    bottom: 0;
    padding-bottom: 30px;
    -webkit-transition: left .3s ease-in-out;
    transition: left .3s ease-in-out;
    background: #fafafa;
  }
  .content-box {
    position: absolute;
    left: 260px;
    top: 70px;
    right: 10px;
    bottom: 0;
    padding-bottom: 40px;
    -webkit-transition: left .3s ease-in-out;
    transition: left .3s ease-in-out;
    background: #fafafa;
  }
  .content {
    width: auto;
    height: 100%;
    padding: 10px;
    /*overflow-y: scroll;*/
    box-sizing: border-box;
  }
  .el-select .el-input {
    width: 130px;
  }
  .input-with-select .el-input-group__prepend {
    background-color: #fff;
  }
  ::-webkit-scrollbar {
    /*隐藏滚轮*/
    display: none;
  }
</style>
