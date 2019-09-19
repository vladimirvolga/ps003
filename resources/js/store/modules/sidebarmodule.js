import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)


/** ---------------------------------------------------------------------
 *          ШАБЛОН МОДУЛЯ ХРАНИЛИЩА
 *      В индексном файле:
 *      1. Сделать импорт
 *      2. Зарегистрировать в блоке modules {...}
 */



/**         ---   S T A T E   ---         */


const state = {

    // testVariable: '',

};



/**         ---   M  U  T  A  T  I  O  N  S   ---         */


const mutations = {


    /**         ...   test group of mutations   ...         */


    set_testVariable (state) {

        state.testVariable = 'тестовый текст для перменной'

    },


    /**         ...   test group of mutations 2   ...         */


    set_testVariable_2 (state) {

        state.testVariable = 'тестовый текст для перменной 2'

    },

};



/**         ---   A  C  T  I  O  N  S   ---         */


const actions = {


    /**         ...   test group of actions   ...            */


    // setTestVariable({ commit }) {
    //
    //     commit('set_testVariable')
    //
    // },


    /**         ...   Sidebar behaviour   ...            */


    hideSidebar() {

        let el = document.getElementsByClassName("sidebar")
        // console.log(el)
        el[0].classList.add("hidden-block")

    },

    showSidebar() {

        let el = document.getElementsByClassName("sidebar")
        // console.log(el)
        el[0].classList.remove("hidden-block")

    },


};



/**         ---   G  E  T  T  E  R  S   ---         */


const getters = {


    /**         ...   test group of getters   ...            */


    // get_testText (state) {
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