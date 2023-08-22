import Login from "@/views/Login.vue";
import Signup from "@/views/Signup.vue";
import Main from "@/views/Main.vue";
import Stores from "@/views/Stores.vue";
import Store from "@/views/Store.vue";
import OrderSheet from "@/views/OrderSheet.vue";
import Orders from "@/views/Orders.vue"
import SpecificOrder from "@/views/SpecificOrder.vue";
import Chats from "@/views/Chats.vue";

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
    path: "/",
    name: "Main",
    component: Main,
  },
  {
    path: "/stores",
    name: "Stores",
    component: Stores,
  },
  {
    path: "/store/:id",
    name: "Store",
    component: Store,
  },
  {
    path: "/store/:storeId/ordersheet/:menuId",
    name: "OrderSheet",
    component: OrderSheet,
  },
  {
    path: "/orders",
    name: "Orders",
    component: Orders,
  },
  {
    path: "/orders/:id",
    name: "SpecificOrder",
    component: SpecificOrder,
  },
  {
    path: "/chats",
    name: "Chats",
    component: Chats,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
