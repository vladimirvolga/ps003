
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
import searchbarHandlerModule from './modules/searchbarHandlerModule'
import SearchbarDataModule from './modules/SearchbarDataModule'
import objectCardModule from './modules/objectCardModule'


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
        searchbarHandlerModule,
        objectCardModule,
        SearchbarDataModule

    }

})


        //  Экспортируем его

export default store



