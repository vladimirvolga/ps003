
/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */


require('./bootstrap');

import Vue from 'vue'

import {library} from '@fortawesome/fontawesome-svg-core'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { faArrowUp } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
library.add(faCoffee);
library.add(faSearch);
library.add(faArrowUp);

Vue.component('font-awesome-icon', FontAwesomeIcon);



Vue.config.productionTip = false;



Vue.component('example-component', require('./components/ExampleComponent.vue'));
Vue.component('search-form-component', require('./components/SearchFormComponent.vue'));
Vue.component('search-result-component', require('./components/SearchResultComponent.vue'));
Vue.component('registr-component', require('./components/RegistrComponent.vue'));
Vue.component('auth-component', require('./components/AuthComponent.vue'));
Vue.component('testsearchformcomp', require('./components/TestSearchFormComp'));
Vue.component('testsearchrescomp', require('./components/TestSearchResComp'));
Vue.component('user-block-component', require('./components/UserBlockComponent'));
Vue.component('button-up-component', require('./components/ButtonUpComponent'));
Vue.component('top-menu-component', require('./components/TopMenuComponent'));
Vue.component('sidebar-component', require('./components/SidebarComponent'));
Vue.component('searchbar-component', require('./components/SearchbarComponent'));
Vue.component('search-results-component', require('./components/SearchResultsComponent'));
Vue.component('object-card-component', require('./components/ObjectCardComponent'));
Vue.component('order-section-component', require('./components/OrderSectionComponent'));
Vue.component('log-section-component', require('./components/LogSectionComponent'));
Vue.component('file-section-component', require('./components/FileSectionComponent'));



import App from './components/App'



// import Vuelidate from 'vuelidate'
// Vue.use(Vuelidate)

import ru from '../../node_modules/vee-validate/dist/locale/ru.js';
import VeeValidate from 'vee-validate';
import {Validator} from 'vee-validate';

// Validator.localize('ru', ru);  // здесь происходит изменение локали

import messagesEn from './i18n/messages/en.js';
import attributesEn from './i18n/attributes/en.js';
import messagesRu from './i18n/messages/ru.js';
import attributesRu from './i18n/attributes/ru.js';
// Vue.use(VeeValidate);

Vue.use(VeeValidate, {
    locale: 'ru',
    dictionary: { // dictionary object
        en: {  // locale key
            messages: messagesEn,   // English messages
            attributes: attributesEn  // English attributes
        },
        ru: {   // locale key
            messages: messagesRu,   // Indonesian messages
            attributes: attributesRu  // Indonesian attributes
        }
    }
});

// Fonts
import '../sass/fonts.scss'

import store from './store'
import VueRouter from 'vue-router'
import routes from './routes/routes'

Vue.use(VueRouter)

// import { sync } from 'vuex-router-sync'

const router = new VueRouter({
    mode: 'history',
    routes,
});



// sync (store, router)

const app = new Vue({
    el: '#app',
    components: { App },
    store,
    router,

});






