import Vue from "vue";
import App from "./App.vue";
import router from "./router";  // 路由
import store from "./store";

// 引用jQuery，并赋值为$全局引用
import $ from 'jquery';
Vue.prototype.$ = $;

// 引入element-UI
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);

// 引用axios，并赋值为$axios全局引用
import Api from './utils/axios.js';
Vue.prototype.$axios = Api;

// 引入animate.css动画
import animated from 'animate.css';
Vue.use(animated);

// 引入showdown，用做.md文件加载
import showdown from 'showdown';
Vue.prototype.md2html = (md) => {
  let converter = new showdown.Converter()
  let text = md.toString()
  let html = converter.makeHtml(text)
  return html
};

// 引入Vue-markdown编辑器插件
import mavonEditor from 'mavon-editor';
import 'mavon-editor/dist/css/index.css';
Vue.use(mavonEditor);

// 阻止启动生产消息，常用作指令。
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
