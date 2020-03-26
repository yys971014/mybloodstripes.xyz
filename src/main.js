import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
// 引用jQuery
import $ from 'jquery';
// 引入element-UI
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
// 引用axios
import Api from './axios/api.js';
Vue.prototype.$axios = Api; // 赋值$axios

Vue.use(ElementUI); // 引入elementUI
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
