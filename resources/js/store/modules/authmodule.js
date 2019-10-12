import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)


    /** ---------------------------------------------------------------------
    *      ЗДЕССЬ КОД НА ОСНОВЕ ВОТ ОТСЮДА:
    *      https://pusher.com/tutorials/authentication-vue-vuex
    */


        /**         ---   S T A T E   ---         */

    const state = {

        status: '',
        token: localStorage.getItem('token') || '',
        user: {},
        userEmail: localStorage.getItem('userEmail') || 'ue'

    };


        /**         ---   M  U  T  A  T  I  O  N  S   ---         */


    const mutations = {

        auth_request(state) {
            state.status = 'loading'
        },

        auth_success_set_status(state) {
            state.status = 'success'
        },

        auth_success_set_token(state, token) {
            state.status = 'success'
            state.token = token
        },

        auth_success_set_user(state, user) {
            state.user = user
        },

        auth_success_set_userEmail(state, userEmail) {
            state.userEmail = userEmail
        },

        auth_error(state) {
            state.status = 'error'
        },

        logout(state) {
            state.status = ''
            state.token = ''
            state.userEmail = 'lo'
        },

    };


                /**         ---   A  C  T  I  O  N  S   ---         */


    const actions = {


            /**         ...   loginAction   ...            */

        loginAction({ commit }, authdata) {

            return new Promise((resolve, reject) => {

                commit('auth_request')

                axios({ url: '/api/auth/login', data: authdata, method: 'POST' })

                    .then(resp => {

                        const token = resp.data.access_token
                        const user = resp.data.user
                        const userEmail = resp.data.user.email

                            console.log('userEmail:   '+ userEmail)

                        localStorage.setItem('token', token)
                        axios.defaults.headers.common['Authorization'] = token

                        localStorage.setItem('userEmail', userEmail)

                        commit('auth_success_set_status')
                        commit('auth_success_set_token', token)
                        commit('auth_success_set_user', user)
                        commit('auth_success_set_userEmail', userEmail)

                            console.log('state.userEmail:   ' + state.userEmail)
                            console.log('localStorage, userEmail:   '
                                + localStorage.getItem('userEmail'))

                        resolve(resp)
                    })

                    .catch(err => {

                        commit('auth_error')
                        localStorage.removeItem('token')
                        reject(err)

                    })

            })
        },


            /**         ...   registerAction   ...         */

        registerAction({ commit }, regdata) {

            return new Promise((resolve, reject) => {

                commit('auth_request')

                axios({ url: '/api/user/register', data: regdata, method: 'POST' })

                    .then(resp => {

                        const token = resp.data.access_token
                        const user = resp.data.user

                        localStorage.setItem('token', token)
                        // Add the following line:
                        axios.defaults.headers.common['Authorization'] = token

                        commit('auth_success_set_status')
                        commit('auth_success_set_token', token)
                        commit('auth_success_set_user', user)


                        resolve(resp)
                    })

                    .catch(err => {

                        commit('auth_error', err)
                        localStorage.removeItem('token')
                        reject(err)

                    })
            })
        },


            /**         ...   logoutAction   ...         */

        logoutAction({ commit }) {

            return new Promise((resolve, reject) => {

                commit('logout')
                localStorage.removeItem('token')
                localStorage.removeItem('userEmail')
                delete axios.defaults.headers.common['Authorization']
                resolve()

            })

        }

    };


                /**         ---   G  E  T  T  E  R  S   ---         */


    const getters = {

        isLoggedIn: state => !!state.token,
        authStatus: state => state.status,
        // get_userEmail: state => state.userEmail,

        get_userEmail (state) {
            return state.userEmail
        }

    };


                /**         ---   E  X  P  O  R  T   ---         */


export default {

    state,
    mutations,
    actions,
    getters

}

