import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);
/**
 * 前端页面路由
 */
const routes = [
  { // 主页展示
    path:"/",
    name:"",
    component:() => import('../views/main/index.vue'),
    children:[  // main
      {
        path:"/lll",
        name:"",
        component:()=>import('../views/main/login.vue')
      },
    ]
  },
  { // 功能展示
    path:"/displayFunc",
    name:"displayFunc",
    component:() => import('../views/displayFunc/index.vue'),
    children:[
      {
        path:"/displayFunc/chatRoom",
        name:"chatRoom",
        component:()=>import('../views/displayFunc/chatRoom.vue')
      }
    ],
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
  { // 路由错误,
    path:"*",
    redirect: "/"
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
