import Vue from 'vue'
import Vuex from 'vuex'
import store from "../index";

Vue.use(Vuex)


/** ---------------------------------------------------------------------
 *          ШАБЛОН МОДУЛЯ ХРАНИЛИЩА
 *
 *      В индексном файле:
 *      1. Сделать импорт
 *      2. Зарегистрировать в блоке modules {...}
 */


/** ---------------------------------------------------------------------
 *                  ДЛЯ ЧЕГО ЭТОТ МОДУЛЬ
 *
 *      Этот модуль обрабатывает много всего.
 */



    /**         ---     S  T  A  T  E     ---         */


const state = {

    inputValue: '',

};



    /**         ---     M   U   T   A   T   I   O   N   S     ---         */


const mutations = {



        /**         ...   test group of mutations   ...         */


    SET_INPUT_VALUE (state, iv) {
        state.inputValue = iv
    },

    CLEAN_INPUT_VALUE (state) {
        state.inputValue = ''
    },



};




    /**         ---     A   C   T   I   O   N   S     ---         */



const actions = {



        /**         ...   ВЫПОЛНЕНИЕ МУТАЦИЙ   ...            */


    SET_INPUT_VALUE ({ commit }, iv) {
        commit('SET_INPUT_VALUE', iv)
    },

    CLEAN_INPUT_VALUE ({ commit }) {
        commit('CLEAN_INPUT_VALUE')
    },



        /**         ...   ОБРАБОТКА ЭЛЕМЕНТА   ...            */


    toggleCloseButton () {

        const toggleClass = function () {

            let element = document
                .getElementsByClassName('searchbar__btn-clean-input')[0]

            if (state.inputValue.length > 0) {

                element.classList.remove('hidden-block')

            } else {

                element.classList.add('hidden-block')

            }


        }

        toggleClass()


    },


    cleanInputField () {

        let element = document
            .getElementsByClassName('searchbar__btn-clean-input')[0]
        element.focus()
        element.value = ''
        store.dispatch('CLEAN_INPUT_VALUE')


    },


    onSubmit ({ getters, dispatch }) {

        let pageCode = getters.GET_PAGECODE;

        if (pageCode === 0) {

            dispatch('onSubmitEgrn')

        } else if (pageCode === 2) {

            dispatch('onSubmitPeople')

        }

    }



};




    /**         ---     G   E   T   T   E   R   S     ---         */



const getters = {


        /**         ...   test group of getters   ...            */


    // get_testText (state) {
    //
    //     return state.testVariable
    //
    // },

    GET_INPUT_VALUE (state){
        return state.inputValue
    }

};



/**         ---   E  X  P  O  R  T   ---         */

export default {

    state,
    mutations,
    actions,
    getters

}