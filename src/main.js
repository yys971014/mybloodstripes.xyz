import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
// 引用jQuery
import $ from 'jquery';
// 引入element-UI
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
//main.js
// import Api from './axios/api.js';
import axios from 'axios';
Vue.prototype.$axios = axios;
//在其他组件中使用
// this.http.post()

Vue.use(ElementUI); // 引入elementUI
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
