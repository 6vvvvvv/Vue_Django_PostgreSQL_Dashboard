import Vue from "vue";
import VueRouter from "vue-router";
// import Home from "../views/Home.vue";
import Login from "../views/Login.vue";
import Signup from "../views/Signup.vue";
import Reset from "../views/Reset.vue";
import App from "../App.vue";
import Dashboard from "../views/Dashborad.vue";
import Customers from "../views/Customers.vue";
import Inbox from '../views/Inbox.vue'

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "App",
    component: App
  },
  {
    path: "/login",
    name: "Login",
    component: Login
  },
  {
    path: "/signup",
    name: "Signup",
    component: Signup
  },
  {
    path: "/reset",
    name: "Reset",
    component: Reset
  },
  {
    path: "/dashboard",
    name: "Dashboard",
    component: Dashboard
  },
  {
    path: "/customers",
    name: "Customers",
    component: Customers
  },
  {
    path: "/inbox",
    name: "Inbox",
    component: Inbox
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
