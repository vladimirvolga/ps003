
const state = {
    sometext: 'какой-то заранее установленный в хранилище текст'
}



const mutations = {
    SET_SOME_TEXT: (state, pd) => {
        state.sometext = pd.textvalue
    }
}


const actions = {
    SET_SOME_TEXT ({ commit }, pd) {
        commit('SET_SOME_TEXT', pd)
    }
}


const getters = {
    GET_SOME_TEXT (state) {
        return state.sometext
    }
}


export default {

    state,
    mutations,
    actions,
    getters

}


