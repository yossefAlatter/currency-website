import Vue from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";

//== import general style file ==//
//== start ==//
import "./general-style/main.scss";
//== end ==//

Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
