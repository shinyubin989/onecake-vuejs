import { createApp } from 'vue'
import App from './App.vue'
import router from "./router";
import axios from "axios";
import BootstrapVue3 from 'bootstrap-vue-3'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue-3/dist/bootstrap-vue-3.css'
import Toast from 'vue-toastification';
import 'vue-toastification/dist/index.css';

const app = createApp(App)
app.config.globalProperties.axios = axios
app.use(router).use(BootstrapVue3)

const options = {
    position: 'bottom-right',
    timeout: 3000, // 토스트가 보여지는 시간 (밀리초 단위)
};
app.use(Toast, options)
app.mount('#app')

// import Vue from "vue";
// import App from "./App.vue";
// import router from "./router";

// Vue.config.productionTip = false;

// new Vue({
//   router,
//   render: (h) => h(App),
// }).$mount("#app");
