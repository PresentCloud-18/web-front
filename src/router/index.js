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
      requireAuth: true
    }
  },
  {
    path: '/login',
    name: 'Login',
    component: Login,
    children: [

    ]
  },
  {
    path: '/home',
    component: Home,
    meta: {
      keepAlive: true,
      requireAuth: true
    },
    children: [
      {
        path: '/manageBoard',
        name: 'ManageBoard',
        component: ManageBoard,
        hidden: true,
        meta: {
          keepAlive: true,
          requireAuth: true
        }
      },
      {
        path: '/roleManage',
        name: 'RoleManage',
        component: RoleManage,
        hidden: true,
        meta: {
          keepAlive: true,
          requireAuth: true
        }
      },
      {
        path: '/user',
        name: '用户管理',
        component: UserManage,
        meta: {
          keepAlive: true,
          requireAuth: true
        },
        children: [
          {
            path: 'studentManage',
            name: '学生管理',
            component: StudentManage,
            meta: {
              keepAlive: true,
              requireAuth: true
            }
          },
          {
            path: 'teacherManage',
            name: '教师管理',
            component: TeacherManage,
            meta: {
              keepAlive: true,
              requireAuth: true
            }
          },
        ]
      },
      {
        path: '/lessonManage',
        name: '课程管理',
        component: LessonManage,
        meta: {
          keepAlive: true,
          requireAuth: true
        }
      },
      {
        path: '/dataDictionary',
        name: '数据字典',
        component: DataDictionary,
        meta: {
          keepAlive: true,
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
      keepAlive: true,
      requireAuth: true
    }
  }
]

const router = new VueRouter({
  routes
})

export default router
