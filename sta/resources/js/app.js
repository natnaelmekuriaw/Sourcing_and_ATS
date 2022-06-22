
require('./bootstrap');

window.Vue = require('vue').default;

import Vuetify from '../plugins/vuetify'
Vue.component('app', require('./views/App.vue').default);

const app = new Vue({
    el: '#app',
    vuetify: Vuetify,
});
