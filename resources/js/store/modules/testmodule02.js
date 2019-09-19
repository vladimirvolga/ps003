
const state = {
    countedNumber: 0
}


const mutations = {
    increment: state => state.countedNumber ++,
    decrement: state => state.countedNumber --
}


const actions = {

    increment ({ commit }) {
        commit('increment')
    },

    decrement ({ commit }) {
        commit('decrement')
    }

}


const getters = {

    gCountedNumber (state) {
        return state.countedNumber
    }

}


export default {

    state,
    mutations,
    actions,
    getters

}


