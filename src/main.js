// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import VueResource from 'vue-resource';
import App from './App'

Vue.config.productionTip = false;

Vue.use(VueResource);

Vue.http.options.root = 'https://vuejs-httptest.firebaseio.com/data.json';

/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: { App },
  template: '<App/>'
})
