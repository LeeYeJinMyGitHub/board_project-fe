import Vue from 'vue'
import App from './App.vue'
import axios from 'axios';
import router from './router/index';
import Vuetify from 'vuetify';
import 'vuetify/dist/vuetify.min.css';
import Vuex from 'vuex'


Vue.config.productionTip = false;
Vue.prototype.$axios = axios;

Vue.use(Vuetify);
Vue.use(Vuex)

new Vue({
  render: h => h(App),
  router,
  vuetify: new Vuetify(),
}).$mount('#app')

import AxiosPlugin from 'vue-axios-cors';

Vue.use(AxiosPlugin);

axios.defaults.headers.common['Content-Type'] = 'application/x-www-form-urlencoded'
axios.defaults.headers.common['Access-Control-Allow-Origin'] = '*';
