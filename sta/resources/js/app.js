
require('./bootstrap');

window.Vue = require('vue').default;

import Vuetify from '../plugins/vuetify'

Vue.component('example-component', require('./components/ExampleComponent.vue').default);



const app = new Vue({
    el: '#app',
    vuetify: Vuetify,
});
