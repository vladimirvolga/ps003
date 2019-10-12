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



    /**         ...   СЕКЦИЯ ЗАКАЗА ДОКУМЕНТОВ   ...            */


    showOrderSection () {

        let indexOfElement = 0
        let elementsAmount = document
            .getElementsByClassName('object-card__info-block').length

        for (let ie = indexOfElement; ie<elementsAmount; ie++) {
            document
                .getElementsByClassName('object-card__info-block')[ie]
                .onclick = function () {

                    // console.log('index of element   ' + ie)

                document.getElementsByClassName('modal_order-section')[0]
                    .classList.remove('hidden-block')

            }
        }


    },


    hideOrderSection() {

        document.getElementsByClassName('modal_order-section')[0]
            .classList.add('hidden-block')

    },


    checkClickOutOfModalWindow() {

        window.addEventListener('click', function(e) {

            let targetSection = e.target.classList
            if (targetSection.contains ('modal_order-section')) {

                    // console.log('target section  ' + targetSection )
                
                document.getElementsByClassName('modal_order-section')[0]
                    .classList.add('hidden-block')
            }
        })

    },



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