/*
import Vue from 'vue'
import App from './App.vue'

new Vue({
  el: '#app',
  render: h => h(App)
})
*/

import Vue from 'vue'
import App from './App.vue'
import axios from 'axios';
import router from './router/index';
import VueMaterial from 'vue-material';

Vue.config.productionTip = true
Vue.prototype.$axios = axios;

new Vue({
  render: h => h(App),
  router
}).$mount('#app')


import AxiosPlugin from 'vue-axios-cors';

Vue.use(AxiosPlugin);


axios.defaults.headers.common['Content-Type'] = 'application/x-www-form-urlencoded'
axios.defaults.headers.common['Access-Control-Allow-Origin'] = '*';

Vue.use(VueMaterial.default);