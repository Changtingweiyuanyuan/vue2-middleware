import Vue from "vue";
import App from "./App.vue";
import router from "./route/router";
import store from "./store"
import Toast from 'vue-toastification'

import 'vue-toastification/dist/index.css'
import '@/scss/plugins/_toast.scss'

Vue.config.productionTip = false;
Vue.use(Toast, {
  transition: "Vue-Toastification__bounce",
  maxToasts: 3,
  newestOnTop: true,
  position: "bottom-right",
  timeout: 5000,
  closeOnClick: true,
  pauseOnFocusLoss: true,
  pauseOnHover: false,
  draggable: true,
  draggablePercent: 0.7,
  showCloseButtonOnHover: false,
  hideProgressBar: true,
  closeButton: false,
  icon: {
    iconClass: "vm-toast-icon",
    iconChildren: "",
    iconTag: "i"
  },
  rtl: false
});

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");