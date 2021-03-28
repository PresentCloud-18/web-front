import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

// 定义全局共享变量
export default new Vuex.Store({
    state: {
        user: {
            username: window.localStorage.getItem('user' || '[]') == null ? '' : JSON.parse(window.localStorage.getItem('user' || '[]')).username
        },
        isCollapse: false,
        userDrawer: false
    },
    mutations: {
        login (state, user) {
            state.user = user
            window.localStorage.setItem('user', JSON.stringify(user))
        },
        closeMenu (state, isCollapse) {
            state.isCollapse = isCollapse
        },
        changeUserDrawer (state) {
            state.userDrawer = !state.userDrawer
        }
    },
    getters: {
        userDrawer: (state) => {
            return state.userDrawer
        }
    }
})
