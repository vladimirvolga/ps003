import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)


/** ---------------------------------------------------------------------
 *          ШАБЛОН МОДУЛЯ ХРАНИЛИЩА
 *      В индексном файле:
 *      1. Сделать импорт
 *      2. Зарегистрировать в блоке modules {...}
 *      3. СДЕЛАТЬ ПОМЕТКУ СКАКИМ ФАЙЛОМ СВЯЗАН ПРЕИМУЩЕСТВЕННО
 *          ЭТОТ ФАЙЛ.
 */



/**         ---   S T A T E   ---         */


const state = {

    requestedCadNumber: '',
    requestedObjectId: '',
    requestedAddress: '',

    objectDataRows: '',

};



/**         ---     M   U   T   A   T   I   O   N   S     ---         */


const mutations = {



        /**         ...   SETTING VARIABLES VALUE   ...         */


    SET_REQUESTED_CAD_NUMBER (state, cn) {
        state.requestedCadNumber = cn
    },

    SET_REQUESTED_OBJECT_ID (state, objectId) {
        state.requestedObjectId = objectId
    },

    SET_REQUESTED_ADDRESS (state) {
        state.requestedAddress = ''
    },

    SET_OBJECT_DATA_ROWS (state, od) {
          state.objectDataRows = od
    },



        /**         ...   CLEANING VARIABLES VALUE   ...         */


    CLEAN_REQUESTED_CAD_NUMBER (state) {
        state.requestedCadNumber = ''
    },

    CLEAN_REQUESTED_OBJECT_ID (state) {
        state.requestedObjectId = ''
    },



};



/**         ---     A   C   T   I   O   N   S     ---         */



const actions = {



        /**         ...   ВЫПОЛНЕНИЕ МУТАЦИЙ   ...            */


    SET_REQUESTED_CAD_NUMBER({ commit }, cn) {
        commit('SET_REQUESTED_CAD_NUMBER', cn)
    },

    //   передать сюда перменную.
    SET_REQUESTED_OBJECT_ID({ commit }) {
        commit('SET_REQUESTED_OBJECT_ID')
    },


    SET_REQUESTED_ADDRESS({ commit }) {
        commit('SET_REQUESTED_ADDRESS')
    },

    SET_OBJECT_DATA_ROWS({ commit }, od) {
        commit('SET_OBJECT_DATA', od)
    },



            /**         ...   ЭКШЕНЫ ДРУГИЕ   ...            */


    //  Проверяем, соответствуют ли введенные данные
    //  адресу или кадстровому номеру.

    checkInputValue ({ getters, dispatch }) {

        let regexpRequestedCadNumber = /(^[\d]+:[\d]+:[\d]+:[\d]+$)/
        let regexpFirstCharIsLetter = /^([\D])+/

        let iv = getters.GET_INPUT_VALUE

        if (iv.match(regexpRequestedCadNumber)) {

            dispatch('SET_REQUESTED_CAD_NUMBER', iv)
            dispatch('CLEAN_INPUT_VALUE')

        }

    },


    //  Удаляем ведущие нули в кадастровом номере при необзоидмости
    //  преобразуем кадастровый номер в objectId.

    checkSimbols ({ commit }) {

        // let cadNumber = '073:024:0000000:0667'
        // let cadNumber = '73:19:000000:127'
        let cadNumber = state.requestedCadNumber
        let cadNumberArr = cadNumber.split(':')

        let objectId = cadNumberArr.map(function (fragment) {

            let checkedFragment = fragment
            let checkedFragmentArr = checkedFragment.split('')
            let i = 0

            while (checkedFragmentArr[i] === '0' && i < checkedFragmentArr.length-1) {

                delete checkedFragmentArr[i]
                i++

            }

            checkedFragment = checkedFragmentArr.join('')
            return checkedFragment

        })

        objectId = objectId.join(':')

        commit ('SET_REQUESTED_OBJECT_ID', objectId)
        commit ('CLEAN_REQUESTED_CAD_NUMBER')

    },


    //  Передача данных для запроса на сервер.

    requestObjectData({ commit }) {

        let searchData={}

        if (state.requestedObjectId !== '') {

            searchData = {
                'searchData': state.requestedObjectId,
            }

        }

        axios({ url: '/api/getobjectdata', data: searchData, method: 'POST' })

            .then(resp => {

                let od = resp.data

                commit('SET_OBJECT_DATA_ROWS', od)
                commit('CLEAN_REQUESTED_OBJECT_ID')

            }
        )
            .catch(error => console.log(error))

    },


    onSubmit({ dispatch }) {
        dispatch('checkInputValue')
        dispatch('checkSimbols')
        dispatch('requestObjectData')
    },



            /**         ...   ФУНКЦИИ ДЛЯ РАЗЛИЧНОГО ТЕСТИРОВАНИЯ   ...            */


    testPrint () {
        console.log ('вызов экшена из другого')
    },

    testFunction({ dispatch }) {
        dispatch('testPrint')
    },


    testFunction2 () {

        let testData = {
            testData : 'тестовый текст для отправки на сервер'
        }

        axios({ url: '/api/test', data: testData, method: 'POST' })
            .then(resp => {

                let rd = resp.data
                // console.log(rd)

            })
            .catch(error => console.log(error))

    },



};





/**         ---     G   E   T   T   E   R   S     ---         */



const getters = {



        /**         ...   test group of getters   ...            */


    GET_OBJECT_DATA_ROWS (state) {
        return state.objectDataRows
    },



};




/**         ---   E  X  P  O  R  T   ---         */

export default {

    state,
    mutations,
    actions,
    getters

}