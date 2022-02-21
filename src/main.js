import Vue from 'vue'
import App from './App.vue'
import request from "./requestServer";


Vue.config.productionTip = false

Vue.prototype.$request = request;

new Vue({
  render: h => h(App),
}).$mount('#app')
