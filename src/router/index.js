import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import CurrencyPrice from "../views/CurrencyPrice.vue";
import Contact from "../views/Contact.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/currencyprice",
    name: "CurrencyPrice",
    component: CurrencyPrice
  },
  {
    path: "/contact",
    name: "Contact",
    component: Contact
  },
  
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
