import Vue from 'vue'
import store from  './store/index'
import Vuetify from 'vuetify'
import App from './App.vue'

Vue.use(Vuetify);

new Vue({
  el: '#app',
  store,
  render: h => h(App)
});



