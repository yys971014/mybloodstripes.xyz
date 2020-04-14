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
    // children:[  // main
    //   {
    //     path:"/lll",
    //     name:"",
    //     component:()=>import('../views/main/login.vue')
    //   },
    // ]
  },
  { // 功能展示
    path:"/displayFunc",
    name:"displayFunc",
    component:() => import('../views/displayFunc/index.vue'),
    children:[
      { // 聊天室
        path:"/displayFunc/chatRoom",
        name:"chatRoom",
        component:()=>import('../views/displayFunc/chatRoom.vue')
      },
    ],
  },
  {
    path:"/blogs",
    name:"indexBlogs",
    component:()=>import('../views/blogs/index.vue'),
    children:[
      // 博客首页
      {
        path:"/blogs",
        name:"blogs",
        component:()=>import('../views/blogs/blogs.vue')
      },
      // 写博客
      {
        path:"/blogs/redact",
        name:"redact",
        component:()=>import('../views/blogs/redact.vue')
      },
      // 路由错误，重定向博客首页
      {
        path:"/blogs/*",
        redirect: "/blogs",
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
