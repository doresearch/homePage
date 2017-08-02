//组件在这声明好
import Vue from 'vue';
import App from './App.vue'
import Vuex from 'vuex'
import VueRouter from 'vue-router'

Vue.use(Vuex);

Vue.component('my-component', {
    template: '<div>A custom component!</div>'
})

const store = new Vuex.Store({
    state: {},
    mutations: {},
    getter: {}
});


let app = new Vue({
    VueRouter,
    store,
    el: '#app',
    render: h => h(App)
})