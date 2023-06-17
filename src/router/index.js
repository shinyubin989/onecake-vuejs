import Vue from "vue";
import VueRouter from "vue-router";
// import Home from "@/views/Home.vue";
import Login from "@/views/Login.vue";
import Signup from "@/views/Signup.vue";
import Main from "@/views/Main.vue";
import Menu from "@/views/Menu.vue";
import Store from "@/views/Store.vue";
import StoreMain from "@/views/components/StoreMain.vue";

import { createWebHistory, createRouter } from "vue-router";

const routes = [
  {
    path: "/login",
    name: "Login",
    component: Login,
  },
  {
    path: "/signup",
    name: "Signup",
    component: Signup,
  },
  {
    path: "/main",
    name: "Main",
    component: Main,
  },
  {
    path: "/menu",
    name: "Menu",
    component: Menu,
  },
  {
    path: "/store/:id",
    name: "Store",
    component: Store,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
// Vue.use(VueRouter);

// const routes = [
//   // {
//   //   path: "/",
//   //   name: "Home",
//   //   component: Home,
//   // },
//   {
//     path: "/login",
//     name: "Login",
//     component: Login,
//   },
//   {
//     path: "/signup",
//     name: "Signup",
//     component: Signup,
//   },
// ];

// const router = new VueRouter({
//   mode: "history",
//   base: process.env.BASE_URL,
//   routes,
// });

// export default router;

// export const router = VueRouter.createRouter({

//   history: VueRouter.createWebHashHistory(),
 
//   routes: [
//     {
//       path: "/login",
//       name: "Login",
//       component: Login,
//     },
//     {
//       path: "/signup",
//       name: "Signup",
//       component: Signup,
//     },
//   ]
 
//  })
