import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Login from '../views/Login.vue'
import TeacherManage from "@/components/TeacherManage";
import StudentManage from "@/components/StudentManage";
import ManageBoard from "@/components/ManageBoard";
import RoleManage from "@/components/RoleManage";
import DataDictionary from "@/components/DataDictionary";
import LessonManage from "@/components/LessonManage";
import UserManage from "@/components/UserManage";
import HelloWorld from "@/components/HelloWorld";
import BaseTable from "@/components/BaseTable";
import Others from "@/components/Others";
import BaseForm from "@/components/BaseForm";

Vue.use(VueRouter)

const routes = [
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/home',
    component: Home,
    name: '首页',
    meta: {
      keepAlive: true,
      requireAuth: true,
      title: '首页'
    },
    children: [
      {
        path: '/manageBoard',
        name: '数据面板',
        component: ManageBoard,
        hidden: true,
        meta: {
          keepAlive: true,
          requireAuth: true,
          title: '管理面板'
        }
      },
      {
        path: '/roleManage',
        name: '角色管理',
        component: RoleManage,
        hidden: true,
        meta: {
          keepAlive: true,
          requireAuth: true,
          title: '角色管理'
        }
      },
      {
        path: '/user',
        name: '用户管理',
        component: UserManage,
        meta: {
          keepAlive: true,
          requireAuth: true,
          title: '用户管理'
        },
        children: [
          {
            path: '/studentManage',
            name: '学生管理',
            component: StudentManage,
            meta: {
              keepAlive: true,
              requireAuth: true,
              title: '学生管理'
            }
          },
          {
            path: '/teacherManage',
            name: '教师管理',
            component: TeacherManage,
            meta: {
              keepAlive: true,
              requireAuth: true,
              title: '教师管理'
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
          requireAuth: true,
          title: '课程管理'
        }
      },
      {
        path: '/dataDictionary',
        name: '数据字典',
        component: DataDictionary,
        meta: {
          keepAlive: true,
          requireAuth: true,
          title: '数据字典'
        }
      },
      {
        path: '/test',
        name: '测试页面',
        component: HelloWorld,
        meta: {
          keepAlive: true,
          requireAuth: true,
          title: '测试页面'
        }
      },
      {
        path: '/others',
        name: '表单相关',
        component: Others,
        meta: {
          keepAlive: true,
          requireAuth: true
        },
        children: [
          {
            path: '/baseTable',
            name: '基础列表',
            component: BaseTable,
            meta: {
              keepAlive: true,
              requireAuth: true
            }
          },
          {
            path: '/baseForm',
            name: '基础表单',
            component: BaseForm,
            meta: {
              keepAlive: true,
              requireAuth: true
            }
          }
        ]
      },
      {
        path: '/about',
        name: '关于',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "about" */ '../views/About.vue'),
        meta: {
          keepAlive: true,
          requireAuth: true,
          title: '关于'
        }
      }
    ]
  },
  {
    path: '*',
    name: '404',
    component: () => import('../views/404')
  }
]

const router = new VueRouter({
  routes
})

export default router
