import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);
/**
 * 前端页面路由
 */
const routes = [
  { // 所有主要页面
    path:"/",
    name:"",
    component:() => import('../views/index.vue'),
    children:[  // main
      {
        path:"/lll",
        name:"",
        component:()=>import('../views/main/login.vue')
      }
    ]
  },
  { // 登录页面
    path:"/login",
    name:"",
    component: () =>
      import(/* 登录页*/ "../views/login/login.vue")
  },
  { // Home
    path: "/home",
    name: "",
    component: () => import("../views/Home.vue")
  },
  { // About
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
