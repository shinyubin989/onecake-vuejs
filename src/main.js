import { createApp } from 'vue'
import App from './App.vue'
import router from "./router";
import axios from "axios";
import BootstrapVue3 from 'bootstrap-vue-3'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue-3/dist/bootstrap-vue-3.css'

// Vue.use(BootstrapVue)

axios.defaults.baseURL = 'http://localhost:8080'

const app = createApp(App)
app.config.globalProperties.axios = axios
app.use(router).use(BootstrapVue3)
app.mount('#app')

// import Vue from "vue";
// import App from "./App.vue";
// import router from "./router";

// Vue.config.productionTip = false;

// new Vue({
//   router,
//   render: (h) => h(App),
// }).$mount("#app");
