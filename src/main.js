import Vue from 'vue';
import App from './App.vue';
import router from './router/router';
import VueBootstrap from 'bootstrap-vue';
import VueRouter from 'vue-router';
import Vuelidate from 'vuelidate';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';

Vue.use(VueBootstrap);
Vue.use(VueRouter);
Vue.use(Vuelidate);

Vue.config.productionTip = false;

new Vue({
  render: h => h(App),
  router,
}).$mount('#app');
