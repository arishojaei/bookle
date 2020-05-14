import Vue from 'vue'
import Vuex from 'vuex'
import { get } from '@/utils/http-request'
import sha1 from 'js-sha1'

Vue.use(Vuex)

export default new Vuex.Store({

  state: {
    userFullName: window.localStorage.getItem('user'),
    isAuth: window.localStorage.getItem('isAuth') | false
  },

  mutations: {
    AUTH_SUCCESS(state, payload) {
      state.userFullName = payload;
      state.isAuth = true
    },
    REMOVE_USER_DATA(state) {
      state.userFullName = ''
      state.isAuth = ''
    },
  },

  actions: {
    async login({ commit }, payload) {
      let promise = new Promise((resolve, reject) => {
        get('/users.json')
        .then(response => {
          const users = response.data.users
          
          const matchUser = users.find(user => {
            return user.email === payload.email && user.password === sha1(payload.pass)
          });

          if (matchUser) {
            commit('AUTH_SUCCESS', matchUser.full_name)

            // presist
            window.localStorage.setItem('user', matchUser.full_name);
            window.localStorage.setItem('isAuth', true);

            resolve()
          } else {
            alert('اطلاعات وارد شده نادرست است')
            reject()
          }
        })
      });

      await promise
    },

    async logout({ commit }) {
      let promise = new Promise((resolve) => {
        commit('REMOVE_USER_DATA')
        window.localStorage.removeItem('user')
        window.localStorage.removeItem('isAuth')
        resolve()
      })

      await promise
    }
  },

  modules: {
  }
  
})
