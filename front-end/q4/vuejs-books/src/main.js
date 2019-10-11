import Vue from 'vue';
import App from './App.vue';
import VueRouter from 'vue-router';
import BootstrapVue from 'bootstrap-vue';

import BookDetails from './components/BookDetails.vue';
import BookList from './components/BookList.vue';

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';
Vue.config.productionTip = false;

const routes = [
    { path: '/book/:book_slug', name: 'book', component: BookDetails },
    { path: '/', component: BookList }
];
Vue.use(BootstrapVue);
Vue.use(VueRouter);
// 3. Create the router instance and pass the `routes` option
// You can pass in additional options here, but let's
// keep it simple for now.
const router = new VueRouter({
    routes // short for `routes: routes`
});

new Vue({
    router,
    render: h => h(App)
}).$mount('#app');
