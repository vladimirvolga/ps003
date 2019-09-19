
import jsonp from 'jsonp'

const state = {
    results: [],
}


const mutations = {
    set(state, { type, items }) {
        state[type] = items
    }
}


const actions = {
    search({ commit }, query) {
        const url = 'https://ru.wikipedia.org/w/api' +
            '.php?action=query&list=search&format=json&utf8&srsearch=' + query

        jsonp(url, (error, response) => {

            if (error){
                throw error
            }

            const results = response.query.search

            commit('set', { type: 'results', items: results })
        })
    }
}


const getters = {

    results(state) {
        return state.results.map(item => {
            item.url = 'https://ru.wikipedia.org/wiki/' + item.title
            return item
        })
    }

}


export default {

    state,
    mutations,
    actions,
    getters

}


