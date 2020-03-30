import Vue from "vue";
import App from "./App.vue";
import router from "./router";  // 路由
import store from "./store";
// 引用jQuery
import $ from 'jquery';
Vue.prototype.$ = $;
// 引入element-UI
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI); // 引入elementUI
// 引用axios
import Api from './utils/axios.js';
Vue.prototype.$axios = Api; // 赋值$axios
// 引入animate.css动画
import animated from 'animate.css';
Vue.use(animated);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
