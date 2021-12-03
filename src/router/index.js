import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Category from "../views/Category";
import SingleProduct from "../views/SingleProduct"
import SignUp from "../views/SignUp"
import Login from "../views/Login"
import DashBoard from "../views/DashBoard"
import profile from "../views/profile"
import Cart from "../views/Cart"
Vue.use(VueRouter);

const routes = [
  {
    path: "/Home",
    name: "Home",
    component: Home,
  },
  {
    path: "/Category",
    name: "Category",
    component: Category,
  },
  {
    path: "/Cart",
    name: "Cart",
    component: Cart,
  },

  {
    path: "/SingleProduct",
    name: "SingleProduct",
    component: SingleProduct,
  },
  {
    path: "/",
    name: "SignUp",
    component: SignUp,
  },
  {
    path: "/Login",
    name: "Login",
    component: Login,
  },
  {
    path: "/DashBoard",
    name: "DashBoard",
    component: DashBoard,
  },
  {
    path: "/profile",
    name: "profile",
    component: profile,
  },
   
  {
    path: "/about",
    name: "About",
    component: () =>{}
  },


];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
