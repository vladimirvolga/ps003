
import Auth from '../pages/AuthPage'
import Search from '../pages/SearchPage'
import Notfound from '../pages/404Page'
import Registr from '../pages/RegistrPage'
import Test from '../pages/TestPage'
import UsersIndex from '../pages/UsersIndex'
import SearchEGRN from '../pages/SearchEGRNPage'
import SearchMyDocuments from '../pages/SearchMyDocumentsPage'
import SearchPeople from '../pages/SearchPeoplePage'


import store from '../store' // your vuex store

const ifNotAuthenticated = (to, from, next) => {
    if (!store.getters.isLoggedIn) {
        next()
        return
    }
    next('/search')
}

const ifAuthenticated = (to, from, next) => {
    if (store.getters.isLoggedIn) {
        next()
        return
    }
    next('/')
}



const routes = [

    {
        path: '/',
        name: 'auth',
        component: Auth,
        beforeEnter: ifNotAuthenticated,
    },
    {
        path: '/registr',
        name: 'registr',
        component: Registr
    },
    {
        path: '/search',
        name: 'search',
        component: Search,
        beforeEnter: ifAuthenticated,
    },
    {
        path: '*',
        name: 'notfound',
        component: Notfound,
    },
    {
        path: '/test',
        name: 'test',
        component: Test,
    },

    {
        path: '/users',
        name: 'users.index',
        component: UsersIndex,
    },

    {
        path: '/egrn',
        name: 'egrn',
        component: SearchEGRN,
    },

    {
        path: '/mydocuments',
        name: 'mydocuments',
        component: SearchMyDocuments,
    },

    {
        path: '/people',
        name: 'people',
        component: SearchPeople,
    }


];

export default routes;