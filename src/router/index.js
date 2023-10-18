import { createRouter, createWebHistory } from "vue-router";
import { authStore } from './../store/auth';
import Login from "../views/Login.vue";
import Register from "../views/Register.vue";
import DashboardProduct from "../views/DashboardProduct.vue";
import Home from "../views/Home.vue";
import HomeDashboard from "../views/HomeDashboard.vue";
import DashboardAdmin from "../views/DashboardAdmin.vue";
import Socket from "../views/Socket.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/", component: Home },
    { path: "/login", component: Login },
    { path: "/register", component: Register },
    { path: "/web-socket", component: Socket, meta: { requiresAuth: true }},
    { path: "/product", component: DashboardProduct, meta: { requiresAuth: true } },
    { path: "/dashboard", component: HomeDashboard, meta: { requiresAuth: true }},
    { path: "/user-management", component: DashboardAdmin, meta: { requiresAuth: true }},
  ],
});

router.beforeEach((to, from, next) => {
  const store = authStore(); // Create an instance of authStore
  if (to.meta.requiresAuth && !store.userInfo.token) {
    // If the route requires authentication and the user is not authenticated
    // Redirect the user to the login page
    
    // console.log(store.userInfo.token)
    alert('Please Login first');
    next('/login');
  } else {
    next();
  }
});

export default router;
