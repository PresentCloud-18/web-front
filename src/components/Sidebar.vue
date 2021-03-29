<template>
  <div class="sidebar">
    <el-menu
        class="sidebar-el-menu el-menu-vertical-demo"
        :default-active="onRoutes"
        :collapse="isCollapse"
        background-color="#324158"
        text-color="#bfcbd9"
        active-text-color="#20a0ff"
        unique-opened
        router
    >
      <template v-for="item in items">
        <template v-if="item.subs">
          <el-submenu :index="item.index" :key="item.index">
            <template slot="title">
              <i :class="item.icon"></i>
              <span slot="title">{{ item.title }}</span>
            </template>
            <template v-for="subItem in item.subs">
              <el-submenu
                  v-if="subItem.subs"
                  :index="subItem.index"
                  :key="subItem.index"
              >
                <template slot="title">{{ subItem.title }}</template>
                <el-menu-item
                    v-for="(threeItem,i) in subItem.subs"
                    :key="i"
                    :index="threeItem.index"
                >{{ threeItem.title }}</el-menu-item>
              </el-submenu>
              <el-menu-item
                  v-else
                  :index="subItem.index"
                  :key="subItem.index"
              >{{ subItem.title }}</el-menu-item>
            </template>
          </el-submenu>
        </template>
        <template v-else>
          <el-menu-item :index="item.index" :key="item.index">
            <i :class="item.icon"></i>
            <span slot="title">{{ item.title }}</span>
          </el-menu-item>
        </template>
      </template>
    </el-menu>
    <div class="collapse-btn" @click="collapseChange">
      <i v-if="!isCollapse" class="el-icon-s-fold"></i>
      <i v-else class="el-icon-s-unfold"></i>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isCollapse: false,
      items: [
        {
          icon: 'el-icon-house',
          index: 'manageBoard',
          title: 'DashBoard'
        },
        {
          icon: 'el-icon-user-solid',
          index: 'roleManage',
          title: '角色管理'
        },
        {
          icon: 'el-icon-user',
          index: '2',
          title: '用户管理',
          subs: [
            {
              icon: 'el-icon-s-custom',
              index: 'teacherManage',
              title: '教师管理'
            },
            {
              icon: 'el-icon-s-custom',
              index: 'studentManage',
              title: '学生管理'
            }
          ]
        },
        {
          icon: 'el-icon-tickets',
          index: 'lessonManage',
          title: '课程管理'
        },
        {
          icon: 'el-icon-s-data',
          index: 'dataDictionary',
          title: '数据字典'
        },
        {
          icon: 'el-icon-tickets',
          index: 'test',
          title: '测试页面'
        },
        {
          icon: 'el-icon-files',
          index: '3',
          title: '表单相关',
          subs: [
            {
              index: 'baseTable',
              title: '基础列表'
            },
            {
              index: 'baseForm',
              title: '基础表单'
            },
            {
              index: '500',
              title: '500异常页面'
            },
            {
              index: 'customerror',
              title: '自定义异常页面'
            },
            {
              index: '3-2',
              title: '三级菜单',
              subs: [
                {
                  index: '403',
                  title: '三级菜单1'
                },
                {
                  index: '404',
                  title: '三级菜单2'
                }
              ]
            }
          ]
        }
      ]
    };
  },
  methods: {
    collapseChange() {
      this.$store.commit('closeMenu', !this.isCollapse)
      this.isCollapse = !this.isCollapse
    },
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    }
  },
  computed: {
    onRoutes() {
      return this.$route.path.replace('/', '/manageBoard');
    }
  },
  created() {
    this.isCollapse = this.$store.state.isCollapse
    console.log(this.$store.state.isCollapse)
  }
};
</script>

<style scoped>
.sidebar {
  display: block;
  position: fixed;
  width: 250px;
  left: 0;
  top: 70px;
  bottom: 0;
}
.collapse-btn {
  background: #3A5799;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  position: fixed;
  font-size: 30px;
  left: 10px;
  bottom: 20px;
  cursor: pointer;
  line-height: 40px;
}
.sidebar::-webkit-scrollbar {
  width: 0;
}
.sidebar-el-menu:not(.el-menu--collapse) {
  width: 250px;
}
.sidebar > ul {
  height: 100%;
}
.logo-container {
  height: 70px;
}
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 250px;
}
.menu-icon {
  margin-top: 20px;
}
</style>
