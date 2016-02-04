//----------------------------------------------------------------------------------------------------------------------
/// Main Client-side Application
///
/// @module
//----------------------------------------------------------------------------------------------------------------------

import Vue from 'vue';
import VueRouter from 'vue-router';

// Services
import RouterSvc from './components/route/routeService';

// Pages
import HomeComponent from './pages/home/home.vue';
import ExampleComponent from './pages/example/example.vue';

// Components
import header from './components/header/header.vue';
import footer from './components/footer/footer.vue';

//----------------------------------------------------------------------------------------------------------------------
// App Setup
//----------------------------------------------------------------------------------------------------------------------

Vue.config.debug = true;
Vue.use(VueRouter);

var app = Vue.extend({
    components: {
        'site-header': header,
        'site-footer': footer
    }
});

//----------------------------------------------------------------------------------------------------------------------
// Router
//----------------------------------------------------------------------------------------------------------------------

RouterSvc.setup({
    history: true,
    saveScrollPosition: true,
    linkActiveClass: 'active'
});

RouterSvc.map({
    '/': {
        name: 'home',
        component: HomeComponent
    },
    '/example': {
        name: 'example',
        component: ExampleComponent
    }
});

//----------------------------------------------------------------------------------------------------------------------
// Service Setup
//----------------------------------------------------------------------------------------------------------------------

// Setup router
RouterSvc.start(app, '#main-app');

// ---------------------------------------------------------------------------------------------------------------------