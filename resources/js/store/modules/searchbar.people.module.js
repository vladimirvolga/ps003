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


    searchQuery: '',
    rowsToShow: '',
    firstRow: '',

    totalRowsCount: 'iv',
    dataRows: '',

    requestDone: false,

    messageResultSuccess: 'Найдено записей по запросу:',
    messageResultFail: 'Поиск не дал результатов.',


};


/**         ---   M  U  T  A  T  I  O  N  S   ---         */


const mutations = {


    /**         ...   before request   ...         */


    set_searchQuery(state, searchQuery) {

        state.searchQuery = searchQuery
        state.rowsToShow = 10
        state.firstRow = 0
    },

    set_variablesRequestFirst(state, searchQuery) {

        state.totalRowsCount = 'iv'
        state.dataRows = ''

        state.searchQuery = searchQuery
        state.rowsToShow = 15
        state.firstRow = 0
    },

    set_variablesRequestNext(state) {

        state.firstRow = state.firstRow + state.rowsToShow
    },


    /**         ...   after response   ...         */


    set_dataRows(state, responseDataRows) {

        state.requestDone = true
        state.dataRows = responseDataRows

    },

    set_dataRowsNext(state, responseDataRows) {

        state.dataRows = state.dataRows.concat(responseDataRows)

    },

    set_totalRowsCount(state, responseTotalRowsCount) {

        state.totalRowsCount = responseTotalRowsCount

    }



};


/**         ---   A  C  T  I  O  N  S   ---         */


const actions = {



    onSubmitPeople ({ getters, dispatch }) {

        let inputValue = getters.GET_INPUT_VALUE
        let searchQuery = getters.GET_INPUT_VALUE

            console.log ('сработал экшн onSubmitPeople')
            console.log ('state.inputValue   ' + inputValue)

        dispatch('setVariablesRequestFirst', searchQuery)

            console.log('state.searchQuery   ' + state.searchQuery)
            console.log('state.totalRowsCount   ' + state.rowsToShow)
            console.log('state.firstRow   ' + state.firstRow)

        dispatch('request')

            console.log('state.totalRowsCount после выполнения запросва   ' + state.totalRowsCount)


    },


    /**         ...   setVariablesRequestFirst   ...            */


    setVariablesRequestFirst({ commit }, searchQuery) {

        commit('set_variablesRequestFirst', searchQuery)

    },


    /**         ...   setVariablesRequestNext   ...            */


    setVariablesRequestNext({ commit }, searchQuery) {

        commit('set_variablesRequestNext')

    },


    /**         ...   request   ...            */


    request({ commit }) {

        return new Promise((resolve, reject) => {

            const searchdata = {

                'searchQuery': state.searchQuery,
                'rowsToShow': state.rowsToShow,
                'firstRow': state.firstRow,

            }

            axios({ url: '/api/search', data: searchdata, method: 'POST' })

                .then(resp => {

                    const response = resp.data

                    let responseTotalRowsCount
                    let responseDataRows

                    if (response.length > 1) {

                        responseTotalRowsCount =
                            response[0].TOTALROWSCOUNTINFO.TOTALROWSCOUNT
                        responseDataRows = response[1].DATAROWS

                        commit('set_totalRowsCount', responseTotalRowsCount)
                        commit('set_dataRows', responseDataRows)

                    } else  {

                        responseDataRows = response[0].DATAROWS

                        commit('set_dataRowsNext', responseDataRows)

                    }

                    resolve(resp)
                })

                .catch(err => {

                    reject(err)

                })
        })
    }

};


/**         ---   G  E  T  T  E  R  S   ---         */


const getters = {

    get_testText (state) {
        return state.testText
    },

    get_dataRows (state) {
        return state.dataRows
    },

    get_totalRowsCount (state) {

        if (state.totalRowsCount === 'iv' || state.totalRowsCount === 0) {
            return ''
        } else {
            return state.totalRowsCount
        }

    },

    get_messageResultSuccess (state) {
        return state.messageResultSuccess
    },

    get_messageResultFail (state) {
        return state.messageResultFail
    },

    get_requestDone (state) {
        return state.requestDone
    },

    get_messageResult (state) {

        if (state.totalRowsCount === 'iv') {
            return ''
        } else if (state.totalRowsCount === 0) {
            return state.messageResultFail
        } else {
            return state.messageResultSuccess
        }

    },

};




/**         ---   E  X  P  O  R  T   ---         */

export default {

    state,
    mutations,
    actions,
    getters

}

