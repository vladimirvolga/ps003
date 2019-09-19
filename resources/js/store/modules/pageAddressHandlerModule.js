import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)


/** ---------------------------------------------------------------------
 *          ШАБЛОН МОДУЛЯ ХРАНИЛИЩА
 *
 *      В индексном файле:
 *      1. Сделать импорт
 *      2. Зарегистрировать в блоке modules {...}
 */


/** ---------------------------------------------------------------------
 *          ДЛЯ ЧЕГО ЭТОТ МОДУЛЬ
 *
 *      В этом модуле хрангится код открытой в текудий момент страницы:
 *           ЕГРН            0
 *           МОИ ДОКУМЕНТЫ   1
 *           ЛЮДИ            2
 *      При загрузке страницы переменной присваивается занчение кода страницы.
 *      Это необходимо для того, чтобы в зависимости от открутой страницы:
 *           1. Присвоить соответствующие классы пунктам меню
 *           2. Обеспечения выполнения функций поиска, специфичных именно
 *              для этой страницы.
 */



/**         ---   S T A T E   ---         */


const state = {

    pageCode: '',
    textPlaceholderEGRN: 'кадастровый номер или адрес объекта',
    textPlaceholderMyDocuments: 'кадастровый номер или адрес',
    textPlaceholderPeople: 'Жириновский Владимир Вольфович',

};



/**         ---   M  U  T  A  T  I  O  N  S   ---         */


const mutations = {


    /**         ...   Установка значений для перем pageCode    ...         */


        //   Устанавливаем значение переменной для страницы "ЕГРН"

    SET_PAGECODE_EGRN (state) {

        state.pageCode = 0

    },

        //   Устанавливаем значение переменной для страницы "МОИ ДОКУМЕНТЫ"

    SET_PAGECODE_MYDOCUMENTS (state) {

        state.pageCode = 1

    },

        //   Устанавливаем значение переменной для страницы "ЛЮДИ"

    SET_PAGECODE_PEOPLE (state) {

        state.pageCode = 2

    },

};



    /**         ---     A   C   T   I   O   N   S     ---         */



const actions = {




        /**         ...   ЗАПУСК МУТАЦИЙ   ...            */


    setPageCodeEGRN({ commit }) {

        commit('SET_PAGECODE_EGRN')
        console.log("Код страницы:   " + state.pageCode)

    },

    setPageCodeMyDocuments({ commit }) {

        commit('SET_PAGECODE_MYDOCUMENTS')
        console.log("Код страницы:   " + state.pageCode)

    },

    setPageCodePeople({ commit }) {

        commit('SET_PAGECODE_PEOPLE')
        console.log("Код страницы:   " + state.pageCode)

    },




        /**         ...   ПОСЛЕ ПЕРЕХОДА НА СТРАНИЦУ    ...            */


    /** Добавление класса ACTIVE для ярлыка страницы
     *  Размещение специфичного для страницы текста в
     *  плейсхолдер инпута
     */


    afterGoingToPage () {


        const addActiveClass = function () {

            let elementNI = document
                .getElementsByClassName('navigation__item')
                [state.pageCode]
            elementNI.classList.add('navigation__item_active')

            let elementNISM = document
                .getElementsByClassName('navigation__item_sm')
                [state.pageCode]
            elementNISM.classList.remove('hidden-block')
            elementNISM.classList.add('navigation__item_active_sm')

            let elementSBNI = document
                .getElementsByClassName('sidebar-navigation__item')
                [state.pageCode]
            elementSBNI.classList.add('sidebar-navigation__item_active')

        }

        addActiveClass()

        const addTextPlaceholder = function () {

            let element = document
                .getElementsByClassName('searchbar__input')[0]
            if (state.pageCode === 0) {
                element.setAttribute('placeholder', state.textPlaceholderEGRN)
            }

        //    Добавить изменения плейсхолдера для других страниц

        }

        addTextPlaceholder()


    },


};



/**         ---   G  E  T  T  E  R  S   ---         */


const getters = {


    /**         ...   test group of getters   ...            */


    GET_PAGECODE (state) {

        return state.pageCode

    },

};



/**         ---   E  X  P  O  R  T   ---         */

export default {

    state,
    mutations,
    actions,
    getters

}