import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);
/**
 * 前端页面路由
 */
const routes = [
  {
    path: "/",
    name: "",
    component: () =>
      // import(/* 首页 */ "../views/Home.vue")
      import(/* 首页 */ "../views/index.vue")
  },
  {
    path:"/Home",
    name:"",
    component: () =>
      import(/**主页 */ "../views/Home.vue")
  },
  {
    path: "/about",
    name: "about",
    component: () =>
      import(/* 关于页 */ "../views/About.vue")
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
