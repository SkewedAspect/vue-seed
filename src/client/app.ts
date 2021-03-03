//----------------------------------------------------------------------------------------------------------------------
// Vue-seed Client Application
//----------------------------------------------------------------------------------------------------------------------

import Vue from 'vue';
import VueRouter from 'vue-router';

// Bootstrap Vue
import BootstrapVue from 'bootstrap-vue';

// Font Awesome
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon, FontAwesomeLayers } from '@fortawesome/vue-fontawesome';

// Views
import App from './app.vue';

// Pages
import HomePage from './pages/home.vue';
import AboutPage from './pages/about.vue';

// Site Style
import './scss/theme.scss';

//----------------------------------------------------------------------------------------------------------------------
// Font Awesome
// ---------------------------------------------------------------------------------------------------------------------

library.add(fab, far, fas);
Vue.component('Fa', FontAwesomeIcon);
Vue.component('FaLayers', FontAwesomeLayers);

// ---------------------------------------------------------------------------------------------------------------------
// Bootstrap Vue
// ---------------------------------------------------------------------------------------------------------------------

import 'bootstrap-vue/dist/bootstrap-vue.css';

Vue.use(BootstrapVue);

//----------------------------------------------------------------------------------------------------------------------
// Vue Router
//----------------------------------------------------------------------------------------------------------------------

Vue.use(VueRouter);

const router = new VueRouter({
    mode: 'history',
    routes: [
        { path: '/', name: 'home', component: HomePage },
        { path: '/about', name: 'about', component: AboutPage }
    ]
});

//----------------------------------------------------------------------------------------------------------------------
// Setup Vue App
//----------------------------------------------------------------------------------------------------------------------

new Vue({
    el: '#app',
    components: { App },
    router,
    template: '<App/>'
});

//----------------------------------------------------------------------------------------------------------------------
