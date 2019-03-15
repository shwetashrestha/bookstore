import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);
import newarrival from './modules/newarrival'
import bestbook from './modules/bestbook'
import imageslider from './modules/imageslider'
import book from './modules/book'






export default new Vuex.Store({
    modules: {
        newarrival,
        bestbook,
        imageslider,
        book
                 
    },
    strict: false
});