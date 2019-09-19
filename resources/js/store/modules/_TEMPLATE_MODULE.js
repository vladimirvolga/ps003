import Vue from 'vue'
import Vuex from 'vuex'

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

    // testVariable: '',

};



    /**         ---     M   U   T   A   T   I   O   N   S     ---         */


const mutations = {


            /**         ...   test group of mutations   ...         */


    // SET_TEST_VARIABLE (state) {
    //
    //     state.testVariable = 'тестовый текст для перменной'
    //
    // },




            /**         ...   test group of mutations 2   ...         */


    // SET_TEST_VARIABLE_2 (state) {
    //
    //     state.testVariable = 'тестовый текст для перменной 2'
    //
    // },

};



    /**         ---     A   C   T   I   O   N   S     ---         */


const actions = {


        /**         ...   ВЫПОЛНЕНИЕ МУТАЦИЙ   ...            */


    // setTestVariable({ commit }) {
    //
    //     commit('SET_TEST_VARIABLE')
    //
    // },



        /**         ...   ДРУГИЕ ЭКШЕНЫ   ...            */


        //    Тестовая функция для вызова из другого экшена

    // testPrint () {
    //     console.log ('вызов экшена из другого')
    // },


        //    Вызов одного  экшена из другого

    // testFunction({ dispatch }) {
    //     dispatch('testPrint')
    // }

};




    /**         ---     G   E   T   T   E   R   S     ---         */



const getters = {



        /**         ...   test group of getters   ...            */


    // GET_TEST_VARIABLE_VALUE (state) {
    //
    //     return state.testVariable
    //
    // },

};




/**         ---   E  X  P  O  R  T   ---         */

export default {

    state,
    mutations,
    actions,
    getters

}