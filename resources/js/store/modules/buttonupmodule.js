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


    // ...


};



                /**         ---   M  U  T  A  T  I  O  N  S   ---         */


const mutations = {


            /**         ...   HHH
             *                hhh                              ...         */


};



                /**         ---   A  C  T  I  O  N  S   ---         */


const actions = {


            /**         ...   Perform mutations with variable
             *                buttonUpShow                          ...            */


    checkScrollForButtonUp ({ commit }) {

            /**     Запусскаем слушателя события Скролл      */
        
        window.addEventListener('scroll', function () {

            let elements = document.getElementsByClassName('button-up')

            let scrollFromTop = window.pageYOffset
            let scrollForButtonUpShow = 50

            if (scrollFromTop > scrollForButtonUpShow) {
                elements[0].classList.remove('invisible')
            } else {
                elements[0].classList.add('invisible')
            }

        })    
        
    },

    backToTop() {

        let scrollFromTop = window.pageYOffset
        let scrollPerTime = 80
        let scrollPerTimeCor = - scrollPerTime
        let needScrollTimes = Math.ceil(scrollFromTop/scrollPerTime)

            for (let i = 0; i < needScrollTimes; i++) {

                setTimeout( function () {
                    window.scrollBy(0, scrollPerTimeCor);
                }, i*15)

            }

    },

};



                /**         ---   G  E  T  T  E  R  S   ---         */


const getters = {


            /**         ...   Aaaaaa   ...         */


    // ...


};



/**         ---   E  X  P  O  R  T   ---         */

export default {

    state,
    mutations,
    actions,
    getters

}