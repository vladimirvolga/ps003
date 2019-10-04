
        //  Импортиурем Vue и Vuex

import Vue from 'vue'
import Vuex from 'vuex'

        //  Говорим Vue, что он будет использовать Vuex

Vue.use(Vuex)


        //  Импотируем модуль user

import testmodule from './modules/testmodule'
import testmodule02 from './modules/testmodule02'
import testmodule03 from './modules/testmodule03'
import authmodule from './modules/authmodule'
import searchmodule from './modules/searchmodule'
import pagehandlemodule from './modules/pagehandlemodule'
import buttonupmodule from './modules/buttonupmodule'
import sidebarmodule from './modules/sidebarmodule'
import pageAddressHandlerModule from './modules/pageAddressHandlerModule'
import objectCardModule from './modules/objectCardModule'
import searchbarModule from './modules/searchbar.module'
import searchbarEgrnModule from './modules/searchbar.egrn.module'
import searchbarPeopleModule from './modules/searchbar.people.module'



        //  Создаем store

const store = new Vuex.Store ({

    modules: {

        testmodule,
        testmodule02,
        testmodule03,
        authmodule,
        searchmodule,
        pagehandlemodule,
        buttonupmodule,
        sidebarmodule,
        pageAddressHandlerModule,
        objectCardModule,
        searchbarModule,
        searchbarEgrnModule,
        searchbarPeopleModule,

    }

})


        //  Экспортируем его

export default store



