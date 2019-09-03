import Vue from 'vue'
import App from './App.vue'

import { router } from './plugins/vue-router';

import "./assets/styles.scss"

new Vue({
    router,
    render: h => h(App)
}).$mount('#app');