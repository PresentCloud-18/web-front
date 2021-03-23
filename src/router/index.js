import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Login from '../views/Login.vue'
import UserManage from "@/components/UserManage";
import TeacherManage from "@/components/TeacherManage";
import StudentManage from "@/components/StudentManage";
import ManageBoard from "@/components/ManageBoard";
import RoleManage from "@/components/RoleManage";
import DataDictionary from "@/components/DataDictionary";
import LessonManage from "@/components/LessonManage";


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    hidden: true,
    meta: {
      requireAuth: false
    }
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/home',
    name: 'Home',
    component: Home,
    hidden: true,
    meta: {
      requireAuth: false
    }
  },
  {
    path: '/home',
    component: Home,
    name: '用户管理',
    iconCls: 'el-icon-star-on',
    meta: {
      requireAuth: false
    },
    children: [
      {
        path: '/manageBoard',
        name: 'ManageBoard',
        component: ManageBoard,
        hidden: true,
        meta: {
          requireAuth: false
        }
      },
      {
        path: '/roleManage',
        name: 'RoleManage',
        component: RoleManage,
        hidden: true,
        meta: {
          requireAuth: true
        }
      },
      {
        path: '/userManage',
        name: '用户管理',
        component: UserManage,
        meta: {
          keepAlive: true,
          requireAuth: false
        }
      },
      {
        path: '/studentManage',
        name: '学生管理',
        component: StudentManage,
        meta: {
          keepAlive: true,
          requireAuth: false
        }
      },
      {
        path: '/teacherManage',
        name: '教师管理',
        component: TeacherManage,
        meta: {
          keepAlive: true,
          requireAuth: true
        }
      },
      {
        path: '/lessonManage',
        name: '课程管理',
        component: LessonManage,
        meta: {
          requireAuth: true
        }
      },
      {
        path: '/dataDictionary',
        name: '数据字典',
        component: DataDictionary,
        meta: {
          requireAuth: true
        }
      }
    ]
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue'),
    meta: {
      requireAuth: true
    }
  }
]

const router = new VueRouter({
  routes
})

export default router
