import { createRouter, createWebHistory } from "vue-router";
import Login from "../views/Login.vue";
import Register from "../views/Register.vue";
import DashboardProduct from "../views/DashboardProduct.vue";
import DashboardUser from "../views/DashboardUser.vue";
import Home from "../views/Home.vue";
import HomeDashboard from "../views/HomeDashboard.vue";
import Movie from "../views/Movie.vue";
import Counter from "../views/Counter.vue";
import DashboardAdmin from "../views/DashboardAdmin.vue";
import { authStore } from "../store/auth";

// Create the router instance
const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/", component: Home },
    { path: "/login", component: Login, },
    { path: "/register", component: Register },
    {
      path: "/product",
      component: DashboardProduct,
      meta: {
        needsAuth: true,
      },
    },
    { path: "/user", component: DashboardUser },
    {
      path: "/dashboard",
      component: HomeDashboard,
      meta: {
        needsAuth: true,
      },
    },
    {
      path: "/movie",
      component: Movie,
      meta: {
        needsAuth: true,
      },
    },
    { path: "/counter", component: Counter },
    {
      path: "/user-management",
      component: DashboardAdmin,
      meta: {
        needsAuth: true,
      },
    },
  ],
});

// router.beforeEach((to, from, next) => {
//   if (to.meta.needsAuth) {
//     if (authStore.isLoggedIn) {
//       next();
//     } else {
//       alert("please login first");
//       next("/login");
//     }
//   } else {
//     next(); // No authentication required
//   }
// });

export default router;
