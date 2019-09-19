import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)


/** ---------------------------------------------------------------------
 *      ШАБЛОН МОДУЛЯ ХРАНИЛИЩА
 *      Текст заметки
 */



                /**         ---   S T A T E   ---         */


const state = {


            /**         ...   test group of mutations   ...         */


    testVariable: '',
    startRequest: false,


};



                /**         ---   M  U  T  A  T  I  O  N  S   ---         */


const mutations = {


            /**         ...   test group of mutations   ...         */


    set_startRequestTrue (state) {
        state.startRequest = true
    },

    set_startRequestFalse (state) {
        state.startRequest = false
    },


            /**         ...   test group of mutations 2   ...         */


    set_testVariable_2 (state) {
        state.testVariable = 'тестовый текст для перменной 2'
    },

};



                /**         ---   A  C  T  I  O  N  S   ---         */


const actions = {


            /**         ...   tests   ...            */


    // testFunctionInStore() {
    //     console.log('Тестовая функция в сторе')
    // },



            /**         ...   check some parameters on a page   ...            */


    checkScrollPosition ({ commit }) {


            /**     Устанавливаем в переменные функции
             *      запуска мутаций. Это необходимо для видимости этих функций
             *      внутри листнера                                                 */
                
        const setStartRequestTrue = function () {
                commit ('set_startRequestTrue')
        }

        const setStartRequestFalse = function () {
                commit ('set_startRequestFalse')
        }

        
            /**     Запусскаем слушателя события Скролл
             *      ...                                         */

        window.addEventListener('scroll', function() {


                /**     Высота окна     */

            let windowHeight = window.innerHeight


                /**     Высота документа     */

            let documentHeight =
                document.documentElement.getBoundingClientRect().bottom +
                window.pageYOffset


                /**     Расстояние от верхней границы окна
                 *      до нижнего края документа               */

            let restDocumentHeightTop =
                document.documentElement.getBoundingClientRect().bottom

                /**     Расстояние от верхней границы окна
                 *      до нижнего края документа               */

            let restDocumentHeightBottom =
                document.documentElement.getBoundingClientRect().bottom -
                windowHeight


                /**     Величина прокрутки сверху     */

            let scrollFromTop = window.pageYOffset


                /**     Расстояние от нижнего края до границы,
                 *     когда стартует функция подгрузки котента     */

            let lineGetContentBottom = 30


                /**     Расстояние от верхнего края окна до границы,
                 *      когда стартует функция подгрузки котента         */

            let lineGetContentTop = windowHeight - lineGetContentBottom


            if (restDocumentHeightBottom <= lineGetContentBottom) {

                setStartRequestTrue()

            } else {

                setStartRequestFalse()

            }

        });

    },


            /**         ...   check some parameters on a page   ...            */


    checkElementPositionOnScroll() {

        window.addEventListener('scroll', function() {

            let elements = document.getElementsByClassName('item')
            let distanceOfVisibility = 30

            let edgeOfVisibilityTop = distanceOfVisibility
            let edgeOfVisibilityBottom = window.innerHeight -
                distanceOfVisibility

            for (let i = 0; i < elements.length; i += 1) {

                let c = elements[i].getBoundingClientRect()

                if (c.top < edgeOfVisibilityBottom && c.bottom > edgeOfVisibilityTop) {
                    elements[i].classList.remove('invisible')
                } else {
                    elements[i].classList.add('invisible')
                }

            }

        })

    },

};



                /**         ---   G  E  T  T  E  R  S   ---         */


const getters = {


            /**         ...   test group of getters   ...            */


    get_startRequest (state) {
        return state.startRequest
    },

};




/**         ---   E  X  P  O  R  T   ---         */

export default {

    state,
    mutations,
    actions,
    getters

}