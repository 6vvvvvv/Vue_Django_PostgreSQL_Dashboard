import Vue from "vue";
import VueRouter from "vue-router";
// import App from "../App.vue";
import Home from "../views/Home.vue";
import Login from "../views/Login.vue";
import Signup from "../views/Signup.vue";
import Reset from "../views/Reset.vue";
import Dashboard from "../views/Dashborad.vue";
import Customers from "../views/Customers.vue";
import Inbox from "../views/Inbox.vue";
import Calendar from "../views/Calendar.vue";
import ChatRoom from "../views/ChatRoom.vue";
import Invoice from "../views/Invoice.vue";
import Products from "../views/Products.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/home",
    name: "Home",
    component: Home
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
  },
  {
    path: "/calendar",
    name: "Calendar",
    component: Calendar
  },
  {
    path: "/chat",
    name: "ChatRoom",
    component: ChatRoom
  },
  {
    path: "/invoice",
    name: "Invoice",
    component: Invoice
  },
  {
    path: "/product",
    name: "Products",
    component: Products
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
